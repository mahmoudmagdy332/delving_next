
import PropagateLoader from "react-spinners/ClipLoader";
import {  tokens, useMode } from "@/utils/Theme";
const Loader = () => {
  const [theme, colorMode,mode] = useMode();
  console.log(theme, colorMode)
  const colors = tokens(mode);
  return (
    <PropagateLoader 
     color={colors.gray[900]}
     size={100}
    />
     
  )
}

export default Loader