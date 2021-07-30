import React from "react";
import myPhoto from "../../images/my-bg.png";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-centre align-items-center ">
        <div className="row ">
          <div className="col-md-5">
            <img
              //   style={{ height: "350px" }}
              className="img-fluid"
              src={myPhoto}
              alt=""
            />
          </div>
          <div className="col-md-7 d-flex align-items-center text-start">
            <div className="mx-5">
              <h2>
                <span style={{ color: "white" }}>A Junior</span> <br />{" "}
                <span style={{ color: "#55198b" }}>Full Stack Developer</span>
              </h2>
              <p style={{ color: "gray" }} className="mb-5">
                Hey there, It's me Mahmudul Hasan, a boy with unlimited
                curiosity on Computer, Programming and technology. Being curious
                on Computer and Programming I started learning it from my very
                childhood. <br /> <br />
                Recently I completed my Web development courses and become a
                junior web developer. I have a good hand and experience on
                Html5, CSS3, Bootstrap, Javascript, React, Firebase, Material
                UI, React Native, Redux, Node.js, Express.js, and MongoDB.{" "}
                <br /> <br />
                Right Now, I aim to attain an engaging internship position in
                the field of Web Development. I'm committed to create creative
                websites on work on interesting projects..
              </p>

              <a
                className="button"
                href="https://www.linkedin.com/in/mahmudul-hasan-92142414b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ fontWeight: "400" }}>More About Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
