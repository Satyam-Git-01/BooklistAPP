import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/book")
      .then((resp) => {
        console.log(resp.data);
        setBooks(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error");
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">SNo</th>
              <th className="border border-slate-600 rounded-md">Name</th>
              <th className="border border-slate-600 rounded-md">Author</th>
              <th className="border border-slate-600 rounded-md">Year Added</th>
              <th className="border border-slate-600 rounded-md">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => {
              return (
                <tr key={book._id} className="h-8">
                  <td className="border border-slate-700 rouded-md text-center">
                    {index + 1}
                  </td>
                  <td className="border border-slate-700 rouded-md text-center">
                    {book.name}
                  </td>
                  <td className="border border-slate-700 rouded-md text-center">
                    {book.writer}
                  </td>
                  <td className="border border-slate-700 rouded-md text-center">
                    {new Date(book.addedOn).getFullYear().toString()}
                  </td>
                  <td className="border border-slate-700 rouded-md text-center">
                    <div className="flex flex-wrap justify-center gap-x-4">
                      <Link to={`/books/edit/${book.id}`}>
                        <AiOutlineEdit className="text-green-800" />
                      </Link>
                      <Link to={`/books/details/${book.id}`}>
                        <BsInfoCircle className="text-yellow-800" />
                      </Link>
                      <Link to={`/books/delete/${book.id}`}>
                        <MdOutlineDelete className="text-red-800" />
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
