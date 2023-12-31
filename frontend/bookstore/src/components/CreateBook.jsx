import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
const CreateBook = () => {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const navigate= useNavigate();
  const handleSubmit = (e) => {
    const book = {
      name: bookName,
      writer: author,
    };
    e.preventDefault();
    axios
      .post("http://localhost:5000/book", book)
      .then((response) => {
        console.log(response);
        navigate('/')
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
          />
          <label htmlFor="writer" className="text-xl mr-4 text-grey-500">
            Author Name
          </label>
          <input
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

export default CreateBook;
