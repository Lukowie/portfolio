import React from 'react';
import { Link, Grid, Spacer, Flex } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { FaSun, FaMoon } from 'react-icons/fa';


function Navigation() {

    // colorMode - the state, toggleColorMode - calls to change the color mode from light to dark or vice versa
    const { colorMode, toggleColorMode } = useColorMode();

    // variable that is assigned to the colorMode state. If colorMode is dark, so is isDark.
    const isDark = colorMode === "dark";

    return (

        <div>
            <Flex w="70vw" pb="2">
                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                    <Link fontSize="lg" alignSelf="center" href="/home">Home</Link>
                    <Link fontSize="lg" alignSelf="center" href="/work">Work</Link>
                    <Link fontSize="lg" alignSelf="center" href="/about">About</Link>
                </Grid>
                <Spacer></Spacer>

                <IconButton aria-label="Colormode" icon={isDark ? <FaSun /> : <FaMoon />} isRound={true} onClick={toggleColorMode}></IconButton>
            </Flex>
        </div>
    )
}

export default Navigation;