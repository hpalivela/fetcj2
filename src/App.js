import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./Header";
import Blog from "./Blog";
import SinglePost from "./SinglePost";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Blog />}></Route>
          <Route exact path="/singlePost/:id" element={<SinglePost />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    // <div>
    //   {/* <Header/> */}
    // </div>
  );
};

export default App;
