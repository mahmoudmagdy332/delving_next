import { Skeleton } from "@mui/material";

const ArticleLoader = () => {
  return (
    <div className="flex sm:flex-row flex-col items-center gap-8 border rounded-lg p-4">
      {/* Image Placeholder */}
      <div className="w-10 h-10">
        <Skeleton variant="circular" width={40} height={40} />
      </div>

      {/* Text Content Placeholders */}
      <div className="flex flex-col gap-2 w-full">
        <Skeleton variant="text" width="60%" height={20} />
        <Skeleton variant="text" width="80%" height={18} />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Skeleton variant="circular" width={20} height={20} />
            <Skeleton variant="text" width="50px" height={15} />
          </div>
          <Skeleton variant="text" width="10px" height={15} />
          <Skeleton variant="text" width="50px" height={15} />
        </div>
      </div>
    </div>
  );
};

export default ArticleLoader;
