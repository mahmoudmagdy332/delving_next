import { Box, Typography } from "@mui/material";
import HeaderLayout from "../common/HeaderLayout";

import { useSettingSliceSelector } from "@/utils/slices/settingSlice"; 
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation('common');
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
            {t("Delveng")}{" "}
            <Box component="span" sx={{ color: "yellow.main" }}>
          
              {t("Careers")}
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
