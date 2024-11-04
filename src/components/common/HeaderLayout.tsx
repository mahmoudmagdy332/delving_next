import { Box } from "@mui/material";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
  }
const HeaderLayout = ({children} : Props) => {
  return (
  <Box sx={{bgcolor:'background.paper'}} className="p-4 relative rounded-md border">
  {children}
  <img src="/images/ICONS/Abstract Line.svg" className="w-5 absolute " style={{top:'-15px',left:'-15px'}}/>
</Box>
  )
}

export default HeaderLayout