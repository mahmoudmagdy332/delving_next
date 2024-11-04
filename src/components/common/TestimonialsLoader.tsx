import { Box, Button, Skeleton } from "@mui/material";
import RateStar from "../common/RateStar";

const TestimonialLoader = () => {
  return (
    <Box className="flex flex-col gap-4 rounded-md border">
      <div className="p-8">
        <Skeleton variant="text" width="80%" height={60} />
        <Skeleton variant="text" width="90%" height={20} />
        <Skeleton variant="text" width="70%" height={20} />
      </div>
      <Box
        sx={{ bgcolor: "gray.light" }}
        className="flex flex-col rounded-es-lg rounded-ee-lg"
      >
        <div className="p-8 flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <Skeleton variant="text" width="40%" height={20} />
            <RateStar starNumber={4} />
          </div>
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
            <Skeleton variant="text" width={60} height={20} />
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default TestimonialLoader;
