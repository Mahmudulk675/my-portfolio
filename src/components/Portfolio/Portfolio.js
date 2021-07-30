// import React from "react";
// import "./../../index.css";
// import { motion } from "framer-motion";

// const boxVariants = {
//   hover: {
//     scale: 1.02,
//     transition: {
//       type: "spring",
//     },
//   },
// };

// const Portfolio = () => {
//   return (
//     <section
//       data-aos="fade-up"
//       classNameName="portfolio-container"
//       name="portfolio"
//       id="portfolio"
//     >
//       <h1 style={{ color: "white" }} classNameName="heading">
//         Projects I have Built
//       </h1>
//       <div classNameName="projects-container">
//         {/* Project - Diaries Manager App */}
//         <motion.div
//           variants={boxVariants}
//           whileHover="hover"
//           classNameName="projects"
//         >
//           <a
//             rel="noopener noreferrer"
//             target="_blank"
//             href="https://laptop-legend-edb43.web.app/"
//           >
//             <div classNameName="project-images" id="diariesApp"></div>
//           </a>
//           <div classNameName="project-links">
//             <div classNameName="text">
//               <h3>Laptop Legend</h3>
//             </div>
//             <div classNameName="icons">
//               <a
//                 rel="noopener noreferrer"
//                 target="_blank"
//                 href="https://github.com/Mahmudulk675/Laptop-Legend"
//               >
//                 <i classNameName="fab fa-github" title="github repo" id="github">
//                   {" "}
//                 </i>
//               </a>
//               <a
//                 rel="noopener noreferrer"
//                 target="_blank"
//                 href="https://github.com/Mahmudulk675/Laptop-Legend-Server"
//               >
//                 <i classNameName="fab fa-github" title="github repo" id="github">
//                   {" "}
//                 </i>
//               </a>
//               <a
//                 rel="noopener noreferrer"
//                 href="https://laptop-legend-edb43.web.app/"
//                 target="_blank"
//               >
//                 {" "}
//                 <i
//                   classNameName="fas fa-external-link-alt"
//                   title="live preview"
//                   id="live"
//                 ></i>
//               </a>
//             </div>
//           </div>
//         </motion.div>
//         {/* // */}

//         {/* Project - Shoe Store */}
//         <motion.div
//           variants={boxVariants}
//           whileHover="hover"
//           classNameName="projects"
//         >
//           <a
//             rel="noopener noreferrer"
//             target="_blank"
//             href="https://sunshine-b8f0e.web.app/"
//           >
//             <div classNameName="project-images" id="shoeStore"></div>
//           </a>

//           <div classNameName="project-links">
//             <div classNameName="text">
//               <h3>SunShine (e-Commerce)</h3>
//             </div>
//             <div classNameName="icons">
//               <a
//                 rel="noopener noreferrer"
//                 target="_blank"
//                 href="https://github.com/Mahmudulk675/sunshine-client"
//               >
//                 <i classNameName="fab fa-github" title="github repo" id="github">
//                   {" "}
//                 </i>
//               </a>
//               <a
//                 rel="noopener noreferrer"
//                 target="_blank"
//                 href="https://github.com/Mahmudulk675/sunshine-server"
//               >
//                 <i classNameName="fab fa-github" title="github repo" id="github">
//                   {" "}
//                 </i>
//               </a>
//               <a
//                 rel="noopener noreferrer"
//                 href="https://sunshine-b8f0e.web.app/"
//                 target="_blank"
//               >
//                 {" "}
//                 <i
//                   classNameName="fas fa-external-link-alt"
//                   title="live preview"
//                   id="live"
//                 ></i>
//               </a>
//             </div>
//           </div>
//         </motion.div>
//         {/* // */}
//         {/* Project - Todo List */}
//         <motion.div
//           classNameName="projects"
//           variants={boxVariants}
//           whileHover="hover"
//         >
//           <a
//             rel="noopener noreferrer"
//             target="_blank"
//             href="https://pick-me-ride.web.app/"
//           >
//             <div classNameName="project-images" id="todoList"></div>
//           </a>

