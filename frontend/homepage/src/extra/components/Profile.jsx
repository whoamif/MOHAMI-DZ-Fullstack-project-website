import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import NavBar from "../../NavBar";
import Footer from "../../Footer";

const ProfilePage = () => {
  const [selectedOption, setSelectedOption] = useState("UserProfile");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    imageUrl: "",
  });

  const [comments, setComments] = useState([{ id: 1, text: "merci" }]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const updateComment = (commentId, newText) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId ? { ...comment, text: newText } : comment
    );
    setComments(updatedComments);
  };

  const deleteComment = (commentId) => {
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
  };

  return (
    <div className="flex flex-col w-screen m-auto">
      <NavBar />
      <div className="w-full">
        <h1 className="text-2xl font-bold mb-4">My Profile</h1>
        <ul className="space-y-4">
          <li>
            <button
              className={`w-full py-2 px-4 text-left ${
                selectedOption === "UserProfile"
                  ? "bg-orange-400 text-white"
                  : ""
              }`}
              onClick={() => handleOptionChange("UserProfile")}
            >
              User Profile
            </button>
          </li>
          <li>
            <button
              className={`w-full py-2 px-4 text-left ${
                selectedOption === "RecentComment"
                  ? "bg-orange-400 text-white"
                  : ""
              }`}
              onClick={() => handleOptionChange("RecentComment")}
            >
              Recent Comment
            </button>
          </li>
        </ul>
      </div>

      <div className="border-1 border-orange-500 h mr-4"></div>

      <div className="w-2/3 p-4 ">
        {selectedOption === "UserProfile" ? (
          <UserProfileSection formData={formData} setFormData={setFormData} />
        ) : (
          <RecentCommentSection
            comments={comments}
            addComment={addComment}
            updateComment={updateComment}
            deleteComment={deleteComment}
          />
        )}

      </div>
      
    </div>
  );
};

const UserProfileSection = ({ formData, setFormData }) => {
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(!editing);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        imageUrl: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSaveClick = () => {
    setEditing(false);
  };

  return (
    <div className="ml-80">
      <h2 className="text-3xl font-bold mb-4">le profile de l'utilisateur</h2>
      <div className="flex flex-col items-center mb-4">
        <div className="w-32 h-32 bg-gray-400 rounded-full overflow-hidden mb-4 relative pt-12">
          {formData.imageUrl ? (
            <img
              src={formData.imageUrl}
              alt="User"
              className="w-full h-full object-cover"
            />
          ) : (
            <span>Photo</span>
          )}
          <label className="text-blue-500 underline cursor-pointer absolute bottom-2 left-12">
            <input
              type="file"
              className="hidden"
              onChange={handleImageChange}
            />
            🖊️
          </label>
        </div>
        <button
          className="text-orange-500 border-1 border-orange-500 px-4 py-2 rounded-md mb-8"
          onClick={handleEditClick}
        >
          modifier
        </button>
      </div>

      {editing ? (
        <div>
          <label htmlFor="name" className="mb-2">
            Nom et prenom :
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mb-4 w-full p-2 border"
            value={formData.name}
            onChange={handleInputChange}
          />

          <label htmlFor="email" className="mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mb-4 w-full p-2 border"
            value={formData.email}
            onChange={handleInputChange}
          />

          <label htmlFor="phone" className="mb-2">
            Num de tel:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mb-4 w-full p-2 border"
            value={formData.phone}
            onChange={handleInputChange}
          />

          {editing && (
            <div className="flex justify-center">
              <button
                className="text-orange-500 border-1 border-orange-500 px-4 py-2 rounded-md "
                onClick={handleSaveClick}
              >
                sauvgarder les changements 
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-left flex flex-col gap-2 ml-44">
          <p className="">
            <span className="font-bold text-xl mr-2">Nom et prenom :</span>{" "}
            {formData.name}
          </p>
          <p className="">
            <span className="font-bold text-xl mr-2">Email:</span>{" "}
            {formData.email}
          </p>
          <p className="">
            <span className="font-bold text-xl mr-2">num de telephone:</span>{" "}
            {formData.phone}
          </p>
        </div>
      )}
    </div>
  );
};

const RecentCommentSection = ({
  comments,
  addComment,
  updateComment,
  deleteComment,
}) => {
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedCommentText, setEditedCommentText] = useState("");

  const handleEditComment = (commentId, commentText) => {
    setEditingCommentId(commentId);
    setEditedCommentText(commentText);
  };

  const handleSaveEdit = (commentId) => {
    updateComment(commentId, editedCommentText);
    setEditingCommentId(null);
    setEditedCommentText("");
  };

  const handleCancelEdit = () => {
    setEditingCommentId(null);
    setEditedCommentText("");
  };

  const handleDeleteComment = (commentId) => {
    deleteComment(commentId);
  };

  return (
    <div className=" w-screen m-auto">
      <h2 className="text-xl font-bold  flex mb-8 ">Commentaires récents"</h2>
      <ul className="">
        {comments.map((comment) => (
          <li key={comment.id} className="mb-4">
            <div className="flex flex-col text-left">
              <div className="flex-1">
                {editingCommentId === comment.id ? (
                  <>
                    <input
                      type="text"
                      value={editedCommentText}
                      onChange={(e) => setEditedCommentText(e.target.value)}
                      className="w-full p-2 border mb-2 md:mr-2"
                    />
                    <div className="flex flex-col ">
                      <button
                        className="border-1 border-orange-500 rounded-md px-4"
                        onClick={() => handleSaveEdit(comment.id)}
                      >
                        sauvgarder
                      </button>
                      <button
                        className="border-1 border-orange-500 rounded-md px-4"
                        onClick={handleCancelEdit}
                      >
                        annuler
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="whitespace-pre-line mb-2">{comment.text}</p>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                      <button
                        className="border-2 border-orange-500 rounded-md px-4  hover:bg-red-200"
                        onClick={() =>
                          handleEditComment(comment.id, comment.text)
                        }
                      >
                        modifer
                      </button>
                      <button
                        className="text-red-500 px-4 border-2 border-red-500 rounded-md hover:bg-red-200"
                        onClick={() => handleDeleteComment(comment.id)}
                      >
                        supprimer
                          </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    
    
  );

};

export default ProfilePage;
