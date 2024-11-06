import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/utils/store";
import { homeQuery } from "@/utils/services/queries";
import { setHome } from "@/utils/slices/homeSlice";

const useHome = () => {
    const dispatch = useDispatch<AppDispatch>();
  const { isSuccess, data, isLoading, isError ,error} = homeQuery();
  useEffect(() => {
    if (isSuccess) dispatch(setHome(data.data.data));
  }, [data, isSuccess]);

  return { data, isSuccess, isLoading, isError, error };
}

export default useHome