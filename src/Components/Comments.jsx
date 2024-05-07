import { useEffect, useState } from "react";
import getCommentsById from "../../utils/get-comments-by-id";
import { useParams } from "react-router-dom";

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

  if (isLoading) {
    return <p>loading...</p>;
  }

  <div className="comments-container">
    {comments.map((comment) => (
      <div key={comment.comment_id} className="comment">
        <span>Author: {comment.author}</span>
        <span>Article ID: {comment.article_id}</span>
        <p>{comment.body}</p>
        <span>Votes: {comment.votes}</span>
        <span>Created at: {comment.created_at}</span>
      </div>
    ))}
  </div>;

  {
    return (
      <ul className="comments-container">
        {comments.map((comment) => (
          <li key={comment.comment_id}>
            <div className="comments">
              <br />
              {comment.author}
              <br />
              Article ID: {comment.article_id}
              <br />
              {comment.body}
              <br />
              Votes: {comment.votes}
              <br />
              Created at: {new Date(comment.created_at).toDateString()}
              <br />
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Comments;
