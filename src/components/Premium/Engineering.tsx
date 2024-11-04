import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import { useHomeSliceSelector } from "../../app/slices/homeSlice";
import { Box, Button, Typography } from "@mui/material";
import { useLanguageSelector } from "../../app/slices/languageSlice";

function Engineering() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleSetActiveIndex = (index: number) => {
    setActiveIndex(index);
  };
  const { categories } = useHomeSliceSelector((state) => state.homeReducer);
  const { translations } = useLanguageSelector(
    (store) => store.languageReducer
  );

  useEffect(() => {
    if (categories) {
      const intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % categories.length);
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [categories]);
  return (
    <Box sx={{ bgcolor: "background.paper" }} className="py-8">
      <div className="lg:w-3/4 w-10/12 mx-auto">
        <Box className="flex flex-col gap-5 items-center text-center   pb-4">
          <Typography
            sx={{ color: "dark.main", fontSize: "24px", fontWeight: "bold" }}
          >
            {translations.Engineering}{" "}
            <span style={{ color: "#ffce00" }}>{translations.Disciplines}</span>
          </Typography>
        </Box>
        <Box
          sx={{ borderWidth: "1px 0px", borderColor: "text.secondary" }}
          className="flex justify-between flex-wrap gap-2  justify-center items-center text-center  py-4"
        >
          <Swiper
            spaceBetween={5}
            slidesPerView={2}
            pagination={{ clickable: true }}
            freeMode={true}
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
            {categories?.map((item, index) => (
              <SwiperSlide key={index}>
                <Button
                  onClick={() => handleSetActiveIndex(index)}
                  sx={{
                    color: "text.primary",
                    fontWeight: "600",
                    bgcolor: activeIndex == index ? "background.default" : "",
                    "&:hover": { bgcolor: "background.default" },
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  {item.title}
                </Button>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <div className="flex flex-col">
          <div className="border-y"></div>

          <div className="flex flex-col-reverse lg:flex-row  lg:justify-between justify-center  gap-5 mt-4">
            <div className="flex flex-col  md:w-full lg:w-2/5">
              <Box className="flex flex-col gap-1">
                <Typography
                  sx={{
                    fontFamily: "typography",
                    fontSize: "20px",
                    fontWeight: 400,
                  }}
                >
                  {translations.CoursesIn}{" "}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "typography",
                    fontSize: "20px",
                    fontWeight: 700,
                  }}
                >
                  {" "}
                  {categories && categories[activeIndex].title}{" "}
                </Typography>
              </Box>
              <Box className="flex flex-col gap-4 mt-4">
                {categories &&
                  categories[activeIndex].courses.map((item) => (
                    <div className="flex gap-2 items-center">
                      <img alt="" src={item.image} className="w-8" />
                      <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
                        {item.name}
                      </Typography>
                    </div>
                  ))}
              </Box>
            </div>

            <div
              className="relative p-4 border-2 rounded-md border-black lg:w-2/3 h-[50vh] lg:h-[60vh] md:3/4 sm:w-full"
              style={{ boxShadow: "10px 5px 5px black" }}
            >
              <video
                autoPlay={true}
                loop
                className="h-full w-full object-cover"
                src={categories ? categories[activeIndex].video : "asdsadsad"}
              ></video>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Engineering;
