import React, { useState } from 'react';
import './index';

const CommentSystem = () => {
  
  const [comments, setComments] = useState([
    { id: 1, text: '"Je recommande vivement cet avocat', user: 'a' },
    { id: 2, text: 'Mon avocat a été extrêmement compétent et professionnel. Il a résolu mon affaire rapidement et a toujours été disponible pour répondre à mes questions', user: 'b' },
  ]);

 
  const [newComment, setNewComment] = useState('');
  const [showCommentForm, setShowCommentForm] = useState(false);

 
  const handleCommentClick = () => {
    setShowCommentForm(true);
  };

 
  const handleSaveComment = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      const newCommentObj = {
        id: comments.length + 1,
        text: newComment,
        user: 'you',
      };

      setComments([newCommentObj, ...comments]);
      setNewComment('');
      setShowCommentForm(false);
    }
  };


  const handleDeleteComment = (commentId) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    setComments(updatedComments);
  };

  
  const handleUpdateComment = (commentId, newText) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId ? { ...comment, text: newText } : comment
    );
    setComments(updatedComments);
  };

  return (
    <div className="p-12">
      <button
        onClick={handleCommentClick}
        className="bg-orange-500 text-white p-2 rounded mb-4"
      >
        Commenter
      </button>

      {showCommentForm && (
        <form onSubmit={handleSaveComment} className="mb-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 border border-gray-300 resize-none"
            placeholder="Écrivez votre commentaire..."
            rows={3}
          ></textarea>
          <button type="submit" className="border-1 border-orange-500 text-black p-2 rounded mt-2">
            Sauvgarder
          </button>
        </form>
      )}

      {comments.map((comment) => (
        <div key={comment.id} className="mb-4 border p-4 flex flex-col md:flex-row items-start comment-container">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold">{comment.user}</span>
            </div>
            <p className="comment-text w-max break-words">{comment.text}</p>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => handleUpdateComment(comment.id, prompt('Modifier le commentaire', comment.text))}
              className="text-blue-500"
            >
              Modifier
            </button>
            <button
              onClick={() => handleDeleteComment(comment.id)}
              className="text-red-500"
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentSystem;
