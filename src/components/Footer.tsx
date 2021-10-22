import React from 'react';
import { Box, HStack, Spacing } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/button';
import { FaGithub, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { useMediaQuery } from '@chakra-ui/media-query';

function Footer () {

    const [screenBig] = useMediaQuery("(max-width:600px)");

    return(
        <div>
            <Box position="fixed" bottom="10" w="100">
                <HStack spacing="20px" direction={screenBig ? "column" : "row"} >
                    <IconButton aria-label="Instagram" icon={<FaInstagram />} isRound={true}></IconButton>
                    <IconButton aria-label="Github" icon={<FaGithub />} isRound={true}></IconButton>
                    <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} isRound={true}></IconButton>
                    <IconButton aria-label="Discord" icon={<FaDiscord />} isRound={true}></IconButton>
                </HStack>
            </Box>
        </div>
    )
}

export default Footer;