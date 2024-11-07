import { Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { useCoursesSliceSelector } from "@/utils/slices/coursesSlice";
import { useTranslations } from "next-intl";

const ExploreCource = () => {
  const { singleCourse, level } = useCoursesSliceSelector(
    (state) => state.CoursesReducer
  );

  const t = useTranslations('common');
  return (
    <div className="flex p-8 flex-col gap-4 border-2 rounded-xl mt-10 sticky top-40 left-0">
      <img alt="" src={singleCourse?.image} className="w-16 h-16" />
      <Typography sx={{ color: "primary.main", fontWeight: "700" }}>
        {singleCourse?.name} · {t('Level')} {level + 1}
      </Typography>
      <Typography
        sx={{ color: "dark.main", fontWeight: "700", fontSize: "36px" }}
      >
        {singleCourse?.levels[level]?.name}
      </Typography>

      <Typography
        sx={{
          color: "dark.dark",
          fontWeight: "400",
          fontSize: "16px",
          display: "flex",
          gap: "10px",
        }}
      >
        <SchoolIcon />
        {singleCourse?.levels[level]?.lessons_count} {t('Lessons')}
      </Typography>
    </div>
  );
};

export default ExploreCource;
