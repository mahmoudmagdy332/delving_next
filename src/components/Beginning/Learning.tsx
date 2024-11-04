import { Link } from "react-router-dom";
import { useHomeSliceSelector } from "../../app/slices/homeSlice";
import Recomended from "./Recomended";
import { useMylearningsSelector } from "../../app/slices/myLearningSlice";
import Continue from "./Continue";
import { useUserSelector } from "../../app/slices/UserSlice";
import { useLanguageSelector } from "../../app/slices/languageSlice";

function Learning() {
  const { newCourses } = useHomeSliceSelector((state) => state.homeReducer);
  const { mylearnings } = useMylearningsSelector(
    (state) => state.myLearningReducer
  );
  const { user } = useUserSelector((state) => state.UserReducer);
  const { translations } = useLanguageSelector(
    (store) => store.languageReducer
  );

  return (
    <div className="p-4 flex flex-col  gap-4">
      {mylearnings.data.length > 0 ? (
        <div className="flex flex-col  gap-4">
          <h1 className="text-2xl font-bold my-8">{translations.JumpBack}</h1>
          <div
            className="flex flex-col border-2 border-gray-200 gap-4 rounded-xl  "
            style={{
              boxShadow: "5px 10px 5px #E5E5E5",
            }}
          >
            <div className="bg-[#ECF0FF]  p-8 rounded-t-xl ">
              <div className="flex items-center justify-center">
                <img
                  width={96}
                  height={96}
                  src={mylearnings.data[0].image}
                  alt=""
                />
              </div>
            </div>
            <div className="px-2">
              <div className="w-full  bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                <div
                  className="bg-blue-900 h-1 rounded-full dark:bg-blue-500"
                  style={{ width: `${mylearnings.data[0].progress}%` }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <h3 className="text-2xl font-bold">
                {" "}
                {mylearnings.data[0].name}
              </h3>

              <div className="w-full p-8 text-center">
                <Link
                  to={`/courses/${mylearnings.data[0].id}`}
                  className=" py-2 w-full flex items-center justify-center  border-black bg-black border-2  rounded-full text-lg text-white"
                >
                  <p> {translations.ContinuePath}</p>
                </Link>
              </div>
            </div>
          </div>
          <Continue />
        </div>
      ) : (
        <div className="flex flex-col  gap-4">
          <h1 className="text-2xl font-bold my-8">Start Learning</h1>
          <div
            className="flex flex-col border-2 border-gray-200 gap-4 rounded-xl  "
            style={{
              boxShadow: "5px 10px 5px #E5E5E5",
            }}
          >
            <div className="bg-[#ECF0FF]  p-8 rounded-t-xl ">
              <div className="flex items-center justify-center">
                <img
                  width={96}
                  height={96}
                  src={
                    newCourses && newCourses[0]?.image
                      ? newCourses[0]?.image
                      : "/images/PHOTOS/logic-deduction-M7p41u.png"
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <h3 className="text-2xl font-bold">
                {" "}
                {newCourses && newCourses[0]?.name}
              </h3>

              <div className="w-full p-8 text-center">
                {user?.is_premium ? (
                  <Link
                    to={`/courses/${newCourses && newCourses[0]?.id}`}
                    className=" py-2 w-full flex items-center justify-center  border-black bg-black border-2  rounded-full text-lg text-white"
                  >
                    <p> Start now</p>
                  </Link>
                ) : (
                  <Link
                    to={"/pricing"}
                    className=" py-2 w-full flex items-center justify-center  border-black bg-black border-2  rounded-full text-lg text-white"
                  >
                    <p> subscribe now</p>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        <Recomended />
      </div>
    </div>
  );
}

export default Learning;
