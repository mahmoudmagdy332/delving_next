import { Typography } from "@mui/material"
type JopCheckInputProps={
    value:string ,
    label:string
  }
const JopCheckInput = ({value,label}:JopCheckInputProps) => {
  return (
    <div className="flex gap-3 items-center">
    <input
     id="default-checkbox"
     name="category"
     type="checkbox"
     defaultValue={value}
     className="w-4 h-4 bg-gray-900 border-black rounded    "
     style={{
       accentColor: "gray",
       border:"1px solid black"
     }}
   />
   <Typography sx={{color:'gray.dark'}}>{label}</Typography>
   </div>   
  )
}

export default JopCheckInput