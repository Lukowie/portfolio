import { Flex, Stack, Circle, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { useColorMode } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import React from 'react'
import face from '../components/img/me.jpg'
import Footer from './Footer';

function Header(){
    
    const {colorMode} = useColorMode();
    const isDark = colorMode === "dark";

    const [screenBig] = useMediaQuery("(max-width:600px)");

    return (
        <div>
            <Stack>
                <Flex direction={screenBig ? "column" : "row"} spacing="200px" p={screenBig ? 0 : "10"} alignSelf="flex-end">
                <Text pr={screenBig ? 0 : "10"} alignSelf="center" fontSize="5xl" fontWeight="semiBold">Lucas</Text>
                    <Image 
                    borderRadius="full" 
                    boxSize="200px" 
                    mt={screenBig ? "2" : "0"} 
                    align="flex-end" 
                    src={face} 
                    alt="Lucas Vandermaarel" />
                       
                </Flex>
               
            </Stack>
        </div>
    )
}

export default Header;