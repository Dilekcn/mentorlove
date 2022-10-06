import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Home from "./components/Home"


export const App = () => (
  <ChakraProvider theme={theme}>
   <Home/>
  </ChakraProvider>
)
