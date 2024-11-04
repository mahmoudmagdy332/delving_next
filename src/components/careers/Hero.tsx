import { Box, Typography } from "@mui/material";
import HeaderLayout from "../common/HeaderLayout";
import { useLanguageSelector } from "../../app/slices/languageSlice";
import { useSettingSliceSelector } from "../../app/slices/settingSlice";

const Hero = () => {
  const { translations } = useLanguageSelector(
    (store) => store.languageReducer
  );
  const { setting } = useSettingSliceSelector((state) => state.settingReducer);

  return (
    <div className="w-10/12 lg:w-3/4 mx-auto my-20 ">
      <div className="flex flex-col gap-5 items-center">
        <HeaderLayout>
          <Typography
            sx={{
              fontSize: "28px",
              px: "10px",
              fontFamily: "Cairo",
              fontWeight: "bold",
            }}
          >
            {translations.Delveng}{" "}
            <Box component="span" sx={{ color: "yellow.main" }}>
          
              {translations.Careers}
            </Box>
          </Typography>
        </HeaderLayout>
        <Typography
          sx={{ textAlign: "center", fontSize: "20px" }}
          className="lg:w-3/4"
        >
         
          {setting?.career_description}
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
