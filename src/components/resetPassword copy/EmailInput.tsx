import { CircularProgress } from "@mui/material";
import { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { CustomError } from "../../app/services/mutation";
import { forgetPassword } from "../../app/utils/types/types";
import { useLanguageSelector } from "../../app/slices/languageSlice";

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
        <input
          type="text"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          className="w-full border border-gray-300 p-2.5 focus:border-Secondary"
          style={{ outline: "none" }}
          placeholder={translations.UsernameOrEmail}
        />
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

        <button className='flex justify-center bg-primary   duration-400 items-center gap-3 rounded-sm py-3" py-2.5   text-white hover:bg-Secondary transition-all duration-300'>
          {isPending ? (
            <>
              {translations.loading}
              <CircularProgress size={20} color="inherit" />
            </>
          ) : (
            <>
              {translations.send}
              <img src="/images/icons/Vector2.svg" alt="Icon" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default EmailInput;
