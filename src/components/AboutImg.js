import face from '../img/face.png';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const imgStyle = {
    minWidth: "100px",
    maxWidth: "250px",
    paddingTop: "2vh",
}

const AboutImg = () => {
    return (
        <div className="text-center">
            <img src={face}  style={imgStyle} alt="lucas face"/>
        </div>
    )
}

export default AboutImg