//           <div classNameName="project-links">
//             <div classNameName="text">
//               <h3>Pick-ME Ride</h3>
//             </div>
//             <div classNameName="icons">
//               <a
//                 rel="noopener noreferrer"
//                 target="_blank"
//                 href="https://github.com/Mahmudulk675/pickme-ride"
//               >
//                 <i
//                   classNameName="fab fa-github"
//                   title="github repo"
//                   id="github"
//                 ></i>
//               </a>
//               <a
//                 rel="noopener noreferrer"
//                 href="https://pick-me-ride.web.app/"
//                 target="_blank"
//               >
//                 <i
//                   classNameName="fas fa-external-link-alt"
//                   title="live preview"
//                   id="live"
//                 ></i>
//               </a>
//             </div>
//           </div>
//         </motion.div>
//         {/* // */}
//         {/* Project - Blog Site */}
//         <motion.div
//           classNameName="projects"
//           variants={boxVariants}
//           whileHover="hover"
//         >
//           <a
//             rel="noopener noreferrer"
//             target="_blank"
//             href="https://techberg-blog.netlify.app/"
//           >
//             <div classNameName="project-images" id="gatsbyBlog"></div>
//           </a>

//           <div classNameName="project-links">
//             <div classNameName="text">
//               <h3>Blog Site (GatsbyJs)</h3>
//             </div>
//             <div classNameName="icons">
//               <a
//                 rel="noopener noreferrer"
//                 target="_blank"
//                 href="https://github.com/developer-junaid/Blog-Site"
//               >
//                 <i
//                   classNameName="fab fa-github"
//                   title="github repo"
//                   id="github"
//                 ></i>
//               </a>
//               <a
//                 rel="noopener noreferrer"
//                 href="https://techberg-blog.netlify.app/"
//                 target="_blank"
//               >
//                 <i
//                   classNameName="fas fa-external-link-alt"
//                   title="live preview"
//                   id="live"
//                 ></i>
//               </a>
//             </div>
//           </div>
//         </motion.div>
//         {/* // */}
//         {/* Project - Uber Eats Landing */}
//         <motion.div
//           classNameName="projects"
//           variants={boxVariants}
//           whileHover="hover"
//         >
//           <a
//             rel="noopener noreferrer"
//             target="_blank"
//             href="https://uber-eats-landing-page.netlify.app/"
//           >
//             <div classNameName="project-images" id="uberEats"></div>
//           </a>

//           <div classNameName="project-links">
//             <div classNameName="text">
//               <h3>Uber Eats (Landing Page)</h3>
//             </div>
//             <div classNameName="icons">
//               <a
//                 rel="noopener noreferrer"
//                 target="_blank"
//                 href="https://github.com/developer-junaid/Uber-Eats-Clone"
//               >
//                 <i
//                   classNameName="fab fa-github"
//                   title="github repo"
//                   id="github"
//                 ></i>
//               </a>
//               <a
//                 rel="noopener noreferrer"
//                 href="https://uber-eats-landing-page.netlify.app/"
//                 target="_blank"
//               >
//                 <i
//                   classNameName="fas fa-external-link-alt"
//                   title="live preview"
//                   id="live"
//                 ></i>
//               </a>
//             </div>
//           </div>
//         </motion.div>
//         {/* // */}

//         {/* Project - Corona Tracker */}
//         <motion.div
//           classNameName="projects"
//           variants={boxVariants}
//           whileHover="hover"
//         >
//           <a
//             rel="noopener noreferrer"
//             target="_blank"
//             href="https://online-corona-tracker.web.app/"
//           >
//             <div classNameName="project-images" id="coronaTracker"></div>
//           </a>

