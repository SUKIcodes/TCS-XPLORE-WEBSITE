import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";
import toast from "react-hot-toast";
import "./app.css";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [question, setQuestion] = useState("");
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const login = () => {
    if (!email || !password) {
      toast.error("Email and Password fields should not be empty");
      return;
    }
    navigate("/product", {
      state: {
        email,
      },
    });
  };
  const feedback = () => {
    {
      name || mail || question
        ? toast.success("Thanks, we will get intouch with you shortly")
        : toast.error("All Fields must be filled");
    }
    setMail("");
    setName("");
    setQuestion("");
  };
  return (
    <>
      <div className="mainContainer">
        <img src="./assets/logo.jpg" className="logo" alt="logo" />
        <div className="wrapper">
          <div className="wrapperLeft">
            <h2 className="heading">Registered Candidates (India)</h2>
            <input
              className="inputBox"
              type="text"
              placeholder="Email/ Reference ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="or">OR</span>
            <input
              className="inputBox"
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={login} className="inputBox btn">
              Login
            </button>
            <h5 className="footer">Unlock Account & Reset Password? </h5>
          </div>
          <div className="wrapperRight">
            <img
              className="cross"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Cross_icon_%28white%29.svg/1024px-Cross_icon_%28white%29.svg.png"
              alt=""
            />
            <div className="right">
              <h3 className="h3">
                New Candidate?{" "}
                <span>
                  <Link className="register" to="/register">
                    Register Here
                  </Link>
                </span>
              </h3>
              <h5 className="country">
                If you are from different country,{" "}
                <span className="click">Click here</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="secondContainer">
        <div className="secondHeading">
          <img className="mark" src="./assets/mark.png" />
          <h2 className="question">ASK US A QUESTION</h2>
        </div>
      </div>
      <div className="form">
        <TextField
          className="input"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          className="input"
          placeholder="Email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <TextField
          className="input txt"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.validationMessagelue)}
        />
        <Button type="button" onClick={feedback} className="button">
          Send
        </Button>
      </div>
      <div className="thirdContainer">
        <h4 className="lst tata">
          TATA <span className="service">CONSULTANCY SERVICES</span>
        </h4>
        <h5 className="lst text">
          Copyright @ 2022 Tata Consultancy Services | Build Number :
          1.47.0-9-f293467 | About TCS | Privacy Notice | Disclaimer
        </h5>
        <h5 className="lst text">
          We use cookies to give you the best possible experience on our
          website.To find out more, read our updated{" "}
          <span className="cookie">Cookie Policy</span>
        </h5>

        <img
          onClick={() => setModal(true)}
          className="rexa"
          src="./assets/rex.png"
          alt="rexa"
        />
        <Modal className="modal" isOpen={modal} toggle={() => setModal(!modal)}>
          <ModalBody>
            <img
              onClick={() => setModal(false)}
              toggle={() => setModal(!modal)}
              className="image"
              src="./assets/image.png"
              alt="image"
            />
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};

export default Home;
