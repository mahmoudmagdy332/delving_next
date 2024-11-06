"use client"
import { Button, CircularProgress, TextField } from "@mui/material";
import { useEffect, useState } from "react";

import { useLogin } from "@/utils/hooks/useAuth"; 
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUserSelector } from "@/utils/slices/UserSlice"; 
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";


export const inputStyle = {
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
  email: string;
  password: string;
}
const LoginWith = () => {
  const t = useTranslations('common');
  const route = useRouter();

  const [eyes, setEyes] = useState(false);
  const { user } = useUserSelector((state) => state.UserReducer);

  const { mutate, isSuccess, isPending, isError, error } = useLogin();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutate(data);
  };
  useEffect(() => {
    if (isSuccess && user) {
      if (!user?.survey_submited) {
        route.push("/welcome");
      } else {
        route.push('/');
      }
    }
  }, [isSuccess, user]);
  return (
    <div className="w-10/12 lg:w-9/12 mx-auto grid lg:grid-cols-2 items-center gap-y-5 gap-x-20 my-10">
      <img alt="" src="/images/PHOTOS/signup.svg" />
      <div className="mt-10">
        <div className="flex flex-col gap-8 items-center">
          <h3 className="font-bold text-2xl">Log In</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4"
          >
            <div>
              <TextField
                className="col-span-2 w-full"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                sx={inputStyle}
                id="outlined-basic"
              />
              {errors.email && (
                <p role="alert" className="text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div></div>
            <div>
              <div className="relative">
                <TextField
                  className="col-span-2 w-full"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type={eyes ? "text" : "password"}
                  sx={inputStyle}
                  id="outlined-basic"
                />

                <div className="absolute top-3 end-2">
                  {eyes ? (
                    <div
                      onClick={() => setEyes(false)}
                      className="cursor-pointer text-xl text-primary"
                    >
                      <VisibilityIcon />
                    </div>
                  ) : (
                    <div
                      onClick={() => setEyes(true)}
                      className="cursor-pointer text-xl text-primary"
                    >
                      <VisibilityOffIcon />
                    </div>
                  )}
                </div>
              </div>
              {errors.password && (
                <p role="alert" className="text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            {isError && (
              <p className="text-red-500">{error?.response?.data?.message}</p>
            )}
            {isPending ? (
              <Button
                disabled
                sx={{
                  backgroundColor: "gray.dark",
                  color: "gray.light",
                  borderRadius: "100px",
                  borderWidth: "1px 1px 3px 1px",
                  borderStyle: "solid",
                  borderColor: "black.dark",
                  py: "12px",
                  mt: "30px",
                  "&:hover": { color: "gray.dark" },
                }}
                className="transition-all ease-in-out  font-semibold hover:shadow-lg flex   w-full "
              >
                {t('loading')}
                <CircularProgress
                  size="1rem"
                  variant="indeterminate"
                  sx={{ color: "background.default" }}
                />{" "}
              </Button>
            ) : (
              <Button
                type="submit"
                sx={{
                  backgroundColor: "gray.dark",
                  color: "gray.light",
                  borderRadius: "100px",
                  borderWidth: "1px 1px 3px 1px",
                  borderStyle: "solid",
                  borderColor: "black.dark",
                  py: "12px",
                  mt: "30px",
                  "&:hover": { color: "gray.light" },
                }}
                className="transition-all ease-in-out  font-semibold hover:shadow-lg flex   w-full "
              >
                {t('Login')}
              </Button>
            )}
          </form>
          <div className="w-3/4 flex  justify-between items-center">
            <Link
              href="/reset-password"
              className="border-b-2 border-blue-400 pb-1 text-gray-500 hover:text-blue-500 "
            >
              {t('ResetPassword')}
            </Link>
            <div className="flex gap-2">
              {t('Newuser')}{" "}
              <Link href="/signup">{t('signup')}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginWith;
