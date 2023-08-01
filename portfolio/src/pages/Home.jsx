import React from "react";

const Home = () => {

    return (
        <div>
            <h3 className="header">Nicholas Emmons</h3>
            <h5 className="subheader">Software Engineer - Anime Maniac - Fullstack Developer</h5>
            <br />
            <h5 className="subheader">Web Applications</h5>
            <div className="card">
                <Link to="https://clearance-b56453d7410f.herokuapp.com/" target="_blank">
                    <img src="" alt="" />
                    <h3>Clearance</h3>
                </Link>
            </div>
            <br />
            <h5 className="subheader">Browser-Based Games</h5>
        </div>
    )
}

export default Home