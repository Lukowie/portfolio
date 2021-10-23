import React from 'react';
import { Box, Divider, HStack, Spacing, Flex } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/button';
import { FaGithub, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { useMediaQuery } from '@chakra-ui/media-query';

function Footer () {

    const [screenBig] = useMediaQuery("(max-width:600px)");

    return(
        <div>

        <HStack direction="row" p={screenBig ? 0 : "10"} alignSelf="flex-end">
            <IconButton aria-label="Instagram" icon={<FaInstagram />} isRound={true}></IconButton>
            <IconButton aria-label="Github" icon={<FaGithub />} isRound={true}></IconButton>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} isRound={true}></IconButton>
            <IconButton aria-label="Discord" icon={<FaDiscord />} isRound={true}></IconButton>
                       
        </HStack>
        </div>
    )
}

export default Footer;