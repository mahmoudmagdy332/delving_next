import { Typography } from "@mui/material";
import { useHomeSliceSelector } from "@/utils/slices/homeSlice";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Works = () => {
  const { content } = useHomeSliceSelector((state) => state.homeReducer);
  const t = useTranslations('common');

  return (
    <div className="w-3/4 lg:w-3/5 mx-auto my-20">
      <div className="flex flex-col gap-5 items-center text-center">
        <Typography
          sx={{ color: "dark.main", fontSize: "24px", fontWeight: "bold" }}
        >
          {t('HowDelveng')}{" "}
          <span style={{ color: "#ffce00" }}>{t('Works')}</span>
        </Typography>
        <Typography
          sx={{ color: "gray.dark", fontSize: "16px", fontWeight: "400" }}
        >
          {t('WorksDetails')}
        </Typography>
      </div>
      <div className="flex flex-col ">
        {content?.map((item, idx) => (
          <div key={idx}
            className={`flex flex-col-reverse items-center my-10 gap-x-32 ${
              idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <img alt={item.title} src={item.image} className="w-full lg:w-1/2" />
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <Typography
                sx={{
                  color: "dark.main",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: "gray.dark" }}>
                {item.description}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
