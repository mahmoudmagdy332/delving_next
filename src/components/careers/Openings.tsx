import {  Typography } from "@mui/material";
import OpeningCard from "./OpeningCard";
import { useCareerSliceSelector } from "../../app/slices/CareersSlice";
import React from "react";
import CareerLoader from "../common/CareerLoader";
import { useLanguageSelector } from "../../app/slices/languageSlice";

interface opening {
  loading: boolean;
  success: boolean;
}
const Openings: React.FC<opening> = ({ loading, success }) => {
  const { careers } = useCareerSliceSelector((state) => state.CareersReducer);
  const { translations } = useLanguageSelector(
    (store) => store.languageReducer
  );

  // const { categories } = useCategoriesSliceSelector(
  //   (store) => store.categoriesReducer
  // );

  return (
    <div className="my-10 w-11/12 lg:w-10/12 mx-auto">
      <Typography
        sx={{ fontFamily: "typography", fontSize: "32px", fontWeight: "500" }}
      >
        {translations.CareerOpenings}
      </Typography>

      {/* <div className="flex flex-wrap gap-4 my-10">
        {categories?.map((item) => (
          <Button
            sx={{
              border: "1px solid gray",
              color: "text.primary",
              py: "8px",
              px: "10px",
              borderRadius: "5px",
              "&:hover": {
                borderColor: "primary.main",
                bgcolor: "primary.dark",
              },
            }}
          >
            {item.title}
          </Button>
        ))}
      </div> */}
      <div className="flex flex-col gap-5">
        {loading && [...Array(6)].map(() => <CareerLoader />)}
        {success && careers?.map((career) => <OpeningCard item={career} />)}
      </div>
    </div>
  );
};

export default Openings;
