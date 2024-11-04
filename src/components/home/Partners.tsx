import { Swiper, SwiperSlide } from "swiper/react";
import { useHomeSliceSelector } from "../../app/slices/homeSlice";
import { Box } from "@mui/material";

const Partners = () => {
  const { partners } = useHomeSliceSelector((state) => state.homeReducer);
  return (
    <div className="w-10/12 mx-auto my-4">
      <Box className="flex w-full  flex-wrap gap-2  justify-center items-center text-center  py-4">
        <Swiper
          spaceBetween={5}
          slidesPerView={2}
          pagination={{ clickable: true }}
          freeMode={true}
          style={{ width: "100%" }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
        >
          {partners?.map((item, index) => (
            <SwiperSlide key={index}>
              <img alt="" src={item.image} className=" h-20" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </div>
  );
};

export default Partners;
