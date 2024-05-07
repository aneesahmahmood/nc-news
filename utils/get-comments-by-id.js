import axios from "axios";

function getCommentsById(article_id) {
  return axios
    .get(
      `https://nc-news-backend-project-u3fr.onrender.com/api/articles/${article_id}/comments`
    )
    .then((response) => {
      return response.data.comments;
    });
}

export default getCommentsById;
