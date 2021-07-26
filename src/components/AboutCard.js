import React from 'react'
import styled from 'styled-components'


const Card = styled.div`
    border: 5px solid #5E4A1D;
    border-radius: 25px;
    padding: 4%;
    margin-top: 2vh;
    background-color: #DCC48E;
    color: black;
`;

const AboutCard = () => {
    return (
        <div>
            <Card>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae rutrum augue. Vivamus et semper dui. Integer scelerisque libero risus, et ullamcorper erat accumsan in. Praesent tellus lorem, vehicula suscipit consectetur ut, ultrices vel purus. Curabitur nec gravida enim. Nunc nec euismod lacus, et facilisis orci. Ut vitae turpis nec quam euismod malesuada sed eget massa. Duis vestibulum mi in augue varius pulvinar. Morbi eget augue risus. Phasellus porta lacinia dui et sodales.
                    Morbi auctor lorem nisi, nec pharetra dolor fringilla at. Nullam sollicitudin dignissim mi vitae rhoncus. Ut suscipit condimentum tellus at venenatis. Praesent nec ex vel velit tincidunt porta et vitae elit. Pellentesque fringilla in ipsum dictum maximus. Aenean quis enim vitae eros sodales tempus. Sed interdum eleifend quam, in dictum ligula. Duis semper dolor iaculis sapien ornare, ac auctor lorem mollis. Nulla facilisi. Curabitur tincidunt, lectus eget suscipit varius, dui mi aliquet mauris, vel tristique lectus odio mattis nibh.
                    Ut facilisis sit amet massa eu aliquam. Duis vitae enim in ligula imperdiet volutpat. Fusce iaculis nulla lorem, at eleifend leo congue at. Sed ullamcorper maximus faucibus. Etiam tristique quam vitae nulla vulputate venenatis. Vestibulum dignissim nulla in leo gravida auctor. Suspendisse convallis mattis consequat. Etiam et malesuada tortor, sed feugiat sapien. Nulla vulputate rhoncus mauris, a elementum quam euismod non.
                </p>
            </Card>
        </div>
    )
}

export default AboutCard
