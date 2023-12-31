import { useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EditBook from "./components/EditBook";
import CreateBook from "./components/CreateBook";
import ShowBook from "./components/ShowBook";
import DeleteBook from "./components/DeleteBook";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/books/create" element={<CreateBook />}></Route>
      <Route path="/books/details/:id" element={<ShowBook />}></Route>
      <Route path="/books/edit/:id" element={<EditBook />}></Route>
      <Route path="/books/delete/:id" element={<DeleteBook />}></Route>
    </Routes>
  );
}

export default App;
