import { TextField } from "@mui/material";
import { forwardRef } from "react";

const JopTextArea = forwardRef<HTMLInputElement>(({ ...rest }, ref) => {
  return (
    <TextField
      inputRef={ref}
      {...rest}
      className="col-span-2"
      multiline
      rows={4} // Number of visible text lines
      sx={{
        bgcolor: "gray.light",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "gray", // Default border color
          },

          "&.Mui-focused fieldset": {
            borderColor: "black.dark", // Border color when focused
          },
          "& input": {
            color: "black", // Ensure text color is black
          },
        },
        "& .MuiInputLabel-root": {
          color: "black", // Label color
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "green", // Label color when focused
        },
      }}
      id="outlined-basic"
    />
  );
});

export default JopTextArea;
