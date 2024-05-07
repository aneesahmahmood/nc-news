import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getSingleArticle from "../../utils/get-single-article";
import { useNavigate } from "react-router-dom";

function Articles() {
  const { articleId } = useParams();
  const [article, setArticle] = useState({});
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSingleArticle(articleId).then((response) => {
      setIsLoading(false);
      setArticle(response.data);
    });
  }, [articleId]);

  if (isLoading) {
    return <p>loading...</p>;
  }

  const handleClick = (articleId) => {
    navigate(`/articles/${articleId}/comments`);
  };

  return (
    <div className="container">
      <div className="singleArticle">
        <a href="http://localhost:5173/articles">
          <button>Return to Home</button>
        </a>
        <h2>{article.title}</h2>
        <img src={article.article_img_url} className="img" />
        <br />
        <b>{article.title}</b>
        <br />
        {article.author}
        <br />
        <br />
        Topic: {article.topic}
        <br />
        <br />
        {article.body}
        <br />
        <br />
        <div
          className="commentsButton"
          onClick={() => handleClick(article.article_id)}
        >
          Comments: {article.comment_count}
        </div>
        <br />
        <br />
        Created at: {new Date(article.created_at).toDateString()}
        <br />
        <br />
        Votes: {article.votes}
        <br />
      </div>
    </div>
  );
}

export default Articles;
