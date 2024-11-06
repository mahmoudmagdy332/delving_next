"use client"
import { useEffect } from "react";
import { useMylearningsSelector } from "@/utils/slices/myLearningSlice"; 
import Achieving from "../Beginning/Achieving"; 
import Learning from "../Beginning/Learning";
import Loader from "../common/Loader"; 
import useMyLearning from "@/utils/hooks/useMyLearning";
import { useTranslations } from "next-intl";

const MyLearning = () => {
 
  const t = useTranslations('common');
  const { mylearnings } = useMylearningsSelector(
    (state) => state.myLearningReducer
  );
  const { isLoading, isError, error, refetch } = useMyLearning({
    currentPage: mylearnings.current_page,
  });
  useEffect(() => {
    refetch();
  }, [mylearnings.current_page]);

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
    <div className="w-10/12 lg:w-3/4 mx-auto md:grid my-10 lg:grid-cols-3 md:grid-cols-4">
      <div className="lg:col-span-1 md:col-span-2 ">
        <Achieving />
      </div>
      <div className="col-span-2 md:cols-span-2">
        <Learning />
      </div>
    </div>
  );
};

export default MyLearning;
