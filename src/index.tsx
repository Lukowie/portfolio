import { ChakraProvider } from "@chakra-ui/react"
import { ColorModeScript } from "@chakra-ui/color-mode"
import * as React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark"/>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)
