import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import getSingleArticle from "../../utils/get-single-article";
import { useNavigate } from "react-router-dom";
import patchVotes from "../../utils/vote-on-articles";
import {
  UserOutlined,
  MessageOutlined,
  LikeOutlined,
  DislikeOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

function SingleArticle() {
  const { articleId } = useParams();
  const [article, setArticle] = useState({});
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [voteChange, setVoteChange] = useState(false);

  useEffect(() => {
    getSingleArticle(articleId).then((response) => {
      setIsLoading(false);
      setArticle(response.data);
    });
  }, [articleId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleClick = (articleId) => {
    navigate(`/articles/${articleId}/comments`);
  };

  const handleVote = (vote) => {
    patchVotes(articleId, vote).then((data) => {
      setArticle(data.article);
      setVoteChange(true);
    });
  };

  return (
    <div className="container">
      <div className="singleArticle">
        <Link to="/articles" className="return-link">
          Return to Home
        </Link>
        <h2>{article.title}</h2>
        <img
          src={article.article_img_url}
          className="article-image"
          alt={article.title}
        />
        <div className="article-meta">
          <p className="author">
            <UserOutlined /> {article.author}
          </p>
          <p className="topic">Topic: {article.topic}</p>
          <p className="body">{article.body}</p>
          <div className="action-buttons">
            <div className="vote-buttons">
              <div className="vote-buttons">
                <button
                  className="vote-button"
                  disabled={voteChange}
                  onClick={() => handleVote(1)}
                >
                  <LikeOutlined />
                  <span className="button-label">Like</span>
                </button>
                <button
                  className="vote-button"
                  disabled={voteChange}
                  onClick={() => handleVote(-1)}
                >
                  <DislikeOutlined />
                  <span className="button-label">Dislike</span>
                </button>
              </div>
            </div>
            <div className="votes">
              <span>Votes: {article.votes}</span>
            </div>
            <div
              className="commentsButton"
              onClick={() => handleClick(article.article_id)}
            >
              <MessageOutlined /> {article.comment_count} Comments
            </div>
          </div>
          <p className="created-at">
            Created at: <CalendarOutlined />{" "}
            {new Date(article.created_at).toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleArticle;
