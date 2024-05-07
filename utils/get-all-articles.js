import axios from "axios";

function getAllArticles() {
  return axios
    .get(`https://nc-news-backend-project-u3fr.onrender.com/api/articles`)
    .then((response) => {
      return response.data.articles;
    });
}

export default getAllArticles;
