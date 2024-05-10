/* eslint-disable react/prop-types */
import { useState } from "react";
import postComment from "../../utils/add-comment";
import getCommentsById from "../../utils/get-comments-by-id";

function AddComment(props) {
  const { articleId } = props;
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(articleId, comment, username).then((response) => {
      if (response) {
        setUsername("");
        setComment("");
        getCommentsById();
        alert("Comment posted successfully");
      }
    });
  };

  return (
    <>
      <form className="commentform" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="name"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Comment:
          <textarea
            name="comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          ></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default AddComment;
