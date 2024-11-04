import { Typography } from "@mui/material";
// import CountrySelect from "./CountryInput";
import JopInput from "../jop/JopInput";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useUpdatedUser } from "../../app/utils/hooks/useAuth";
import { toast } from "react-toastify";
import { useUserSelector } from "../../app/slices/UserSlice";
import CountrySelect from "./CountryInput";
import Loader from "../common/Loader";

export interface UpdateForm {
  fname?: string;
  lname?: string;
  zip?: string;
  city?: string;
  current_school?: string;
  region?: string;
  age?: string;
  address?: string;
  email?: string;
  phone?: string;
  image?: File;
  country_id?:number|null;
}
function PersonalInfo() {
  const user = useUserSelector((state) => state.UserReducer.user);

  const { mutate, isPending } = useUpdatedUser();

  const {
    handleSubmit,

    formState: { errors },
    control,
  } = useForm<UpdateForm>();

  const onSubmit: SubmitHandler<UpdateForm> = (data) => {
    if (data) {
      mutate(data, {
        onSuccess: () => {
         
          toast.success(` update is success`);
        },
      });
    }
  };
  if (isPending)
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader />
      </div>
    );
  return (
    <div className="w-11/12 lg:w-3/4 mx-auto my-4">
      <Typography
        className=""
        variant="h3"
        sx={{
          color: "dark.main",
          borderBottom: "2px solid",
          borderBottomColor: "dark.main",
          p: "0 0 20px 0 ",
        }}
      >
        Personal Info
      </Typography>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="py-4 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
          <div className="flex flex-col gap-2">
            <Typography
              sx={{
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
              }}
            >
              First Name <span className="ms-2 text-red-600">*</span>
            </Typography>
            <Controller
              rules={{
                required: " first Name is required",
              }}
              name="fname"
              defaultValue={user?.fname || ""}
          
              control={control}
              render={({ field }) => (
                <JopInput {...field} error={errors?.fname?.message} />
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
              Last name <span className="ms-2 text-red-600">*</span>
            </Typography>
            <Controller
              defaultValue={user?.lname || ""}
              rules={{
                required: "Last Name is required",
              }}
              name="lname"
              control={control}
              render={({ field }) => (
                <JopInput {...field} error={errors?.lname?.message} />
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
              Email <span className="ms-2 text-red-600">*</span>
            </Typography>
            <Controller
              defaultValue={user?.email || ""}
              rules={{
                required: "Email is required",
              }}
              name="email"
              control={control}
              render={({ field }) => (
                <JopInput {...field} error={errors?.email?.message} />
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
              Age <span className="ms-2 text-red-600">*</span>
            </Typography>
            <Controller
              rules={{
                required: " Age is required",
              }}
              defaultValue={user?.age || ""}
              name="age"
              control={control}
              render={({ field }) => (
                <JopInput {...field} error={errors?.age?.message} />
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
              phone <span className="ms-2 text-red-600">*</span>
            </Typography>
            <Controller
              name="phone"
              defaultValue={user?.phone || ""}
              control={control}
              render={({ field }) => <JopInput {...field} />}
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
              Address <span className="ms-2 text-red-600">*</span>
            </Typography>
            <Controller
              defaultValue={user?.address || ""}
              name="address"
              control={control}
              render={({ field }) => <JopInput {...field} />}
            />
          </div>
          {/* <div className="flex flex-col gap-2">
            <Typography
              sx={{
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
              }}
            >
              City <span className="ms-2 text-red-600">*</span>
            </Typography>
            <Controller
              name="city"
              defaultValue={user?.city || ""}
              control={control}
              render={({ field }) => (
                <JopInput {...field} error={errors?.city?.message} />
              )}
            />
          </div> */}
          <div className="flex flex-col gap-2">
            <Typography
              sx={{
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
              }}
            >
              State/province/region
              <span className="ms-2 text-red-600">*</span>
            </Typography>
            <Controller
              name="region"
              defaultValue={user?.email || ""}
              control={control}
              render={({ field }) => (
                <JopInput {...field} error={errors?.region?.message} />
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
              Zip/postal code
              <span className="ms-2 text-red-600">*</span>
            </Typography>
            <Controller
              name="zip"
              control={control}
              defaultValue={user?.zip || ""}
              render={({ field }) => (
                <JopInput {...field} error={errors?.zip?.message} />
              )}
            />{" "}
          </div>
          {!user?.country_id&&(
          <div className="flex flex-col gap-2">
          <Typography
            sx={{
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Country <span className="ms-2 text-red-600">*</span>
          </Typography>
          <Controller
            name="country_id"
            control={control}
            render={({ field }) => <CountrySelect {...field} />}
          />
        </div>
          )}
        

          <div className="flex flex-col gap-2">
            <Typography
              sx={{
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Name of your current school
              <span className="ms-2 text-red-600">*</span>
            </Typography>{" "}
            <Controller
              defaultValue={user?.current_school || ""}
              name="current_school"
              control={control}
              render={({ field }) => (
                <JopInput {...field} error={errors?.current_school?.message} />
              )}
            />
          </div>
        </div>

        <div className="flex items-center gap-8 w-full">
          <div className="p-4 border-2 rounded-full">
            <button disabled={isPending} className="w-full whitespace-nowrap">
              {isPending ? (
                <span> Loading....</span>
              ) : (
                <span>Update personal info</span>
              )}
            </button>
          </div>
          <p>
            By clicking "Update personal info", I acknowledge that all
            information submitted above is factually correct.
          </p>
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
