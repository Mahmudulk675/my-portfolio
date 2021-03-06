import React from "react";
import classes from "./skills.module.css";
import LinearProgress from "@bit/developer-junaid.collection.linear-progress";

const Skills = () => {
  return (
    <section
      data-aos="fade-right"
      className="skills-container"
      name="skills"
      id="skills"
    >
      <h1 className="heading">
        <span style={{ color: "white" }}> What I Am Good At &nbsp;&nbsp;?</span>
      </h1>

      <div className={classes.techs}>
        <LinearProgress label="HTML" value={100} color={"green"} />
        <LinearProgress label="CSS" value={95} color={"green"} />
        {/* <LinearProgress label="Sass" value={90} color={"green"} /> */}
        <LinearProgress label="Bootstrap" value={95} color={"green"} />
        <LinearProgress label="Material UI" value={75} color={"yellow"} />
        <LinearProgress label="Figma" value={70} color={"yellow"} />

        <LinearProgress
          label="Javascript and (ES+6)"
          value={90}
          color={"green"}
        />
        <LinearProgress label="ReactJs" value={95} color={"green"} />
        <LinearProgress label="Vue js" value={80} color={"green"} />
        {/* <LinearProgress label="Headless CMS" value={85} color={"green"} /> */}

        <LinearProgress label="Typescript" value={70} color={"yellow"} />

        {/* <LinearProgress
          label="GraphQl / Rest-API Consumption/Building"
          value={85}
          color={"green"}
        /> */}
        <LinearProgress label="Firebase" value={80} color={"green"} />
        <LinearProgress
          label="Redux and Context API"
          value={85}
          color={"green"}
        />

        <LinearProgress label="NodeJS" value={80} color={"green"} />
        <LinearProgress label="MongoDB" value={80} color={"green"} />
        <LinearProgress label="ExpressJS" value={80} color={"green"} />
        <LinearProgress label="Shopify" value={70} color={"green"} />

        {/* <LinearProgress label="ML Libraries" value={50} color={"green"} /> */}
      </div>
    </section>
  );
};

export default Skills;
