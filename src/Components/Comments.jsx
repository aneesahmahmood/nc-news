import { useEffect, useState } from "react";
import getCommentsById from "../../utils/get-comments-by-id";
import { useParams, Link } from "react-router-dom";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComment";

function Comments() {
  const { articleId } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsById(articleId).then((response) => {
      setIsLoading(false);
      setComments(response);
    });
  }, [articleId]);

  const handleDeleteComment = (comment_id) => {
    setComments(
      comments.filter((comment) => comment.comment_id !== comment_id)
    );
  };

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <>
      <Link to="/articles" className="homeButtonComment">
        <button>Return to Home</button>
      </Link>

      <ul className="comments-container">
        {comments.map((comment) => (
          <li key={comment.comment_id}>
            <div className="comments">
              <br />
              Author: {comment.author}
              <br />
              Article ID: {comment.article_id}
              <br />
              {comment.body}
              <br />
              Votes: {comment.votes}
              <br />
              Created at: {new Date(comment.created_at).toDateString()}
              <br />
              <br />
              <DeleteComment
                comment_id={comment.comment_id}
                onDelete={handleDeleteComment}
              />
            </div>
          </li>
        ))}
      </ul>
      <AddComment articleId={articleId} />
    </>
  );
}

export default Comments;
