import { CircularProgress } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { confrimPassword } from "../../app/utils/types/types";
import { AxiosError } from "axios";
import { CustomError } from "../../app/services/mutation";
import { useLanguageSelector } from "../../app/slices/languageSlice";

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
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          className="w-full border border-gray-300 p-2.5 focus:border-Secondary"
          style={{ outline: "none" }}
          placeholder={translations.Password}
        />
        {errors.password && (
          <p role="alert" className="text-red-500 mt-1">
            {errors.password.message}
          </p>
        )}
        <input
          type="password"
          {...register("confrimPassword", {
            required: "Password confirmation is required",
          })}
          className="w-full border border-gray-300 p-2.5 focus:border-Secondary"
          style={{ outline: "none" }}
          placeholder={translations.confrimPassword}
        />
        {isError && (
          <p role="alert" className="text-red-500 mt-1">
            {error?.response?.data.message}
          </p>
        )}

        <button className='flex justify-center bg-primary   duration-400 items-center gap-3 rounded-sm py-3" py-2.5   text-white hover:bg-Secondary transition-all duration-300'>
          {isPending ? (
            <>
              {translations.Loading}{" "}
              <CircularProgress size={20} color="inherit" />
            </>
          ) : (
            <>
              {translations.Submit}
              <img src="/images/icons/Vector2.svg" alt="Icon" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
