// import React from "react";
// import avatarImg from "../assets/avatar1.png"

function Info() {
    return (
        <div className="info-container">
            <img
                src="./src/assets/avatar1.png" alt="avatar"
                className="avatar-img"
            />
            <h1>Laura Smith</h1>
            <p>Frontend Developer</p>
            <a href="/">laurasmith.website</a>

            <div className="btn-info-container">
                <button className="btn">
                    <img src="./src/assets/mailIconBtn.jpg" alt="Email" />
                    Email
                </button>
                <button className="btn">
                    <img src="./src/assets/linkedinIconBtn.png" alt="Linkedin" />
                    LinkedIn
                </button>
            </div>
        </div>
    )

}

export default Info