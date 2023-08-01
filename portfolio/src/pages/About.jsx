import React from "react";
import { Link } from "react-router-dom";
const About = () => {

    const downloadFile = () => {
        window.location.href = "https://localhost:5173/src/assets/Emmons_Resume.pdf"
    }
    return (
        <div>
            <h3 className="subheader">Hey, I'm Nicholas.</h3>
            <br />
            <img src="https://avatars.githubusercontent.com/u/131407670?v=4" className="myProfile" alt="myProfile" />
            <br />
            <a href="https://www.linkedin.com/in/nemmons27/" className="linkedinPlug">LinkedIn</a> | <a href="https://github.com/nemmons27" className="githubPlug">Github</a> 
            <br />
            <p>I'm a Software Engineer with nothing but potential! Thi</p>
            <p>I graduated from General Assembly's Software Engineering 2.0 Immersive (which gave me a strong 420 hours of coding experience) in July of 2023. </p>
            <p></p>
        </div>
    )
}

export default About