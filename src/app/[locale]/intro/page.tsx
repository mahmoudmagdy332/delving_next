"use client"
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { IntroQuery } from "@/utils/services/queries";
import Loader from "@/components/common/Loader";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

type introType = {
  name: string;
  description: string;
  image: string;
};
const Intro = () => {
  const t = useTranslations('common');
  const router= useRouter();
  const [step, setStep] = useState(0);
  const { data, isLoading, isError, error } = IntroQuery();
  const [intro, setIntro] = useState<introType[]>([]);

  console.log("data", data?.data.intro);
  useEffect(() => {
    setIntro(data?.data.intro);
  }, [data]);
  const HandleContinue = () => {
    if (step + 1 < intro.length) {
      setStep(step + 1);
    } else {
        
        router.push("/signup");
    }
  };

  if (isLoading)
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader />
      </div>
    );
  if (isError)
    return (
      <div className="h-screen flex justify-center items-center">
        Error: {error.message}
      </div>
    );
  return (
    <div className="py-10 w-10/12 lg:w-3/4 xl:w-1/2 mx-auto flex flex-col gap-2 items-center justify-center h-screen">
      <img alt="" src="/images/LOGO/Logo (2) 1.png" className="mb-5 h-10" />
      <div className="flex items-center">
        {intro?.map((_, idx) => (
          <>
            <Box
              sx={{
                bgcolor: idx <= step ? "primary.main" : "gray.main",
                color: idx <= step ? "white" : "gray.light",
              }}
              className=" h-8 w-8 text-sm md:h-10 md:w-10 md:text-md  lg:text-lg  font-semibold  rounded-full flex justify-center items-center"
            >
              {idx + 1}
            </Box>

            {idx + 1 < intro.length && (
              <>
                {idx < step ? (
                  <Box
                    sx={{ height: "1px", bgcolor: "primary.main" }}
                    className="w-8 md:w-12  "
                  ></Box>
                ) : idx == step ? (
                  <>
                    <Box
                      sx={{ height: "1px", bgcolor: "primary.main" }}
                      className=" w-4 md:w-6  "
                    ></Box>
                    <Box
                      sx={{ height: "1px", bgcolor: "gray.main" }}
                      className="  w-4 md:w-6 "
                    ></Box>
                  </>
                ) : (
                  <Box
                    sx={{ height: "1px", bgcolor: "gray.main" }}
                    className=" w-8 md:w-12 "
                  ></Box>
                )}
              </>
            )}
          </>
        ))}
      </div>
      <div className="my-5 text-xl font-semibold">
        {intro?.length > 0 && intro[step].name}
      </div>
      <div className="flex flex-col  justify-center items-center w-full">
        <div
          dangerouslySetInnerHTML={{ __html: intro?.length > 0 && intro[step].description }}
          className=" text-center"
          
        />
        <img
          alt=""
          src={intro?.length > 0 ? intro[step].image : ""}
          className="max-h-72"
        />

        <div className="flex justify-center w-full">
          <Button
            onClick={HandleContinue}
            sx={{
              bgcolor: "primary.main",
              fontSize: "14px",
              "&:hover": { bgcolor: "black.dark", color: "black.light" },
              color: "white",
              fontWeight: "600",
              mx: "30px",
              width: "400px",
              py: "10px",
              borderRadius: "7px",
              mt: "20px",
            }}
          >
            {t('Continue')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
