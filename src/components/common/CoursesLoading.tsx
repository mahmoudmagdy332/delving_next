import { Skeleton } from "@mui/material";

function CoursesLoading() {
  return (
    <div className="w-full flex flex-col gap-3 border rounded-md p-4">
      <div className="flex justify-center mb-3">
        <Skeleton variant="rectangular" width="75%" height={150} />
      </div>
      <Skeleton variant="text" width="60%" height={30} />
      <Skeleton variant="text" width="90%" height={20} />
      <Skeleton variant="text" width="90%" height={20} />
      <Skeleton variant="rectangular" height={40} width="100%" />
    </div>
  );
}

export default CoursesLoading;
