import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { Box, Input, Typography } from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setSearch } from "../../app/slices/ArticleCatSlice";
import { IoMdClose } from "react-icons/io";
// import { useLanguageSelector } from "../../app/slices/languageSlice";
import { useSettingSliceSelector } from "../../app/slices/settingSlice";
interface FormValues {
  name: string;
}
function Hero() {
  // const { translations } = useLanguageSelector(
  //   (store) => store.languageReducer
  // );
  const { setting } = useSettingSliceSelector((state) => state.settingReducer);

  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (key) => {
    dispatch(setSearch(key.name));
  };
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const handleInputChange = (value: string) => {
    setIsInputEmpty(value.trim().length === 0);
  };

  const clearInput = () => {
    setIsInputEmpty(true);

    dispatch(setSearch(undefined));
    reset();
  };
  return (
    <Box
      sx={{
        bgcolor: "black.main",
      }}
    >
      <div className="w-10/12 lg:w-3/4 mx-auto py-8 ">
        <img src="/images/LOGO/HelpLogo.svg" alt="" />
        <div className="flex flex-col gap-8">
          <Typography
            sx={{
              color: "white",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            {setting?.article_categories_description}
          </Typography>
          <form className="flex grow" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative flex grow">
              <Input
                {...register("name", {
                  onChange: (e) => handleInputChange(e.target.value),
                })}
                disableUnderline
                sx={{
                  color: "black.dark",
                  bgcolor: "black.light",
                }}
                type="text"
                id="search"
                className="p-2.5 ps-12 h-12 py-5 w-64  outline-none grow text-sm  border font-semibold border-gray-500 rounded-lg bg-transparent focus:ring-gray-50  "
                placeholder="Search for articles... "
                required
              />
              <div className="absolute inset-y-0 start-5 flex items-center pointer-events-none">
                <SearchTwoToneIcon />
              </div>
              {!isInputEmpty && (
                <div className="absolute inset-y-0 end-2  flex items-center cursor-pointer ">
                  <IoMdClose className="cursor-pointer" onClick={clearInput} />
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </Box>
  );
}

export default Hero;
