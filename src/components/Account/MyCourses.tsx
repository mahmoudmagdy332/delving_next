import { Typography } from "@mui/material";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import MyCourseCard from "./MyCourseCard";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import "./MyCourses.css";
// import CourseCard from "./CourseCard";
function MyCourses() {
  // const courses = [
  //   {
  //     image: "/images/PHOTOS/Frame.svg",
  //     title: "Fire Fighting",
  //     description: "Master key scientific ideas & technologies of the future",
  //   },
  //   {
  //     image: "/images/PHOTOS/Frame (1).svg",
  //     title: "Electrical Power",
  //     description: "Master key scientific ideas & technologies of the future",
  //   },
  //   {
  //     image: "/images/PHOTOS/Group (1).svg",
  //     title: "Fire Fighting",
  //     description: "Master key scientific ideas & technologies of the future",
  //   },
  // ];

  return (
    <div className="flex flex-col gap-4 w-11/12 lg:w-3/4 mx-auto">
      <Typography
        variant="h3"
        sx={{
          color: "dark.main",
          borderBottom: "2px solid",
          borderBottomColor: "dark.main",
          paddingBottom: "20px",
        }}
      >
        My Courses
      </Typography>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={2}
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
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {/* {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <MyCourseCard course={course} />
            </SwiperSlide>
          ))} */}
        </Swiper>

        <button className="custom-prev">
          <ArrowBack sx={{ fontSize: 30, color: "dark.main" }} />
        </button>
        <button className="custom-next">
          <ArrowForward sx={{ fontSize: 30, color: "dark.main" }} />
        </button>
      </div>

      <Typography
        variant="h3"
        sx={{
          color: "dark.main",
          my: 4,
        }}
      >
        Recommended for you
      </Typography>
      <div className="grid  grid-cols-1  sm:grid-cols-2  gap-4">
        {/* {courses.map((course) => (
          <CourseCard course={course} />
        ))} */}
      </div>
    </div>
  );
}

export default MyCourses;
