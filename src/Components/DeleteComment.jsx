import deleteComment from "../../utils/delete-comment";

const DeleteComment = ({ comment_id, onDelete }) => {
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (confirmDelete) {
      deleteComment(comment_id).then(() => {
        onDelete(comment_id);
      });
    }
  };

  return <button onClick={handleDelete}>Delete Comment</button>;
};

export default DeleteComment;
