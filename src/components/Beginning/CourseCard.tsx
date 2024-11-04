import { Link } from "react-router-dom";
import { course } from "../../app/utils/types/types";

const CourseCard = ({ course }: { course: course }) => {
  return (
    <Link
      to={`courses/${course.id}`}
      className="flex hover:shadow-md flex-col gap-5 items-center border rounded-2xl px-4 py-3 justify-between" 
    >
      <img
        alt=""
        src={course.image}
        className="object-cover h-32  w-full  max-w-xs max-h-sm"
      />

      <h3 className="font-semibold text-lg text-center">{course.name}</h3>
      {/* <Link to={`/courses/${course.name}`}></Link> */}
      <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
        <div
          className="bg-blue-900 h-1 rounded-full dark:bg-blue-500"
          style={{ width: `${course.progress}%` }}
        ></div>
      </div>
    </Link>
  );
};

export default CourseCard;
