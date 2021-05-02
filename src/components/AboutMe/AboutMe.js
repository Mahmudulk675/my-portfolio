import React from 'react';
import myPhoto from '../../images/my-bg.png'

const AboutMe = () => {
    return (

        <div className="container d-flex justify-content-centre mt-5">
            <div className="row ">
                <div className="col-md-5">
                    <img style={{ height: '350px' }} className="img-fluid" src={myPhoto} alt="" />
                </div>
                <div className="col-md-7 d-flex align-items-center text-start">
                    <div className="">
                        <h2>A Junior <br /> <span style={{ color: 'purple' }}>Full Stack Developer</span></h2>
                        <p>Hey there,
                        It's me Mahmudul Hasan, a boy with unlimited curiosity on Computer, Programming and technology. Being curious on Computer and Programming I started learning it from my very childhood. <br/> <br/>

                        Recently I completed my Web development courses and become a junior web developer. I have a good hand and experience on Html5, CSS3, Bootstrap, Javascript, React, Firebase, Material UI, React Native, Redux, Node.js, Express.js, and MongoDB. <br/> <br/>

                        Right Now, I aim to attain an engaging internship position in the field of Web
                        Development. I'm committed to create creative websites on work
                        on interesting projects..</p>
                        
                        <a className="btn btn-success" href="https://www.linkedin.com/in/mahmudul-hasan-92142414b/" target="_blank">More About Me</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutMe;