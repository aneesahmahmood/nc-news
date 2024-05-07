import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getSingleArticle from "../../utils/get-single-article";

function Articles() {
  const { articleId } = useParams();
  const [article, setArtical] = useState({});

  useEffect(() => {
    getSingleArticle(articleId).then((response) => {
      setArtical(response.data);
    });
  }, [articleId]);

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
        Comments: {article.comment_count}
        <br />
        <br />
        Created at: {article.created_at}
        <br />
        <br />
        Votes: {article.votes}
        <br />
      </div>
    </div>
  );
}

export default Articles;
