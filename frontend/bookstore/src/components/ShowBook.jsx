import React, { useEffect, useState } from "react";
import BackButton from "./BackButton";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

const ShowBook = () => {
  const [isloading, setLoading] = useState(false);
  const [book, setBook] = useState({});
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/book/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="flex justify-center">
      <BackButton />
      {isloading ? (
        <Spinner />
      ) : (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">Book : {book.name}</h2>
            <h4 className="text-gray-700 text-base">Author : {book.writer}</h4>
            <h5>Date Added : {book.addedOn}</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
