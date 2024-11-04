import { Box } from "@mui/material";
import PlaneCard from "./PlaneCard";
import { usePackagesSliceSelector } from "../../app/slices/PackageSLice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const Planes = () => {
  const { month_package } = usePackagesSliceSelector(
    (state) => state.PackageReducer
  );

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
        className="p-10 rounded-xl  gap-4"
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          breakpoints={{
            500: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {month_package?.map((item) => (
            <SwiperSlide key={item?.id}>
              <PlaneCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <button className="custom-prev">
          <ArrowBack sx={{ fontSize: 30, color: "dark.main" }} />
        </button>
        <button className="custom-next">
          <ArrowForward sx={{ fontSize: 30, color: "dark.main" }} />
        </button> */}
      </Box>
    </div>
  );
};

export default Planes;
