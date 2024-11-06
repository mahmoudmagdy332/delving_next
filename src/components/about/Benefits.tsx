import { Typography } from "@mui/material";
import BenefitCard from "./BenefitCard";
import { useTranslations } from "next-intl";
import { Benefits as benefitsType } from "@/utils/types/types";

const Benefits = ({benefits}:{benefits:benefitsType[]}) => {
  const t = useTranslations('common');

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto my-10 ">
      <div className="border-t">
        <Typography
          sx={{ fontSize: "20px", fontWeight: "600", margin: "40px 0px" }}
        >
          {t('Benefits')}
        </Typography>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {benefits?.map((Benefit) => (
            <BenefitCard item={Benefit} key={Benefit.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
