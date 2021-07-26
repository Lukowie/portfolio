import React from "react";
import Navigation from './navigation';
import '../css/main.css';
import AboutCard from './AboutCard';
import styled  from "styled-components";
import {Container}  from 'react-bootstrap';

import AboutImg from "./AboutImg";

const Header = styled.h1`
    padding-top: 2vh;
    text-align: center;
`;

function About(){
    return(
        <div>
            <Navigation/>
            <Header className={"display-1"}>About Me</Header>
            <Container>
                <AboutImg />
                <AboutCard/>
            </Container>
        </div>
    );
}

export default About;