import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const EditBook = () => {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/book/${id}`)
      .then((response) => {
        setBookName(response.data.name);
        setAuthor(response.data.writer);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSubmit = (e) => {
    const postbook = {
      name: bookName,
      writer: author,
    };
    e.preventDefault();
    axios
      .put(`http://localhost:5000/book/${id}`, postbook)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="py-4">
      <div className="flex flex-col border-2 border-red-200 mx-auto">
        <div className="my-4">
          <label htmlFor="name" className="text-xl mr-4 text-grey-500">
            Book Name
          </label>
          <input
            type="text"
            id="name"
            className="border-2 border-green-300 px-4 py-2 w-full"
            onChange={(e) => setBookName(e.target.value)}
            value={bookName}
          />
          <label htmlFor="writer" className="text-xl mr-4 text-grey-500">
            Author Name
          </label>
          <input
            value={author}
            type="text"
            id="writer"
            className="border-2 border-green-300 px-4 py-2 w-full"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-green-800 text-white"
          onClick={(e) => handleSubmit(e)}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default EditBook;
