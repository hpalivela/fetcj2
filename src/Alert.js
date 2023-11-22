import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
// import axios from "axios";

const Alert = () => {
  const [data, setData] = useState({
    title: "",
    body: "",
  });
  const { title, body } = data;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // console.log(data)
//     const response = await axios.post(
//       "https://jsonplaceholder.typicode.com/posts",
//       { data }
      
//     );
//     if (response.status===201) {
//       console.log(response);
//       handleClose();
//       setData({});
//     }

//   };
const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(data);
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body:JSON.stringify(data)
    }).then((response)=>response.json()).then((userdata)=>{console.log(userdata)})
    handleClose();
    setData({});
}

  return (
    <>
    <center>
      <Button variant="primary" onClick={handleShow}>
        ADD USER
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="title">Title</Form.Label>
          <Form.Control
            type="text"
            id="title"
            name="title"
            onChange={changeHandler}
            value={title}
          />
          <Form.Label htmlFor="message">Body</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="type message"
            style={{ height: "100px" }}
            id="message"
            name="body"
            onChange={changeHandler}
            value={body}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            create post
          </Button>
        </Modal.Footer>
      </Modal>
      </center>
    </>
  );
};

export default Alert;
