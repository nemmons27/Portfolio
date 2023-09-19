import React from "react";
import { Link } from "react-router-dom";
import background from '../assets/matrix-code.gif'

const Home = () => {

    return (
        <><div className="banner" style={{ backgroundImage: `url(${background})`}}>
            <img src="https://avatars.githubusercontent.com/u/131407670?v=4" className="myProfile" alt="myProfile" />
            <h3 className="header">Nicholas Emmons</h3>
            <h5 className="subheader">Software Engineer - Anime Maniac - Fullstack Developer</h5>
            </div><br />
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
            </div><br /><h5 className="subheader">Browser-Based Games</h5><br /><div className="card">
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
                <div>
                <br /><h5 className="bioheader">Bio</h5>
                <h2>Hey, I'm Nicholas.</h2>
            <p>I'm a Software Engineer with a love of finding new challenges and a passion for anime. In my first 6 months coding, I've built several applications with varying uses from scratch. Each application required different languages such as Python, Express and React but thats what makes it so enticing to continue venturing on this road.</p>
            <p>I graduated from General Assembly's Software Engineering 2.0 Immersive (which gave me a strong 420 hours of coding experience) in July of 2023. Those hours left me with a hunger to find more ways to build these websites that I once had zero knowledge of the background work of it.</p>
            <a href="https://www.linkedin.com/in/nemmons27/" className="linkedinPlug">LinkedIn</a> | <a href="https://github.com/nemmons27" className="githubPlug">Github</a> 
                </div>
            </>
    )
}

export default Home