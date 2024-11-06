import { Typography } from "@mui/material";
import { useMylearningsSelector } from "@/utils/slices/myLearningSlice"; 
import CourseCard from "./CourseCard";
import Pagination from "./Pagination";
import { useTranslations } from "next-intl";

const Continue = () => {
  const { mylearnings } = useMylearningsSelector(
    (state) => state.myLearningReducer
  );
  const t = useTranslations('common');

  return (
    <div className="flex flex-col gap-4 p-4">
      <Typography
        variant="h3"
        sx={{
          color: "dark.main",
          my: 4,
        }}
      >
        {t('Continuelearning')}
      </Typography>
      <div className="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-8">
        {mylearnings.data.map((course) => (
          <CourseCard course={course} key={course.id}/>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Continue;
