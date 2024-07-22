import { useState, useRef } from "react";

export default function UploadImage() {
  const [image, setImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:4000/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Image uploaded successfully!");
        setShowModal(true);
        setImage(null); // Bersihkan state image
        fileInputRef.current.value = ""; // Bersihkan input file
      } else {
        console.error("Failed to upload image:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input type="file" onChange={handleImageChange} ref={fileInputRef} className="mb-4" />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Upload Image</button>
      </form>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <p className="mb-4">File {fileName} telah terupload!</p>
            <button onClick={closeModal} className="px-4 py-2 bg-blue-500 text-white rounded">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
