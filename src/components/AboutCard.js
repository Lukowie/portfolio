import React from 'react'
import styled from 'styled-components'


const Card = styled.div`
    //border: 1px solid #ffffff;
    border-radius: 25px;
    padding: 4%;
    margin-top: 2vh;
    color: white;
    line-height: 1.7;
`;

const AboutCard = () => {
    return (
        <div>
            <Card>
                <p>
                    To sum myself up: I love to learn. It doesn't really matter what it is, 
                    I'm curious about it and I find almost anything I haven't learned yet interesting.
                </p>
                <p>
                    I started making basic HTML pages, coding with Notepad, in 2006. I thought it was so cool. 
                    Many children would fake being sick to stay home from school. Most reasons children fake being sick revolve around having fun by watching tv or playing games.
                    I, however, just wanted to program. I spent my fake sick days reading Java programming books and creating basic Java programs. 
                </p>
            </Card>
        </div>
    )
}

export default AboutCard
