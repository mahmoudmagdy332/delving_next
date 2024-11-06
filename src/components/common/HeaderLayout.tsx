import { Box } from "@mui/material";
import { ReactNode } from "react";
import image from "../../../public/images/ICONS/Abstract Line.svg"
import Image from "next/image";
type Props = {
    children: ReactNode;
  }
const HeaderLayout = ({children} : Props) => {
  return (
  <Box sx={{bgcolor:'background.paper'}} className="p-4 relative rounded-md border">
  {children}
  <Image src={image} alt="image" className="absolute -top-4 -left-4 w-6"/>
</Box>
  )
}

export default HeaderLayout