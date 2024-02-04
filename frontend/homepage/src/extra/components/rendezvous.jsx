import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const Rendezvous = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("rndv pris merci!");
    handleClose();
  };

  const handleSave = () => {
    console.log("Données enregistrées :", formData);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-red p-4 overflow-y-auto backdrop-blur ">
      <div className="max-w-lg mx-auto p-10 bg-white shadow-md">
        <h2 className="text-2xl font-bold mb-4">
          Formulaire de prise de rendez-vous
        </h2>
        <Toaster position="top-right" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Nom et prénom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 w-full"
              required
            ></textarea>
          </div>

          <div className="text-center mt-4">
            <button
              type="submit"
              onClick={() => {
              }}
              className=" text-orange-500 p-2 rounded"
            >
              prendre rendez-vous
            </button>
          </div>
        </form>

        <button onClick={handleClose} className="mt-4 text-gray-500 w-full">
          Fermer
        </button>
      </div>
    </div>
  );
};

export default Rendezvous;
