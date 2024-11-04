import { TextField } from "@mui/material";
import { forwardRef } from "react";

interface InputProps {
  disableUnderline?: boolean;
  label: string;
  color: string;
  focusColor: string;
  value?: string;
  isTextArea?: boolean;
  textColor?: string;
  type?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      
      label,
      value,
      color,
      focusColor,
      isTextArea = false,
      textColor,
      error,
      type = "text",
      ...rest
    },
    ref
  ) => {
    return (
      <div className="w-full">
        {" "}
        <TextField
        
          label={label}
          type={type}
          error={error ? true : false}
          value={value}
          variant="standard"
          inputRef={ref}
          {...rest}
          sx={{
            width: "100%",
            color: "white",
            "& .MuiInputBase-root": {
              height: isTextArea ? "80px" : "40px",
              color: textColor || "black",
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: color,
            },
            "& label": {
              color: color,
            },
            "& label.Mui-focused": {
              color: focusColor,
            },
            "& .MuiInput-underline:hover:before": {
              borderBottomColor: focusColor,
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: focusColor,
            },
          }}
        />
        {error && <span className="text-red-500">{error}</span>}
      </div>
    );
  }
);

export default Input;
