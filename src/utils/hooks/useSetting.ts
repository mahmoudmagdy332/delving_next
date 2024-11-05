import { useDispatch } from "react-redux";
import { settingQuery } from "@/utils/services/queries";
import { useEffect } from "react";
import { AppDispatch } from "../store"; 
import {  createSetting } from "@/utils/slices/settingSlice";

const useSetting = () => {
    const dispatch = useDispatch<AppDispatch>();
  const { isLoading, data,error } = settingQuery();
  useEffect(() => {
    if (data) 
      dispatch(createSetting(data.data));
      
  }, [data]);


  return { data,error, isLoading };
}

export default useSetting


