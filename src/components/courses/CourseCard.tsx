import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { course } from "../../app/utils/types/types";
import React from "react";
import { useLanguageSelector } from "../../app/slices/languageSlice";

interface courseProps {
  course: course;
}

const CourseCard: React.FC<courseProps> = ({ course }) => {
  const { translations } = useLanguageSelector(
    (store) => store.languageReducer
  );
  return (
    <div className="w-full flex flex-col gap-5 border rounded-md p-4 h-full">
      <div className="flex justify-center mb-3">
        <img alt="" src={course?.image} className="w-3/4 h-[140px]" />
      </div>
      <h3 className="font-semibold text-xl">{course?.name}</h3>
      <div className="text-sm ">
        <p
          dangerouslySetInnerHTML={{ __html: course.description }}
          className="line-clamp-1"
        />
      </div>
      <div className="mt-auto">
        <Link to={`/courses/${course?.id}`}>
          <Button
            sx={{
              color: "black.light",
              fontSize: "14px",
              fontWeight: "600",
              width: "100%",
              bgcolor: "gray.dark",
              py: "8px",
              my: "10px",
              "&:hover": {
                bgcolor: "primary.light",
              },
            }}
          >
            {translations.ViewPath}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
