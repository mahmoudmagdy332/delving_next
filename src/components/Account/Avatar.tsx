import {
  AvatarGroup,
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useUpdatedUser } from "../../app/utils/hooks/useAuth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { changeImage, useUserSelector } from "../../app/slices/UserSlice";
import { stringAvatar } from "../../app/utils/hooks/stringAvatar";

interface ImageInput {
  image?: File | null;
}

function Avatar() {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const user = useUserSelector((state) => state.UserReducer.user);
  console.log("image", user?.image);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ImageInput>();
  const { mutate, isPending } = useUpdatedUser();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (file && file.length > 0) {
      setSelectedFile(file[0]);
      dispatch(changeImage(URL.createObjectURL(file[0])));
    }
  };

  const onSubmit: SubmitHandler<ImageInput> = (data) => {
    if (data && selectedFile) {
      mutate(
        { ...data, image: selectedFile },
        {
          onSuccess: () => {
            toast.success("Image upload is successful");
          },
        }
      );
    }
  };

  return (
    <Box
      className="my-10"
      sx={{
        width: "92%",
        maxWidth: "75%",
        mx: "auto",
        mb: 1,
        [theme.breakpoints.down("sm")]: {
          maxWidth: "100%",
          width: "100%",
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "dark.main",
          borderBottom: "2px solid",
          borderBottomColor: "dark.main",
          p: "0 0 20px 0",
        }}
      >
        Avatar
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        spacing={2}
        mb={1}
        pr={{ xs: 0, sm: 5 }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "dark.main",
            fontWeight: "600",
            [theme.breakpoints.down("sm")]: {
              fontSize: "1.25rem",
            },
          }}
        >
          Upload new:
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "dark.main",
            fontWeight: "600",
            mt: { xs: 2, sm: 0 },
          }}
        >
          {selectedFile
            ? "You chose a profile picture"
            : "You haven't uploaded a profile picture yet."}
        </Typography>
      </Stack>

      <div className="flex flex-col ">
        <div className="rounded-full border-4 w-[80px] h-[80px] border-Secondary">
          {user?.image ? (
            <img
              src={user.image}
              className="rounded-full w-full h-full"
              alt="Profile"
            />
          ) : (
            <AvatarGroup
              {...stringAvatar(user?.fname || "Null")}
              sx={{ width: "100%", height: "100%", fontSize: "40px" }}
            />
          )}
        </div>

        <Typography
          sx={{
            color: "dark.main",
            fontSize: "15px",
            pl: 2,

            fontWeight: "500",
            [theme.breakpoints.down("sm")]: {
              pl: 2,
              mt: 2,
              fontSize: "14px",
            },
          }}
        >
          {selectedFile ? selectedFile.name : "No file chosen"}
        </Typography>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4">
          <Button
            aria-label="Upload new profile picture"
            sx={{
              borderRadius: "20px",
              backgroundColor: "primary.main",
              color: "white",
              fontSize: "16px",
              px: 6,
              border: "2px solid black.dark",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "yellow.dark",
                color: "black.light",
              },
              [theme.breakpoints.down("md")]: {
                fontSize: "14px",
                px: 3,
              },
            }}
            component="label"
          >
            Choose file
            <input
              type="file"
              accept="image/*"
              {...register("image", {
                required: "Profile image is required",
              })}
              hidden
              onChange={handleFileChange}
            />
          </Button>
          {errors.image && (
            <Typography color="error" sx={{ mt: 1 }}>
              {errors.image.message}
            </Typography>
          )}
        </div>

        <div>
          <Button
            type="submit"
            className="text-nowrap"
            disabled={!selectedFile}
            aria-label="Upload new profile picture"
            sx={{
              borderRadius: "20px",
              backgroundColor: selectedFile ? "black.dark" : "black.light",
              color: "white",
              fontSize: "16px",
              px: 15,
              border: "2px solid black.dark",
              textTransform: "none",
              "&:hover": {
                backgroundColor: selectedFile ? "yellow.dark" : "black.light",
                color: selectedFile ? "black.light" : "white",
              },
              [theme.breakpoints.down("sm")]: {
                px: 8,
                fontSize: "14px",
              },
            }}
            aria-live="polite"
          >
            {isPending ? "Loading..." : "Upload new image"}
          </Button>
        </div>
      </form>
    </Box>
  );
}

export default Avatar;
