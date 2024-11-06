"use client"
import { Box, Button, Typography } from "@mui/material";
import HeaderLayout from "@/components/common/HeaderLayout"; 
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { IoMdClose } from "react-icons/io";

import CourseCard from "@/components/courses/CourseCard"; 
import {
  setCategory,
  setSearch,
  useCoursesSliceSelector,
} from "@/utils/slices/coursesSlice";
import { useCourses } from "@/utils/hooks/useCourse";
import { useDispatch } from "react-redux";
// import CourseCard from "../components/courses/CourseCard";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { useCategoriesSliceSelector } from "@/utils/slices/categoriesSlice"; 
import CoursesLoading from "@/components/common/CoursesLoading"; 
import Pagination from "@/components/common/Pagination"; 
import { useTranslations } from "next-intl";

type FormValues = {
  search: string;
};

const Courses = () => {
  const t = useTranslations('common');
  const { courses, search, category_id, currentPage } = useCoursesSliceSelector(
    (state) => state.CoursesReducer
  );
  console.log("page", currentPage);

  const { categories } = useCategoriesSliceSelector(
    (state) => state.categoriesReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("categories", categories);
  }, [categories]);
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const onSubmit: SubmitHandler<FormValues> = (key) => {
    dispatch(setSearch(key.search));
  };
  const handleInputChange = (value: string) => {
    setIsInputEmpty(value.trim().length === 0);
  };

  const clearInput = () => {
    setIsInputEmpty(true);

    dispatch(setSearch(undefined));
    reset();
  };
  const { isLoading, refetch } = useCourses({
    name: search,
    id: category_id,
    currentPage,
  });

  const handleSelectCategory = (id: number | undefined) => {
    dispatch(setCategory(id));
  };
  useEffect(() => {
    refetch();
  }, [currentPage]);
  return (
    <div className="py-10 w-10/12 mx-auto ">
      <div className="flex flex-col gap-10 ">
        <div className="flex justify-center">
          <HeaderLayout>
            <Typography
              sx={{
                color: "text.primary",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {t('BrowseAll')}
              <Box component="span" sx={{ color: "yellow.main" }}>
                {t('Course')}
              </Box>
            </Typography>
          </HeaderLayout>
        </div>
        {/* <form>
            <input className=" border h-10 rounded-md"/>
        </form> */}
        <form className="flex grow" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative flex grow">
            <input
              {...register("search", {
                onChange: (e) => handleInputChange(e.target.value),
              })}
              type="text"
              id="search"
              className="p-2.5 ps-12 h-12 py-5 w-64  outline-none grow text-sm  border font-semibold border-gray-500 rounded-lg bg-transparent focus:ring-gray-50 focus:border-gray-800"
              placeholder="Search for courses..."
              required
            />
            <div className="absolute inset-y-0 start-5 flex items-center pointer-events-none">
              <SearchTwoToneIcon />
            </div>
            {!isInputEmpty && (
              <div className="absolute inset-y-0 end-2  flex items-center cursor-pointer ">
                <IoMdClose className="cursor-pointer" onClick={clearInput} />
              </div>
            )}
          </div>
        </form>
        <div className="flex flex-wrap gap-4">
          <Button
            onClick={() => handleSelectCategory(undefined)}
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
              borderColor: !category_id ? "primary.main" : "",
              bgcolor: !category_id ? "primary.dark" : "",
            }}
          >
            {t('All')}
          </Button>
          {categories?.map((item) => (
            <Button
            key={item.id}
              onClick={() => handleSelectCategory(item.id)}
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
                borderColor: item.id === category_id ? "primary.main" : "",
                bgcolor: item.id === category_id ? "primary.dark" : "",
              }}
            >
              {item.title}
            </Button>
          ))}
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? [...Array(6)].map((idx) => <CoursesLoading key={idx}/>)
            : courses && courses?.map((item) => <CourseCard course={item} key={item.id}/>)}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Courses;
