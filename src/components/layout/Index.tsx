'use client'
import { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./header/Index"
import { Box, Toolbar } from "@mui/material"
const Index = ({ children }: { children: ReactNode }) => {

  return (
    <Box  >
      <Header />
       <Box className="min-h-screen">
       <Toolbar className="h-32"/>
         {children}
       </Box>
      <Footer/>
    </Box>
  )
}

export default Index