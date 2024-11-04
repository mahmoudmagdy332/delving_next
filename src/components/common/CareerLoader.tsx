import { Skeleton } from "@mui/material";

const CareerLoader = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-2 gap-10 py-5 border-b">
      <div className="flex flex-col gap-4">
        <Skeleton variant="text" width="60%" height={30} />
        <Skeleton variant="text" width="100%" height={20} />
        <Skeleton variant="text" width="100%" height={20} />
        <Skeleton
          variant="rectangular"
          width="30%"
          height={50}
          sx={{ borderRadius: "5px" }}
        />
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <Skeleton variant="text" width="40%" height={30} />
          <Skeleton variant="text" width="60%" height={20} />
        </div>
      </div>
    </div>
  );
};

export default CareerLoader;
