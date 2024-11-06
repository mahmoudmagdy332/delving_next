"use client"
import {

  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useSignUp } from "@/utils/hooks/useAuth";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import GoogleLogin from "@/components/auth/login/GoogleLogin"; 
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const inputStyle = {
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
};

interface IFormInput {
  fname: string;
  lname: string;
  email: string;
  password: string;
  password_confirmation: string;
  gender: string;
}

const Signup = () => {
  const t = useTranslations('common');
  const [eyes, setEyes] = useState(false);
  const { mutate, isPending, isError, ErrorCheck, error } = useSignUp();
  const {
    register,
    watch,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutate(data);
  };

  const password = watch("password");

  return (
    <div className="w-10/12 lg:w-9/12 mx-auto grid lg:grid-cols-2 gap-y-5 items-center gap-x-20 my-10">
      <img alt="" src="/images/PHOTOS/signup.svg" />
      <div className="mt-10">
        <div className="flex flex-col gap-4 items-center">
          <div className="w-4/5">
            <Typography
              sx={{
                lineHeight: "37.58px",
                fontWeight: "bold",
                fontSize: "18px",
                textAlign: "center",
              }}
            >
              {t('SignTitle')}
            </Typography>
          </div>

          <div className="flex gap-5 w-full">
            
            <GoogleLogin/>
            {/* <Box
              sx={{
                borderWidth: "1px 1px 3px 1px",
                borderStyle: "solid",
                borderColor: "black.dark",
              }}
              className="cursor-pointer w-1/2 transition-all ease-in-out rounded-full py-3 font-semibold hover:shadow-lg flex justify-center items-center gap-2"
            >
              <img alt="" src="/images/ICONS/facebook.svg" />
            </Box> */}
          </div>

          <div className="flex gap-2 items-center justify-center w-full">
            <div className="w-3/5 bg-gray-500" style={{ height: "1px" }}></div>
            {t('Or')}
            <div className="w-3/5 bg-gray-500" style={{ height: "1px" }}></div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-3"
          >
            <div className="w-full">
              <TextField
                {...register("email", {
                  required: t('emailRequired'),
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: t('invalidEmail'),
                  },
                })}
                className="col-span-2 w-full"
                placeholder={t('email')}
                sx={inputStyle}
                id="outlined-basic"
              />
              {errors.email && (
                <p role="alert" className="text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex relative">
              <div className="w-1/2">
                <TextField
                  className="col-span-2 w-full"
                  placeholder={t('password')}
                  {...register("password", {
                    required: t('passwordRequired'),
                  })}
                  type={eyes ? "text" : "password"}
                  sx={{
                    ...inputStyle,
                    "& fieldset": {
                      borderColor: "gray",
                      borderRadius: "5px 0 0 5px",
                    },
                  }}
                />
                {errors.password && (
                  <p role="alert" className="text-red-500 mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="w-1/2">
                <TextField
                  className="col-span-2 w-full"
                  placeholder={t('passwordConfirmation')}
                  {...register("password_confirmation", {
                    required: t('passwordRequired'),
                    validate: (value) =>
                      value === password || t('passwordMismatch'),
                  })}
                  type={eyes ? "text" : "password"}
                  sx={{
                    ...inputStyle,
                    "& fieldset": {
                      borderColor: "gray",
                      borderRadius: "0 5px 5px 0",
                    },
                  }}
                  id="outlined-basic"
                />
                {errors.password_confirmation && (
                  <p role="alert" className="text-red-500 mt-1">
                    {errors.password_confirmation.message}
                  </p>
                )}
              </div>
              <div className="absolute top-3 end-1">
                {eyes ? (
                  <VisibilityIcon
                    onClick={() => setEyes(false)}
                    className="cursor-pointer text-xl text-primary"
                  />
                ) : (
                  <VisibilityOffIcon
                    onClick={() => setEyes(true)}
                    className="cursor-pointer text-xl text-primary"
                  />
                )}
              </div>
            </div>

            <div className="flex">
              <div className="w-1/2">
                <TextField
                  className="col-span-2 w-full"
                  placeholder={t('fname')}
                  {...register("fname", {
                    required: t('fnameRequired'),
                    maxLength: {
                      value: 20,
                      message: `${t('fname')} ${t('maxLength')}`,
                    },
                  })}
                  sx={{
                    ...inputStyle,
                    "& fieldset": {
                      borderColor: "gray",
                      borderRadius: "5px 0 0 5px",
                    },
                  }}
                  id="outlined-basic"
                />
                {errors.fname && (
                  <p role="alert" className="text-red-500 mt-1">
                    {errors.fname.message}
                  </p>
                )}
              </div>
              <div className="w-1/2">
                <TextField
                  className="col-span-2 w-full"
                  placeholder={t('lname')}
                  {...register("lname", {
                    required: t('lnameRequired'),
                    maxLength: {
                      value: 20,
                      message: `${t('lname')} ${t('maxLength')}`,
                    },
                  })}
                  sx={{
                    ...inputStyle,
                    "& fieldset": {
                      borderColor: "gray",
                      borderRadius: "0 5px 5px 0",
                    },
                  }}
                />
                {errors.lname && (
                  <p role="alert" className="text-red-500 mt-1">
                    {errors.lname.message}
                  </p>
                )}
              </div>
            </div>

            <FormControl
              error={!!errors.gender}
              fullWidth
              sx={{
                ...inputStyle,
                "& label": {
                  color: "gray.main",
                },
                "& label.Mui-focused": {
                  color: "black",
                },
              }}
            >
              <InputLabel>{t('gender')}</InputLabel>
              <Controller
                name="gender"
                control={control}
                defaultValue=""
                rules={{ required: t('genderRequired') }}
                render={({ field }) => (
                  <Select {...field} label={t('gender')}>
                    <MenuItem value="male">{t('Male')}</MenuItem>
                    <MenuItem value="female">{t('Female')}</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
            {errors.gender && (
              <p role="alert" className="text-red-500 mt-1">
                {errors.gender.message}
              </p>
            )}

            <Button
              disabled={isPending}
              type="submit"
              sx={{
                bgcolor: "primary.main",
                color: "white",
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              }}
            >
              {t('signup')}
            </Button>

            {isError ? (
              <p className="text-red-500">
                {ErrorCheck && t('errorUserExist')}
              </p>
            ) : (
              <p className="text-red-500">{error?.message}</p>
            )}

            <div className="flex justify-center">
              <p>
                {t('AlreadyHaveAnAccount')}{" "}
                <Link href="/signin">
                  <span className="font-semibold hover:underline">
                    {t('SignIn')}
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
