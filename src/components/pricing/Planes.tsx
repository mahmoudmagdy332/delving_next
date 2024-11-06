"use client"
import { Box } from "@mui/material";
import PlaneCard from "./PlaneCard";
import { usePackagesSliceSelector } from "@/utils/slices/PackageSLice"; 

const Planes = () => {
  const { month_package } = usePackagesSliceSelector(
    (state) => state.PackageReducer
  );
  console.log('month_package',month_package);
  
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col my-10 gap-20">
      {/* <div className="flex justify-center">
        <Box
          sx={{ bgcolor: "background.paper" }}
          className="p-2 flex rounded-xl"
        >
          <Button
            sx={{
              bgcolor: "primary.main",
              "&:hover": { bgcolor: "black.dark" },
              color: "background.default",
              fontWeight: "600",
              px: "30px",
              py: "15px",
              borderRadius: "10px",
            }}
          >
            Monthly
          </Button>
          <Button sx={{ color: "black.dark", px: "30px", py: "15px" }}>
            Yearly
          </Button>
        </Box>
      </div> */}
      <Box
        sx={{ bgcolor: "background.paper", position: "relative" }}
        className="p-10 rounded-xl  gap-4 w-full"
      >
    
     
          
            <div className="flex flex-wrap gap-3 justify-center" >
            {month_package?.map((item) => (
             <PlaneCard item={item} key={item.id}/> 
            ))}
            </div>
          

      </Box>
    </div>
  );
};

export default Planes;
