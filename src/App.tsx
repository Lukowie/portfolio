import * as React from "react"
import { Text, Flex, VStack, Grid, Link, Divider } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/button";
import Navigation from './components/Navigation';
import { useColorMode } from "@chakra-ui/color-mode";
import { Spacer } from "@chakra-ui/layout";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App(){

  return(
    <VStack p="5">
      <Navigation />
      <Divider />

      <Header/>
      

      <Footer />
     </VStack>
  );
}

export default App;
