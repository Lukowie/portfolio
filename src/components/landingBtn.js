import React from "react";
import styled from "styled-components";

function handleClick(){
    // animation to blow up screen with color
    console.log("yup");

    window.location.href = "/home";
  }


  const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Btn = styled.span`
  z-index: 4;
  position: relative;
  min-width: 200px;
  min-height: 200px;
  max-width: 600px;
  max-height: 600px;
  width:25vw;
  height:25vw;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  border: 0.2vw solid white;
  transition: all 0.5s ease-in-out;
  :hover{
    background-color: rgba(255, 255, 255, 0.2);;
} 
`;

const Text = styled.p`
  color: white; 
  position: relative;
  top: 45%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  font-size: ${props => props.fontSize};
  // make text unselectable
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

function LandingBtn(){
    return(
        <Wrapper>
            <Btn onClick={handleClick}>
                <Text fontSize="calc(2vw + 2vh)" >
                    Lucas Vandermaarel
                </Text>
            </Btn>
        </Wrapper>
    );
}


export default LandingBtn;