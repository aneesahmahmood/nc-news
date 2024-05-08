import axios from "axios";

const patchVotes = (articleId, vote) => {
  return axios
    .patch(
      `https://nc-news-backend-project-u3fr.onrender.com/api/articles/${articleId}`,
      {
        inc_votes: vote,
      }
    )
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export default patchVotes;
