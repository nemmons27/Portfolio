import React from "react";
import { useRef } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import background from '../assets/matrix-code.gif'
import React from "react";
import React from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import App from "./App.jsx";
import App from "./App.jsx";

const Home = () => {
    const scrollGamesRef = useRef();
    const scrollBioRef = useRef();
    const scrollUpRef = useRef();

    const scrollGames = () => {
        scrollGamesRef.current.scrollIntoView({ behavior: 'smooth'})
    }
    const scrollBio = () => {
        scrollBioRef.scrollIntoView({ behavior: 'smooth'})
    }
    const scrollUp = () => {
        scrollUpRef.current.scrollIntoView({ behavior: 'smooth'})
    }
    return (
        <><div className="banner" ref={scrollUpRef} style={{ backgroundImage: `url(${background})`}}>
            <img src="https://avatars.githubusercontent.com/u/131407670?v=4" className="myProfile" alt="myProfile" />
            <h3 className="header">Nicholas Emmons</h3>
            <h5 className="subheader">Software Engineer - Anime Maniac - Fullstack Developer</h5>
            </div>
            <button className="scrollBtn" onClick={scrollGames}>Browser Games</button><br />
            <button className="scrollBtn" onClick={scrollBio}>Bio</button><br />
            <h5 className="subheader">Web Applications</h5>
        <div className="card">
                <Link to="https://clearance-b56453d7410f.herokuapp.com/" target="_blank">
                    <img className="projectPic" src="https://static01.nyt.com/images/2017/12/19/autossell/STILL2/STILL2-square640-v3.gif" alt="clearancePic" />
                </Link>
                    <h3>Clearance</h3>
                <label className="label" htmlFor="techUsed">Tech Used</label>
                <p>Python | Django | postgreSQL | AWS S3 | Materialize | CSS</p>
                <label className="label" htmlFor="description">Description:</label>
                <p>A fullstack web application that acts as a fully user-interactive database for confirmed declassified UAP / UFO cases, sightings and reports.  Utilizing several different full CRUD operations, users can read articles, view images, gifs and videos (spanning from entire documentaries to military footage and radar data) in high resolution and access official documentation.</p>
                <p>Clearance was a project built from the collaboration of me and two other developers where I was the architect and main composer for the many to many relationships. I also took the responsibility to set up UAuthorization and protected the routes accordingly. </p>
                <br />
                <Link to="http://www.github.com/cherch173/clearance" target="_blank">
                    <button className="githubBtn">Github</button>
                </Link>
                <Link to="https://clearance-b56453d7410f.herokuapp.com/" target="_blank">
                    <button className="githubBtn">Deployed Site</button>
                </Link>
            </div><br /><div className="card">
                <img className="projectPic" src="https://github.com/nemmons27/Gamers_Asylum/raw/main/images/StrawhatsTogether.gif" alt="asylumPic" />
                <h3>Gamer's Asylum</h3>
                <label className="label" htmlFor="techUsed">Tech Used</label>
                <p>MongoDB | Express.js | React | NODE</p>
                <label className="label" htmlFor="description">Description:</label>
                <p>Gamer's Asylum is a network I created to connect gamers of all genres to assist each other with bosses and puzzles. I used the flexible capabilities of React to build a reviews section for all games and contain the user data within multiple models making it globally accessable.</p>
                <Link to="https://github.com/nemmons27/Gamers_Asylum" target="_blank">
                    <button className="githubBtn">Github</button>
                </Link>
                <Link to="" target="_blank">
                    <button className="githubBtn">Deployed Site</button>
                </Link>
            </div><br /><div className="card">
                <img className="projectPic" src="https://giffiles.alphacoders.com/135/135716.gif" alt="watchlistPic" />
                <h3>God's Watchlist</h3>
                <label className="label" htmlFor="techUsed">Tech Used</label>
                <p>Express.js | NODE | OAuth | CSS | Javascript | HTML</p>
                <label className="label" htmlFor="description">Description:</label>
                <p>Don't you hate when you lose the episode you're up to in the latest anime or even old cartoons? Well thats the exact reason I made God's Watchlist. The Watchlist is an Express application that'll take the place of Hulu or Crunchyroll after future updates.  </p>
                <Link to="https://github.com/nemmons27/gods_watchlist" target="_blank">
                    <button className="githubBtn">Github</button>
                </Link>
                <Link to="" target="_blank">
                    <button className="githubBtn">Deployed Site</button>
                </Link>
            </div><br /><h5 className="subheader" ref={scrollGamesRef}>Browser-Based Games</h5><br /><div className="card">
                <img className="projectPic" src="https://64.media.tumblr.com/76b5fb173bdf9091c2f7fa209237c5c1/tumblr_oqlx3zKu8M1wntix3o1_500.gif" alt="piecePic" />
                <h3>Road To One Piece</h3>
                <label className="label" htmlFor="techUsed">Tech Used</label>
                <p>Javascript | CSS | HTML</p>
                <label className="label" htmlFor="description">Description:</label>
                <p>Match the Wanted posters and see how fast you can clear the seas of pirates!</p>
                <Link to="https://github.com/nemmons27/one-piece-memory" target="_blank">
                    <button className="githubBtn">Github</button>
                </Link>
                <Link to="" target="_blank">
                    <button className="githubBtn">Deployed Site</button>
                </Link>
            </div>
            <div className="card">
                <img className="projectPic" src="https://media2.giphy.com/media/U6IQE5XjiF5hm/giphy.gif?cid=ecf05e47xutgvi8guh2m5umnmxacbwa4j4m6lpsu0q8fbam5&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="9tailPic" />
                <h3>Whac A Beast</h3>
                <label className="label" htmlFor="techUsed">Tech Used</label>
                <p>Javascript | CSS | HTML</p>
                <label className="label" htmlFor="description">Description:</label>
                <p>Can you stop Naruto before the 9 tails detroys the Village?</p>
                <Link to="https://github.com/nemmons27/whac-a-beast" target="_blank">
                    <button className="githubBtn">Github</button>
                </Link>
                <Link to="" target="_blank">
                    <button className="githubBtn">Deployed Site</button>
                </Link>
            </div>
                <br /><h5 className="bioheader" ref={scrollBioRef}>Bio</h5>
                <div className="biocard">
                <h2>Hey, I'm Nicholas.</h2>
            <p>I'm a Software Engineer with a love of finding new challenges and a passion for anime. In my first 6 months coding, I've built several applications with varying uses from scratch. Each application required different languages such as Python, Express and React but thats what makes it so enticing to continue venturing on this road.</p>
            <p>I graduated from General Assembly's Software Engineering 2.0 Immersive (which gave me a strong 420 hours of coding experience) in July of 2023. Those hours left me with a hunger to find more ways to build these websites that I once had zero knowledge of the background work of it. Previously, I worked as a security guard for the UBS Arena in Elmont, NY. I had my regular duties as a guard initially but once they saw how easily I handled everything, they decided to give me a squad to work with and watch over. I ended up doing this with 2 more squads before I decided to do more than what I previously believed I was capable of. </p>
            <a href="https://www.linkedin.com/in/nemmons27/" className="linkedinPlug">LinkedIn</a> | <a href="https://github.com/nemmons27" className="githubPlug">Github</a> 
                </div>
                <button className="scrollBtn" onClick={scrollUp}>Back to Top</button><br />

            </>
    )
}

export default Home
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)
