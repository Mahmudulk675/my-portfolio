import React from "react";
import "./../../index.css";
import { motion } from "framer-motion";

const boxVariants = {
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
    },
  },
};

const Portfolio = () => {
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h1 className="heading">Projects I have Built</h1>
      <div className="projects-container">
        {/* Project - Diaries Manager App */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://laptop-legend-edb43.web.app/"
          >
            <div className="project-images" id="diariesApp"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Laptop Legend</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Mahmudulk675/Laptop-Legend"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Mahmudulk675/Laptop-Legend-Server"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://laptop-legend-edb43.web.app/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Project - Shoe Store */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://sunshine-b8f0e.web.app/"
          >
            <div className="project-images" id="shoeStore"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>SunShine (e-Commerce)</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Mahmudulk675/sunshine-client"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Mahmudulk675/sunshine-server"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://sunshine-b8f0e.web.app/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
        {/* Project - Todo List */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://pick-me-ride.web.app/"
          >
            <div className="project-images" id="todoList"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Pick-ME Ride</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Mahmudulk675/pickme-ride"
              >
                <i
                  className="fab fa-github"
                  title="github repo"
                  id="github"
                ></i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://pick-me-ride.web.app/"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
        {/* Project - Blog Site */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://techberg-blog.netlify.app/"
          >
            <div className="project-images" id="gatsbyBlog"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Blog Site (GatsbyJs)</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/developer-junaid/Blog-Site"
              >
                <i
                  className="fab fa-github"
                  title="github repo"
                  id="github"
                ></i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://techberg-blog.netlify.app/"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
        {/* Project - Uber Eats Landing */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://uber-eats-landing-page.netlify.app/"
          >
            <div className="project-images" id="uberEats"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Uber Eats (Landing Page)</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/developer-junaid/Uber-Eats-Clone"
              >
                <i
                  className="fab fa-github"
                  title="github repo"
                  id="github"
                ></i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://uber-eats-landing-page.netlify.app/"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Project - Corona Tracker */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://online-corona-tracker.web.app/"
          >
            <div className="project-images" id="coronaTracker"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Corona Virus Tracker</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/developer-junaid/Corona-Virus-Tracker"
              >
                <i
                  className="fab fa-github"
                  title="github repo"
                  id="github"
                ></i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://online-corona-tracker.web.app/"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
        {/* Project - Developerfolio */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://programmer-mahmudul.web.app/"
          >
            <div className="project-images" id="devFolio"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>My Portfolio (DevFolio)</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Mahmudulk675/my-portfolio"
              >
                <i
                  className="fab fa-github"
                  title="github repo"
                  id="github"
                ></i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://programmer-mahmudul.web.app/"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/Mahmudulk675"
        className="button-link"
      >
        <button className="button">More Projects</button>
      </a>
    </section>
  );
};

export default Portfolio;
