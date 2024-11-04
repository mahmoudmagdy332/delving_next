'use client'
import { Box, Typography } from "@mui/material";
import HeaderLayout from "../common/HeaderLayout";
import { AboutUs } from "@/utils/types/types";
import { useEffect } from "react";
import { log } from "console";
// import { useLanguageSelector } from "../../app/slices/languageSlice";

const Hero = ({About}:{About:AboutUs[]}) => {

   
   
  useEffect(()=>{
    console.log('aboutsadsad',About);
    
  },[About])
  const about: string | null = About && About?.[0]?.title;
  const about_des: string | null = About && About?.[0]?.description;
  console.log('About',About);
  const [firstWord, secondWord]: string[] = about ? about.split(" ") : ["", ""];
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
            {firstWord}
            <Box component="span" sx={{ ml: 1, color: "yellow.main" }}>
              {secondWord}
            </Box>
          </Typography>
        </HeaderLayout>
     
          {about_des &&(
            <div
          dangerouslySetInnerHTML={{ __html: about_des }}
          className=" text-center"
          
        />
          ) }
     
        <Typography sx={{ textAlign: "center", fontSize: "18px" }}>
          {/* {translations.AboutHero} */}
        </Typography>
        {/* <img src="/images/PHOTOS/Frame 2608236.png" /> */}
        {About && <img alt="" src={About && About[0].meta_image} />}
      </div>
    </div>
  );
};

export default Hero;
