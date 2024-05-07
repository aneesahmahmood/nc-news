import { useState, useEffect } from "react";
import getAllArticles from "../../utils/get-all-articles";

function AllArticles() {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((articles) => {
      setAllArticles(articles);
    });
  }, []);

  return (
    <div className="homePageArticles">
      <h2 className="articleHeader">Articles</h2>
      <ul className="allArticles">
        {allArticles.map((article) => {
          return (
            <li className="listItems" key={article.id}>
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
