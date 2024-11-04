import { useEffect, useRef, useState } from "react";
import {
  setLevel,
  useCoursesSliceSelector,
} from "../../app/slices/coursesSlice";
import BottonPath from "./BottonPath";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";

const Path = () => {
  const { singleCourse } = useCoursesSliceSelector(
    (state) => state.CoursesReducer
  );
  const [inView, setInView] = useState(
    Array(singleCourse?.levels.length).fill(false)
  ); // Initializing state for tracking visibility
  const [startState, setStartState] = useState(0);

  const refs = useRef<(HTMLDivElement | null)[]>([]); // Array of refs

  const handleScroll = () => {
    const newInView = refs.current.map((ref) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        return rect.top + 300 > 0 && rect.bottom < window.innerHeight;
      }
      return false;
    });
    setInView(newInView);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on moun
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    singleCourse?.levels.map((level) => {
      level.lessons.map((lesson) => {
        if (!lesson.started && !startState) {
          setStartState(lesson.id);
        }
      });
    });
    if (singleCourse)
      for (let i = 0; i < singleCourse.levels.length; i++) {
        let check = false;
        for (let j = 0; j < singleCourse.levels[i].lessons.length; j++) {
          if (singleCourse.levels[i].lessons[j].started === false) {
            check = true;
            setStartState(singleCourse.levels[i].lessons[j].id);
            console.log(
              "singleCourse.levels[i].lessons[j].id",
              singleCourse.levels[i].lessons[j].id
            );
            break;
          }
        }
        if (check) {
          break;
        }
      }
  }, [singleCourse]);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    inView.map((req, idx) => {
      if (req) {
        dispatch(setLevel(idx));
      }
    });
  }, [inView]);
  return (
    <>
      {singleCourse?.levels.map((level, idx) => (
        <div
          className="relative pb-20 my-10"
          ref={(el) => (refs.current[idx] = el)}
        >
          <div
            className="w-full absolute top-0 left-0 h-full"
            style={{
              backgroundImage: 'url("/images/PHOTOS/Mask Group.svg")',
              backgroundRepeat: "repeat",
              opacity: ".5",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            style={{
              position: "relative",
              height: `${level.lessons_count * 150}px`,
            }}
          >
            {level.lessons_count > 0 && (
              <BottonPath
                title={level.lessons[0].name}
                started={level.lessons[0].id === startState}
                id={level.lessons[0].id}
                scorm_url={level.lessons[0].scorm_url}
                top={90}
                left={310}
              />
            )}
            {level.lessons_count > 1 && (
              <BottonPath
                title={level.lessons[1].name}
                started={level.lessons[1].id === startState}
                id={level.lessons[1].id}
                scorm_url={level.lessons[1].scorm_url}
                top={210}
                left={166}
              />
            )}
            {level.lessons.slice(2).map((lesson, index) => (
              <>
                {index % 4 === 0 && (
                  <>
                    <BottonPath
                      key={index}
                      title={lesson.name}
                      started={lesson.id === startState}
                      id={lesson.id}
                      scorm_url={lesson.scorm_url}
                      top={Math.floor(index / 4) * 540 + 370}
                      left={240}
                    />
                    <img
                      alt=""
                      src="/images/ICONS/Vector(3).svg"
                      className={`${
                        level.lessons.length - 3 === index && "hidden"
                      }`}
                      style={{
                        position: "absolute",
                        top: Math.floor(index / 4) * 540 + 400,
                        left: 300,
                        zIndex: -1,
                      }}
                    />
                  </>
                )}
                {index % 4 === 1 && (
                  <>
                    <BottonPath
                      key={index}
                      id={lesson.id}
                      started={lesson.id === startState}
                      title={lesson.name}
                      scorm_url={lesson.scorm_url}
                      top={Math.floor(index / 4) * 540 + 490}
                      left={350}
                    />
                    <img
                      alt=""
                      src="/images/ICONS/Vector(4).svg"
                      className={`${
                        level.lessons.length - 3 === index && "hidden"
                      }`}
                      style={{
                        position: "absolute",
                        top: Math.floor(index / 4) * 540 + 580,
                        left: 220,
                        zIndex: -1,
                      }}
                    />
                  </>
                )}
                {index % 4 === 2 && (
                  <>
                    <BottonPath
                      key={index}
                      id={lesson.id}
                      started={lesson.id === startState}
                      title={lesson.name}
                      scorm_url={lesson.scorm_url}
                      top={Math.floor(index / 4) * 540 + 650}
                      left={250}
                    />
                    <img
                      alt=""
                      src="/images/ICONS/Vector(5).svg"
                      className={`${
                        level.lessons.length - 3 === index && "hidden"
                      }`}
                      style={{
                        position: "absolute",
                        top: Math.floor(index / 4) * 540 + 730,
                        left: 200,
                        zIndex: -1,
                      }}
                    />
                  </>
                )}
                {index % 4 === 3 && (
                  <>
                    <BottonPath
                      key={index}
                      id={lesson.id}
                      started={lesson.id === startState}
                      title={lesson.name}
                      scorm_url={lesson.scorm_url}
                      top={Math.floor(index / 4) * 540 + 780}
                      left={150}
                    />
                    <img
                      alt=""
                      src="/images/ICONS/Vector(6).svg"
                      className={`${
                        level.lessons.length - 3 === index && "hidden"
                      }`}
                      style={{
                        position: "absolute",
                        top: Math.floor(index / 4) * 540 + 850,
                        left: 50,
                        zIndex: -1,
                      }}
                    />
                  </>
                )}
              </>
            ))}
            {level.lessons_count > 1 && (
              <img
                alt=""
                src="/images/ICONS/Vector(1).svg"
                style={{
                  position: "absolute",
                  top: 100,
                  left: 160,
                  zIndex: -1,
                }}
              />
            )}
            {level.lessons_count > 2 && (
              <img
                alt=""
                src="/images/ICONS/Vector(2).svg"
                style={{ position: "absolute", top: 290, left: 60, zIndex: -1 }}
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Path;
