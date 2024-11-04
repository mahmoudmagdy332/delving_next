import { Typography } from "@mui/material";
import { useHomeSliceSelector } from "../../app/slices/homeSlice";
import { useLanguageSelector } from "../../app/slices/languageSlice";

const Works = () => {
  const { content } = useHomeSliceSelector((state) => state.homeReducer);
  const { translations } = useLanguageSelector(
    (store) => store.languageReducer
  );

  return (
    <div className="w-3/4 lg:w-3/5 mx-auto my-20">
      <div className="flex flex-col gap-5 items-center text-center">
        <Typography
          sx={{ color: "dark.main", fontSize: "24px", fontWeight: "bold" }}
        >
          {translations.HowDelveng}{" "}
          <span style={{ color: "#ffce00" }}>{translations.Works}</span>
        </Typography>
        <Typography
          sx={{ color: "gray.dark", fontSize: "16px", fontWeight: "400" }}
        >
          {translations.WorksDetails}
        </Typography>
      </div>
      <div className="flex flex-col ">
        {content?.map((item, idx) => (
          <div
            className={`flex flex-col-reverse items-center my-10 gap-x-32 ${
              idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <img alt="" src={item.image} className="w-full lg:w-1/2" />
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <Typography
                sx={{
                  color: "dark.main",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: "gray.dark" }}>
                {item.description}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
