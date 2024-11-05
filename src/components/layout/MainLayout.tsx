"use client"
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";

import { updateUser } from "@/utils/slices/UserSlice";
import Loader from "../common/Loader";
import useSetting from "@/utils/hooks/useSetting";
import useCategories from "@/utils/hooks/useCategories";
import { useSettingSliceSelector } from "@/utils/slices/settingSlice";
import Cookies from "js-cookie";
const MainLayout = ({ children }: { children: ReactNode }) => {
  
  useCategories();
  const { error } = useSetting();
  const { loading } = useSettingSliceSelector((state) => state.settingReducer);

  const dispatch = useDispatch();
  const lang = Cookies.get("NEXT_LOCALE");
  useEffect(() => {
    
    const student = localStorage.getItem("student");
    if (student) {
      dispatch(updateUser(JSON.parse(student)));
    }
  }, []);


  useEffect(() => {
  
    
    if (lang === "ar") document.documentElement.dir = "rtl";
    else document.documentElement.dir = "ltr";
  }, [lang]);
  if (loading)
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader />
      </div>
    );
  if (error)
    return (
      <div className="h-screen flex justify-center items-center">
        Error: {error.message}
      </div>
    );

  return (

    <>
        {children}
    </>
    )
};

export default MainLayout;
