import axios from "axios";

const postComment = (articleId, comment, username) => {
  return axios
    .post(
      `https://nc-news-backend-project-u3fr.onrender.com/api/articles/${articleId}/comments`,
      { username: username, body: comment }
    )
    .then((response) => {
      return response.data;
    });
};

export default postComment;
