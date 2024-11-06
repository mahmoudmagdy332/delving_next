"use client"
import { Box, Typography } from "@mui/material";
import HeaderLayout from "../common/HeaderLayout";
import { useSettingSliceSelector } from "@/utils/slices/settingSlice";
import { useTranslations } from "next-intl";
import { UsePackages } from "@/utils/hooks/UsePackage";


const Hero = () => {
  const t = useTranslations('common');
  const { setting } = useSettingSliceSelector((state) => state.settingReducer);
  UsePackages();

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
            {t('Our')}{" "}
            <Box component="span" sx={{ color: "yellow.main" }}>
              {t('Pricing')}
            </Box>
          </Typography>
        </HeaderLayout>
        <Typography
          sx={{ textAlign: "center", fontSize: "20px" }}
          className="lg:w-3/4"
        >
          {setting?.pricing_description}
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
