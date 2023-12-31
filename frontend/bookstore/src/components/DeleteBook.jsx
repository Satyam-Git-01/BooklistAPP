import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const navigate = useNavigate();
  const {id}= useParams()
  const yesHandler = () => {
    axios
      .delete(`http://localhost:5000/book/${id}`)
      .then((response) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const noHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <h2 className="p-3 text-black">Are You Sure??</h2>
      <button
        className=" p-3 m-4 bg-red-700 text-white"
        onClick={(e) => {
          yesHandler();
        }}
      >
        Yes
      </button>
      <button
        className=" p-3 m-4 bg-green-700 text-white"
        onClick={(e) => {
          noHandler();
        }}
      >
        No
      </button>
    </div>
  );
};

export default DeleteBook;
