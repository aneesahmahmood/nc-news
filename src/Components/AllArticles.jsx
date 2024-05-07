import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    return <p>loading...</p>;
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
              <img src={article.article_img_url} className="img" />
              <br />
              <b>{article.title}</b>
              <br />
              {article.author}
              <br />
              Topic: {article.topic}
              <br />
              Comments: {article.comment_count}
              <br />
              Votes: {article.votes}
              <br />
              Created at: {article.created_at}
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AllArticles;
