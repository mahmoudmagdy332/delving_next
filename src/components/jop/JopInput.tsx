import { TextField } from "@mui/material";
import { forwardRef } from "react";

const JopInput = forwardRef<
  HTMLInputElement,
  {
    error?: string;
  }
>(({ error, ...rest }, ref) => {
  return (
    <div className="col-span-2 flex flex-col">
      <TextField
        inputRef={ref}
        {...rest}
        sx={{
          bgcolor: "gray.light",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "gray",
            },

            "&.Mui-focused fieldset": {
              borderColor: "black.dark",
            },
            "& input": {
              color: "black",
            },
          },
          "& .MuiInputLabel-root": {
            color: "black",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "green",
          },
        }}
        id="outlined-basic"
      />
      <p className="text-red-500">{error}</p>
    </div>
  );
});

export default JopInput;
