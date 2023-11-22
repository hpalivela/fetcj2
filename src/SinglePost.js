import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { singleData } from "./BlogActions";
import { useDispatch, useSelector } from "react-redux";

const SinglePost = () => {
  const [post, setPost] = useState([]);
  const single = useSelector((state) => state.completePosts.oneData);
  console.log(single);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleData(id));
  }, [dispatch, id]);
  const homePage = () => {
    navigate("/");
  };
  return (
    <center>
      {single.map((post, id) => {
        return (
          <div className="cardContainer">
            <h4> {post.title}</h4>
            <p>{post.body}</p>
            <button
              style={{ backgroundColor: "black", color: "white" }}
              onClick={() => homePage()}
            >
              Back to Home
            </button>
          </div>
        );
      })}
    </center>
  );
};

export default SinglePost;
