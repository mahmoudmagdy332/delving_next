import { Typography } from "@mui/material";
import PasswordInput from "./PasswordInput";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { password } from "../../app/utils/types/types";
import { toast } from "react-toastify";
import { useChangePassword } from "../../app/utils/hooks/useAuth";

function ChangePassword() {
  const {
    handleSubmit,
    reset,

    formState: { errors },
    control,
  } = useForm<password>();
  const { mutate, isPending } = useChangePassword();
  const onSubmit: SubmitHandler<password> = (data) => {
    if (data) {
      mutate(data, {
        onSuccess: () => {
          reset({
            current_password: "",
            new_password: "",
            new_password_confirmation: "",
          });
          toast.success(` update is success`);
        },
      });
    }
  };
  return (
    <div className="w-11/12 lg:w-3/4 mx-auto my-6">
      <Typography
        className=""
        variant="h3"
        sx={{
          color: "dark.main",
          borderBottom: "2px solid",
          borderBottomColor: "dark.main",
          p: " 20px 0 ",
          mb: 1,
        }}
      >
        Change Password
      </Typography>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <Typography
            sx={{
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
            }}
          >
            current Password: <span className="ms-2 text-red-600">*</span>
          </Typography>
          <Controller
            name="current_password"
            control={control}
            render={({ field }) => (
              <PasswordInput
                {...field}
                error={errors?.current_password?.message}
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Typography
            sx={{
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
            }}
          >
            New Password <span className="ms-2 text-red-600">*</span>
          </Typography>
          <Controller
            name="new_password"
            control={control}
            render={({ field }) => (
              <PasswordInput {...field} error={errors?.new_password?.message} />
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Typography
            sx={{
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
            }}
          >
            confirm current Password{" "}
            <span className="ms-2 text-red-600">*</span>
          </Typography>
          <Controller
            name="new_password_confirmation"
            control={control}
            render={({ field }) => (
              <PasswordInput
                {...field}
                error={errors?.new_password_confirmation?.message}
              />
            )}
          />
        </div>
        <div className="p-4 border-2 w-1/2 rounded-full">
          <button className="w-full whitespace-nowrap">
            {isPending ? (
              <span> Loading....</span>
            ) : (
              <span> Update your password</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
