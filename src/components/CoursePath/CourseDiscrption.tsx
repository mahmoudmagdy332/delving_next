import { Typography } from "@mui/material";
import { useCoursesSliceSelector } from "@/utils/slices/coursesSlice"; 
import { useTranslations } from "next-intl";

const CourseDiscrption = () => {
  const { singleCourse } = useCoursesSliceSelector(
    (state) => state.CoursesReducer
  );
  const t = useTranslations('common');
  return (
    <div>
      <div className="flex flex-col gap-8 py-8  border-t">
        <Typography
          sx={{ fontWeight: "700", fontSize: "18px", color: "dark.main" }}
        >
          {t('CourseDescription')}{" "}
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
