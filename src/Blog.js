import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import Alert from "./Alert";
import "./Blog.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from "react-redux";
import { getAll} from "./BlogActions";


const Blog = () => {
  const [posts, setPosts] = useState([]);
  const complete=useSelector((state)=>state.completePosts.allData)
//   console.log(complete)
    const dispatch=useDispatch()
  
  const navigate=useNavigate()
  useEffect(() => {
    dispatch(getAll())
  }, [dispatch]);
  
  const getSinglePost=(id)=>{
    navigate(`/singlePost/${id}`)
  };
  return (
    <>
      <div>
      <Alert/>
      <div>
        <Container fluid>
            <Row>
                <Col>
                <center>
        {complete.map((post) => {
          return (
            <div className="cardContainer" key={post.id}>
              <h4> {post.title}</h4>
              <p>{post.body}</p>
              <button style={{ backgroundColor: "black", color: "white" }} onClick={()=>getSinglePost(post.id)}>
                view details
              </button>
            </div>
          );
        })}
        </center>
        </Col>
        </Row>
        </Container>
        </div>
      </div>
    </>
  );
};

export default Blog;
