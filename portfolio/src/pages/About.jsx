import React from "react";

const About = () => {

    const handleClick = () => {
        fetch(('public/Nicholas Emmons - Resume.pdf').then(res => {
            res.blob().then(blob => {
                const fileUrl = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileUrl;
                alink.download = 'public/Nicholas Emmons - Resume.pdf';
                alink.click()
            })
        }))
    }


    return (
        <div>
            <h3 className="subheader">Hey, I'm Nicholas.</h3>
            <br />
            <img src="https://avatars.githubusercontent.com/u/131407670?v=4" className="myProfile" alt="myProfile" />
            <br />
            <a href="https://www.linkedin.com/in/nemmons27/" className="linkedinPlug">LinkedIn</a> | <a href="https://github.com/nemmons27" className="githubPlug">Github</a> | <button onClick={handleClick} className="resumeBtn" target="_blank">Resumé</button>
            <br />
            <p>I'm a Software Engineer with nothing but potential! This site will be the proof of it.</p>
            <p></p>
        </div>
    )
}

export default About