import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import getSingleArticle from "../../utils/get-single-article";
import { useNavigate } from "react-router-dom";
import patchVotes from "../../utils/vote-on-articles";

function SingleArticle() {
  const { articleId } = useParams();
  const [article, setArticle] = useState({});
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [voteChange, setVoteChange] = useState("");

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

  const handleVote = (vote) => {
    patchVotes(articleId, vote).then((data) => {
      setArticle(data.article);
      setVoteChange(true);
    });
  };

  return (
    <div className="container">
      <div className="singleArticle">
        <Link to="/articles">
          <button>Return to Home</button>
        </Link>
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
        <button disabled={voteChange === true} onClick={() => handleVote(1)}>
          {" "}
          +
        </button>
        <p>Votes: {article.votes}</p>
        <button disabled={voteChange === true} onClick={() => handleVote(-1)}>
          {" "}
          -
        </button>
        <br />
      </div>
    </div>
  );
}

export default SingleArticle;
