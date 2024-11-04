import { Button } from "@mui/material";
import { Link } from "react-router-dom";

type course = {
  image: string;
  title: string;
  description: string;
};
const MyCourseCard = ({ course }: { course: course }) => {
  return (
    <div className="w-full flex flex-col gap-5 text-center justify-center items-center border rounded-md p-3">
      <div className="flex justify-center mb-3">
        <img src={course.image} className="w-2/3" />
      </div>
      <h3 className="font-semibold text-lg">{course.title}</h3>
      <p className="text-sm">{course.description}</p>
      <Link to={`/courses/${course.title}`}>
        <Button
          sx={{
            borderRadius: "20px",
            backgroundColor: "primary.main",
            color: "white",
            fontSize: "14px",
            px: 5,
            border: "2px solid black.dark",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "yellow.dark",
              color: "black.light",
            },
          }}
        >
          Start Course
        </Button>
      </Link>
    </div>
  );
};

export default MyCourseCard;
