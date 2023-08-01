import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <h3 className="header">Nicholas Emmons</h3>
            <h5 className="subheader">Software Engineer - Anime Maniac - Fullstack Developer</h5>
            <br />
            <h5 className="subheader">Web Applications</h5>
            <div className="card">
                <Link to="https://clearance-b56453d7410f.herokuapp.com/" target="_blank">
                    <img className="projectPic" src="https://static01.nyt.com/images/2017/12/19/autossell/STILL2/STILL2-square640-v3.gif" alt="clearancePic" />
                    <h3>Clearance</h3>
                </Link>
                <label className="label" htmlFor="techUsed">Tech Used</label>
                <p>Python | Django | postgreSQL | AWS S3 | Materialize | CSS</p>
                <label className="label" htmlFor="description">Description:</label>
                <p>A fullstack web application that acts as a fully user-interactive database for confirmed declassified UAP / UFO cases, sightings and reports.  Utilizing several different full CRUD operations, users can read articles, view images, gifs and videos (spanning from entire documentaries to military footage and radar data) in high resolution and access official documentation.</p>
                <p>Clearance was a project built from the collaboration of me and two other developers</p>
                <br />
                <Link to="http://www.github.com/cherch173/clearance" target="_blank">
                    <button className="githubBtn">Github</button>
                </Link>
            </div>
            <br />
            <div className="card">
                <h3></h3>
                <label className="label" htmlFor="techUsed">Tech Used</label>
                <p></p>
                <label className="label" htmlFor="description">Description:</label>
                <button className="githubBtn">Github</button>
            </div>
            <br />
            <div className="card">
                <h3></h3>
                <label className="label" htmlFor="techUsed">Tech Used</label>
                <p></p>
                <label className="label" htmlFor="description">Description:</label>
                <button className="githubBtn">Github</button>
            </div>
            <br />
            <h5 className="subheader">Browser-Based Games</h5>
            <br />
            <div className="card">
                <h3></h3>
                <label className="label" htmlFor="techUsed">Tech Used</label>
                <p></p>
                <label className="label" htmlFor="description">Description:</label>
                <button className="githubBtn">Github</button>
            </div>
        </div>
    )
}

export default Home