import { Button, CircularProgress, TextField } from "@mui/material";
import { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { CustomError } from "../../app/services/mutation";
import { forgetPassword } from "../../app/utils/types/types";
import { useLanguageSelector } from "../../app/slices/languageSlice";
import { inputStyle } from "../../pages/LoginWith";

type EmailInputProps = {
  mutate: (data: forgetPassword) => void;
  isPending: boolean;
  isError: boolean;
  error: AxiosError<CustomError> | null;
};

const EmailInput = ({ mutate, isPending, isError, error }: EmailInputProps) => {
  const { translations } = useLanguageSelector(
    (state) => state.languageReducer
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<forgetPassword>();
  const onSubmit: SubmitHandler<forgetPassword> = (data) => {
    mutate(data);
  };
  return (
    <div className="flex flex-col gap-6 items-center">
      <h4 className="font-bold text-2xl text-Primary">
        {translations.GetPassword}
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
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                sx={inputStyle} 
            id="outlined-basic"  />
        
        {errors.email && (
          <p role="alert" className="text-red-500 mt-1">
            {errors.email.message}
          </p>
        )}
        {isError && (
          <p role="alert" className="text-red-500 mt-1">
            {error?.response?.data.message}
          </p>
        )}

          {isPending ? (
           
              <Button  disabled sx={{backgroundColor:'gray.dark',color:'gray.light',borderRadius:'100px',borderWidth:'1px 1px 3px 1px',borderStyle:'solid',borderColor:'black.dark',py:'12px', mt:'30px',"&:hover":{color:'gray.dark'}}}  className='transition-all ease-in-out  font-semibold hover:shadow-lg flex justify-center gap-3   w-full '>
              {translations.sending}
              <CircularProgress size={20} color="inherit" />
            </Button>
          ) : (
             <Button   type="submit" sx={{backgroundColor:'gray.dark',color:'gray.light',borderRadius:'100px',borderWidth:'1px 1px 3px 1px',borderStyle:'solid',borderColor:'black.dark',py:'12px', mt:'30px',"&:hover":{color:'gray.dark'}}}  className='transition-all ease-in-out  font-semibold hover:shadow-lg flex   w-full '>
                {translations.Send}
              </Button>
          )}
      
      </form>
    </div>
  );
};

export default EmailInput;
