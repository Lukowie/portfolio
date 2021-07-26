import face from '../img/face.png';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const imgStyle = {
    minWidth: "150px"
}

const AboutImg = () => {
    return (
        <div className={"text-center"}>
            <img src={face} className="w-25" style={imgStyle} alt="lucas face"/>
        </div>
    )
}

export default AboutImg
