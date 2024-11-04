import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSettingSliceSelector } from "../../app/slices/settingSlice";
import { updateUser } from "../../app/slices/UserSlice";
import Loader from "../common/Loader";
import useSetting from "../../app/utils/hooks/useSetting";
import useCategories from "../../app/utils/hooks/useCategories";
import { changeLanguage, useLanguageSelector } from "../../app/slices/languageSlice";

const MainLayout = () => {
  
  useCategories();
  const { error } = useSetting();
  const { loading } = useSettingSliceSelector((state) => state.settingReducer);
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const { lang } = useLanguageSelector((state) => state.languageReducer);

  useEffect(() => {
    const language = localStorage.getItem("lang");
    if (language) {
      dispatch(changeLanguage(language));
    }
    const student = localStorage.getItem("student");
    if (student) {
      dispatch(updateUser(JSON.parse(student)));
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    console.log('lang',lang);
    
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
  return <Outlet/>;
};

export default MainLayout;
