import { Typography } from "@mui/material";
import { useCoursesSliceSelector } from "../../app/slices/coursesSlice";
import { useLanguageSelector } from "../../app/slices/languageSlice";

const CourseDiscrption = () => {
  const { singleCourse } = useCoursesSliceSelector(
    (state) => state.CoursesReducer
  );
  const { translations } = useLanguageSelector(
    (store) => store.languageReducer
  );
  return (
    <div>
      <div className="flex flex-col gap-8 py-8  border-t">
        <Typography
          sx={{ fontWeight: "700", fontSize: "18px", color: "dark.main" }}
        >
          {translations.CourseDescription}{" "}
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "17px",
            color: "dark.main",
            lineHeight: "36px",
          }}
        >
          {singleCourse?.description}
        </Typography>
      </div>
    </div>
  );
};

export default CourseDiscrption;
