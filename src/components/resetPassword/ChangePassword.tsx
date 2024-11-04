import { Button, CircularProgress, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { confrimPassword } from "../../app/utils/types/types";
import { AxiosError } from "axios";
import { CustomError } from "../../app/services/mutation";
import { useLanguageSelector } from "../../app/slices/languageSlice";
import { inputStyle } from "../../pages/LoginWith";

type PasswordInputProps = {
  mutate: (data: confrimPassword) => void;
  isPending: boolean;
  isError: boolean;
  error: AxiosError<CustomError> | null;
  token: string;
};
const ChangePassword = ({
  mutate,
  isPending,
  isError,
  error,
  token,
}: PasswordInputProps) => {
  const { translations } = useLanguageSelector(
    (state) => state.languageReducer
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<confrimPassword>();
  const onSubmit: SubmitHandler<confrimPassword> = (data) => {
    const dataUpdated = { ...data, token: token };
    console.log("dataUpdated", dataUpdated);
    mutate(dataUpdated);
  };
  return (
    <div className="flex flex-col gap-6 items-center">
      <h4 className="font-bold text-2xl text-Primary">
        {translations.GetPassword}{" "}
      </h4>
      <p className="text-center text-xl text-gray-400">
        {translations.GetPasswordMessage}
      </p>
      <form
        className=" flex flex-col gap-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        
         <TextField className="col-span-2 w-full"
                placeholder="Password"
                type="password"
                {...register("password", { required: "Password is required" })}
                sx={inputStyle} 
            id="outlined-basic"  />
        {errors.password && (
          <p role="alert" className="text-red-500 mt-1">
            {errors.password.message}
          </p>
        )}
       
        <TextField className="col-span-2 w-full"
                placeholder="confrimPassword"
                type="password"
                {...register("confrimPassword", {
                  required: "Password confirmation is required",
                })}
                sx={inputStyle} 
            id="outlined-basic"  />
        {isError && (
          <p role="alert" className="text-red-500 mt-1">
            {error?.response?.data.message}
          </p>
        )}

        <button className='flex justify-center bg-primary   duration-400 items-center gap-3 rounded-sm py-3" py-2.5   text-white hover:bg-Secondary transition-all duration-300'>
          {isPending ? (
             <Button   sx={{backgroundColor:'gray.dark',color:'gray.light',borderRadius:'100px',borderWidth:'1px 1px 3px 1px',borderStyle:'solid',borderColor:'black.dark',py:'12px', mt:'30px',"&:hover":{color:'gray.dark'}}}  className='transition-all ease-in-out  font-semibold hover:shadow-lg flex gap-3 items-center  w-full '>
              {translations.Loading}{" "}<CircularProgress size={20} color="inherit" />
           </Button>
          ) : (
             <Button   type="submit" sx={{backgroundColor:'gray.dark',color:'gray.light',borderRadius:'100px',borderWidth:'1px 1px 3px 1px',borderStyle:'solid',borderColor:'black.dark',py:'12px', mt:'30px',"&:hover":{color:'gray.dark'}}}  className='transition-all ease-in-out  font-semibold hover:shadow-lg flex   w-full '>
             {translations.Submit}
           </Button>
          )}
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
