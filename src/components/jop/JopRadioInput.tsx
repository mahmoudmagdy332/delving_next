import { FormControlLabel, Radio } from "@mui/material"
type JopRadioInputProps={
  value:string ,
  label:string
}
const JopRadioInput = ({value,label}:JopRadioInputProps) => {
  return (
    <FormControlLabel
    sx={{
       color: 'black.dark', // Change label text color
       '& .MuiRadio-root': {
         color: 'black.dark', // Change radio button color
       },
     }}
    value={value} control={<Radio />} label={label} />
  )
}

export default JopRadioInput