import { Box, Typography } from "@mui/material"
import { useHomeSliceSelector } from "../../app/slices/homeSlice"
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/swiper-bundle.css";

const Categories = () => {
  const {categories}=useHomeSliceSelector((state=>state.homeReducer))
  return (
    <Box sx={{bgcolor:"background.paper"}}>
         <div className="w-10/12 mx-auto  gap-y-10 py-10    ">
         <div className="relative flex  items-center justify-center">
          <Swiper
            spaceBetween={10}
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: `.js-top-desti-next_active2`,
              prevEl: `.js-top-desti-prev_active2`,
            }}
            breakpoints={{
              500: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
          >
            {categories?.map((item, idx) => (
              <SwiperSlide key={idx}>
                 <div className={`flex gap-2 items-center justify-center ${idx!==0&&"lg:border-s"}`}>
                <img alt="" src={item.image} className="h-12"/>
                <Typography sx={{color:"dark.main"}}>{item.title}</Typography>
            </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className={`text-black py-2 px-4 hover:bg-[#FFEFEA] hover:rounded-full transition-all duration-300 js-top-desti-prev_active2 hidden md:flex`}
          >
            <FaChevronLeft />
          </button>
          <button
            className={`text-black py-2 px-4 hover:bg-[#FFEFEA] hover:rounded-full transition-all duration-300 js-top-desti-next_active2 hidden md:flex`}
          >
            <FaChevronRight />
          </button>
        </div>
         </div>
         
    </Box>
  )
}

export default Categories