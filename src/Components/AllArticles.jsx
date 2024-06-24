import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";
import {
  UserOutlined,
  MessageOutlined,
  LikeOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import getAllArticles from "../../utils/get-all-articles";

function AllArticles() {
  const [allArticles, setAllArticles] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((articles) => {
      setIsLoading(false);
      setAllArticles(articles);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleClick = (articleId) => {
    navigate(`/articles/${articleId}`);
  };

  return (
    <div className="homePageArticles">
      <h2 className="articleHeader">Articles</h2>
      <ul className="allArticles">
        {allArticles.map((article) => {
          return (
            <li
              className="listItems"
              key={article.article_id}
              onClick={() => handleClick(article.article_id)}
            >
              <Card
                title={article.title}
                hoverable
                cover={
                  <img
                    src={article.article_img_url}
                    alt={article.title}
                    className="img"
                  />
                }
              >
                <div className="article-details">
                  <p>
                    <UserOutlined /> {article.author}
                  </p>
                  <p>
                    <MessageOutlined /> Comments: {article.comment_count}
                  </p>
                  <p>
                    <LikeOutlined /> Votes: {article.votes}
                  </p>
                  <p>
                    <CalendarOutlined /> Created at:{" "}
                    {new Date(article.created_at).toDateString()}
                  </p>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AllArticles;
