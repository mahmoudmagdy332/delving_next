"use client"
import CourseDiscrption from "@/components/CoursePath/CourseDiscrption"; 
import ExploreCource from "@/components/CoursePath/ExploreCource"; 
import Path from "@/components/CoursePath/Path"; 

import { useCourseById } from "@/utils/hooks/useCourse"; 
import { useEffect } from "react";
import { useUserSelector } from "@/utils/slices/UserSlice"; 
import Loader from "@/components/common/Loader"; 
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";


const CoursePath = ({ params: {id}}:{params: {id:string}}) => {
 
  const navigator = useRouter();
  const { user } = useUserSelector((state) => state.UserReducer);
  
  const t = useTranslations('common');
  const { isError, isLoading, error } = useCourseById({ id: id });

  useEffect(() => {
    if (user) {
      if (!user.survey_submited) {
        navigator.push("/welcome");
      }
    }
  }, [user]);
  if (isLoading)
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader />
      </div>
    );
  if (isError)
    return (
      <div className="h-screen flex justify-center items-center">
        {t('Error')}: {error?.message}
      </div>
    );
  return (
    <div>
      <div className="w-11/12 lg:w-3/4 mx-auto gap-10 flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/5 relative">
          <ExploreCource />
        </div>
        <div className="lg:w-3/5 ">
          <Path />
          <div>
            <br />
          </div>
        </div>
      </div>
      <div className="w-11/12 lg:w-3/4 mx-auto gap-10 flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/5 relative"></div>
        <div className="lg:w-3/5 ">
          <CourseDiscrption />
        </div>
      </div>
    </div>
  );
};

export default CoursePath;
