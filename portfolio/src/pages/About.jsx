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
            <p>I'm a Software Engineer with a love of finding new challenges and a passion for anime. In my first 6 months coding, I've built several applications with varying uses from scratch. Each application required different languages such as Python, Express and React but thats what makes it so enticing to continue venturing on this road.</p>
            <p>I graduated from General Assembly's Software Engineering 2.0 Immersive (which gave me a strong 420 hours of coding experience) in July of 2023. Those hours left me with a hunger to find more ways to build these websites that I once had zero knowledge of the background work of it.</p>
            <p></p>
        </div>
    )
}

export default About