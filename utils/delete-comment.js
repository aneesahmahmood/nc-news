import axios from "axios";

const deleteComment = (comment_id) => {
  return axios
    .delete(
      `https://nc-news-backend-project-u3fr.onrender.com/api/comments/${comment_id}`
    )
    .then((response) => {
      return response;
    });
};

export default deleteComment;
