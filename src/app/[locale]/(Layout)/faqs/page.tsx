'use client'
import { Box, Typography } from "@mui/material";
import HeaderLayout from "@/components/common/HeaderLayout"; 
import Quetions from "@/components/common/Quetions"; 
import { UseFQs } from "@/utils/hooks/UsFQs"; 
import Loader from "@/components/common/Loader"; 
import { useTranslations } from "next-intl";


const FAQ = () => {
  const t = useTranslations('common');
  const { isLoading } = UseFQs();
  // const listItems=['All',"STUDENTS","TEACHERS","LIFE-LONG LEARNERS","LIPROFESSIONALS","PARENTS"]

  if (isLoading) {
    <div className="flex h-screen justify-center items-center">
      <Loader />
    </div>;
  }
  return (
    <div className="py-10 w-10/12 mx-auto">
      <div className="flex flex-col gap-16">
        <div className="flex justify-center">
          <HeaderLayout>
            <Typography
              sx={{
                color: "text.primary",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {t('FrequentlyAsked')}
              <Box component="span" sx={{ color: "yellow.main" }}>
                {t('Questions')}
              </Box>
            </Typography>
          </HeaderLayout>
        </div>

        {/* <div className="flex justify-center">
          <div className="flex flex-wrap lg:justify-between  gap-4 xl:w-3/4 ">
             {listItems.map((item)=>(
               <Button sx={{border:"1px solid gray",color:'text.primary',py:'8px',px:'10px',borderRadius:'5px','&:hover':{borderColor:'primary.main',bgcolor:'primary.dark'}}}>
                 {item}
               </Button>
             ))}
           </div>
          </div> */}
        <Quetions />
      </div>
    </div>
  );
};

export default FAQ;
