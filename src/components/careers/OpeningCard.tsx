import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { career } from "../../app/utils/types/types";
import { useLanguageSelector } from "../../app/slices/languageSlice";

interface careerProps {
  item: career;
}
const OpeningCard: React.FC<careerProps> = ({ item }) => {
  const { translations } = useLanguageSelector(
    (store) => store.languageReducer
  );
  return (
    <div className="grid grid-cols-2 lg:grid-cols-2 gap-10 py-5 mt-2 border-t">
      <div className="flex flex-col gap-4">
        <Typography
          sx={{ fontFamily: "typography", fontSize: "24px", fontWeight: "400" }}
        >
          {item.title}
        </Typography>
        <Typography
          sx={{ fontSize: "18px", fontWeight: "400", color: "primary.light" }}
        >
          {item.description && (
            <Typography
              dangerouslySetInnerHTML={{ __html: item?.description }}
            />
          )}
        </Typography>
        <Link to="/jop/1" className="flex justify-start">
          <Button
            sx={{
              bgcolor: "primary.main",
              "&:hover": { bgcolor: "black.dark" },
              color: "background.default",
              fontWeight: "600",
              px: "30px",
              py: "15px",
              borderRadius: "5px",
            }}
          >
            {translations.LearnMore}
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <Typography
            sx={{
              fontFamily: "typography",
              fontSize: "24px",
              fontWeight: "500",
              color: "primary.main",
            }}
          >
            {item.level}
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
            {item.type}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default OpeningCard;
