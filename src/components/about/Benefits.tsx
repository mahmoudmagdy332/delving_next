import { Typography } from "@mui/material";
import BenefitCard from "./BenefitCard";
import { useAboutUsSliceSelector } from "../../app/slices/AboutusSlice";
import { useLanguageSelector } from "../../app/slices/languageSlice";

const Benefits = () => {
  const { Benefits } = useAboutUsSliceSelector((state) => state.AboutAsReducer);
  const { translations } = useLanguageSelector(
    (store) => store.languageReducer
  );

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto my-10 ">
      <div className="border-t">
        <Typography
          sx={{ fontSize: "20px", fontWeight: "600", margin: "40px 0px" }}
        >
          {translations.Benefits}
        </Typography>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {Benefits?.map((Benefit) => (
            <BenefitCard item={Benefit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