//           <div classNameName="project-links">
//             <div classNameName="text">
//               <h3>Corona Virus Tracker</h3>
//             </div>
//             <div classNameName="icons">
//               <a
//                 rel="noopener noreferrer"
//                 target="_blank"
//                 href="https://github.com/developer-junaid/Corona-Virus-Tracker"
//               >
//                 <i
//                   classNameName="fab fa-github"
//                   title="github repo"
//                   id="github"
//                 ></i>
//               </a>
//               <a
//                 rel="noopener noreferrer"
//                 href="https://online-corona-tracker.web.app/"
//                 target="_blank"
//               >
//                 <i
//                   classNameName="fas fa-external-link-alt"
//                   title="live preview"
//                   id="live"
//                 ></i>
//               </a>
//             </div>
//           </div>
//         </motion.div>
//         {/* // */}
//         {/* Project - Developerfolio */}
//         <motion.div
//           classNameName="projects"
//           variants={boxVariants}
//           whileHover="hover"
//         >
//           <a
//             rel="noopener noreferrer"
//             target="_blank"
//             href="https://programmer-mahmudul.web.app/"
//           >
//             <div classNameName="project-images" id="devFolio"></div>
//           </a>

//           <div classNameName="project-links">
//             <div classNameName="text">
//               <h3>My Portfolio (DevFolio)</h3>
//             </div>
//             <div classNameName="icons">
//               <a
//                 rel="noopener noreferrer"
//                 target="_blank"
//                 href="https://github.com/Mahmudulk675/my-portfolio"
//               >
//                 <i
//                   classNameName="fab fa-github"
//                   title="github repo"
//                   id="github"
//                 ></i>
//               </a>
//               <a
//                 rel="noopener noreferrer"
//                 href="https://programmer-mahmudul.web.app/"
//                 target="_blank"
//               >
//                 <i
//                   classNameName="fas fa-external-link-alt"
//                   title="live preview"
//                   id="live"
//                 ></i>
//               </a>
//             </div>
//           </div>
//         </motion.div>
//         {/* // */}
//       </div>
//       <a
//         rel="noopener noreferrer"
//         target="_blank"
//         href="https://github.com/Mahmudulk675"
//         classNameName="button-link"
//       >
//         <button classNameName="button">More Projects</button>
//       </a>
//     </section>
//   );
// };

// export default Portfolio;

import React from "react";
import "./../../index.css";
import ProjectData from "../ProjectData";
// import { motion } from "framer-motion";
import { GitHub, Launch } from "@material-ui/icons";

// const boxVariants = {
//   hover: {
//     scale: 1.02,
//     transition: {
//       type: "spring",
//     },
//   },
// };

const Portfolio = () => {
  return (
    <section
      data-aos="fade-up"
      classNameName=""
      name="portfolio"
      id="portfolio"
    >
      <div className="container ">
        <div className="row">
          {ProjectData.map((pd) => (
            <div className="col-md-4 mt-5 d-flex justify-content-center">
              <div className="card projects-card" style={{ width: "18rem" }}>
                <img
                  src={pd.image}
                  style={{ padding: "5px" }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body" style={{ background: "lightGray" }}>
                  <h4 className="card-title" style={{ color: "black" }}>
                    {pd.name}
                  </h4>
                  <p className="card-text" style={{ color: "gray" }}>
                    {pd.destination}
                  </p>
                  <div className="links">
                    <a
                      style={{ marginLeft: "10px" }}
                      href={pd.links?.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Launch />
                    </a>
                    <a
                      style={{ marginLeft: "15px" }}
                      href={pd.links?.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHub />
                    </a>
                    {pd.links.backend ? (
                      <a
                        style={{ marginLeft: "15px" }}
                        href={pd.links.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHub />
                      </a>
                    ) : null}
                    {pd.links.socket ? (
                      <a
                        style={{ marginLeft: "15px" }}
                        href={pd.links.socket}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHub />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/Mahmudulk675"
          classNameName="button-link text-center"
        >
          <button classNameName="button">More Projects</button>
        </a> */}
      </div>
    </section>
  );
};

export default Portfolio;
