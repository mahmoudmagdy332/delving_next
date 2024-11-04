import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import { getCountriesQuery } from "../../app/services/queries";

const commonStyles = {
  bgcolor: "gray.light",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "gray",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black.dark",

    },
    "& input": {
  
    },
  },
};

export interface Country {
  flag: string,
  name: string,
  id: number,
}

 const CountrySelect= React.forwardRef<
HTMLInputElement,

{
  error?: string;
  onChange: (value: number | null) => void;
}
>(({ error,onChange}) =>  {
  const [value, setValue] = React.useState<Country | null>(null);
  const [open, setOpen] = React.useState(false);
  const {data}=getCountriesQuery();
  console.log('data',data?.data.data);
  
  return (
    <>
    <Autocomplete
      id="country-select-demo"
      value={value}
   
      onChange={(_, data) => {
        onChange(data ? data.id : null)
        setValue(data);
      }}
      options={data?.data.data}
      autoHighlight
      defaultValue={{
        flag: "US",
        name: "Egypt",
        id: 1,

      }}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 },p:0 }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={option.flag}          
            srcSet={option.flag}
            alt=""
          />
          {option.name} 
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}

          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
          InputProps={{
            ...params.InputProps,
            startAdornment: value ? (
              <InputAdornment position="start" onClick={() => setOpen(true)}>
                <img
                  loading="lazy"
                  width="20"
                  src={value.flag}
                  srcSet={value.flag}
                  alt=""
                />
              </InputAdornment>
            ) : null,
          }}
          sx={commonStyles} // Applying the common styles here
          className="col-span-2 "
        />
      )}
    />
     <p className="text-red-500">{error}</p>
    </>
  );
})
export default CountrySelect