import * as React from "react"
import { Text, Flex, VStack, Grid, Link, Divider } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/button";
import {FaSun, FaMoon} from 'react-icons/fa';
import { useColorMode } from "@chakra-ui/color-mode";
import { Spacer } from "@chakra-ui/layout";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App(){

  // colorMode - the state, toggleColorMode - calls to change the color mode from light to dark or vice versa
  const {colorMode, toggleColorMode} = useColorMode();

  // variable that is assigned to the colorMode state. If colorMode is dark, so is isDark.
  const isDark = colorMode === "dark";

  return(
    // VStack aligns elements in a vertical stack
    // p gives an element padding

    //Flex aligns elements
    // w is the width. 100% means full screen width
    <VStack p="5">
      <Flex w="100%" pl="10" pr="10">
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Link fontSize="lg" alignSelf="center">Home</Link>
          <Link fontSize="lg" alignSelf="center">Work</Link>
          <Link fontSize="lg" alignSelf="center">About</Link>
        </Grid>
        <Spacer></Spacer>
        
        <IconButton aria-label="Colormode" ml={20} icon={isDark ? <FaSun/> : <FaMoon/>} isRound={true} onClick={toggleColorMode}></IconButton>
      </Flex>
      <Divider />
      <Header/>
      

      <Footer />
      
     </VStack>
  );
}

export default App;
