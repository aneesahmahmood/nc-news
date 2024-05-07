import axios from "axios";

function getSingleArticle(article_id) {
  return axios
    .get(`https://nc-news-backend-project-u3fr.onrender.com/api/articles/${article_id}`)
    .then((response) => {
      console.log(response);
      return response;
    });
}

export default getSingleArticle;
