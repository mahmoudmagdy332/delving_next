import { Typography } from "@mui/material";
import CourseCard from "./CourseCard";
import { useMylearningsSelector } from "../../app/slices/myLearningSlice";

function Recomended() {
  const { suggestions } = useMylearningsSelector((state) => state.myLearningReducer);

  return (
    <div className="flex flex-col gap-4 p-4">
      {suggestions?.length>0&&(
   <Typography
   variant="h3"
   sx={{
     color: "dark.main",
     my: 4,
   }}
 >
   Recommended for you
 </Typography>
      )}
   
      <div className="grid  grid-cols-1  sm:grid-cols-2  gap-4">
        {suggestions?.map((course) => (
          <CourseCard course={course} />
        ))}
      </div>
    </div>
  );
}

export default Recomended;
