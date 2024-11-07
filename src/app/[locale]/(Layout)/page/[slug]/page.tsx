
"use client"
import { pageQuery } from "@/utils/services/queries";
import Loader from "@/components/common/Loader";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import HeaderLayout from "@/components/common/HeaderLayout"; 
import { useTranslations } from "next-intl";

const Page = ({ params: {slug}}:{params: {slug:string}}) => {
  const t = useTranslations('common');

const { isLoading, data ,isError,error,refetch} = pageQuery(slug);
useEffect(()=>{
    refetch();
},[slug])

if (isLoading)
    return (
      <div className="flex h-96 justify-center items-center">
        <Loader />
      </div>
    );
  if (isError)
    return (
      <div className="h-96 flex justify-center items-center">
        {t('Error')}: {error?.message}
      </div>
    );
  return (
    <div className="w-10/12 lg:w-3/4 mx-auto my-20 ">
    <div className="flex flex-col gap-5 items-center">
      <HeaderLayout>
        <Typography
          sx={{
            fontSize: "28px",
            px: "10px",
            fontFamily: "Cairo",
            fontWeight: "bold",
          }}
        >
         {data?.data.data.title}
        </Typography>
      </HeaderLayout>
   
        {data &&(
          <div
        dangerouslySetInnerHTML={{ __html: data.data.data.description }}
        className=" text-center"
        
      />
        ) }

    </div>
  </div>
  )
}

export default Page