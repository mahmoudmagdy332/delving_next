import { Box, Button, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { RiCloseLargeFill } from "react-icons/ri";
import Cookies from "js-cookie"; // Ensure you import Cookies

import { Package } from "../../app/utils/types/types";
import { useNavigate } from "react-router-dom";
import { SubscribePackageQuery } from "../../app/services/queries";
import { useState } from "react";
import { useUserSelector } from "../../app/slices/UserSlice";
import { useLanguageSelector } from "../../app/slices/languageSlice";

interface PackageProp {
  item: Package;
}

const PlaneCard: React.FC<PackageProp> = ({ item }) => {
  const { translations } = useLanguageSelector(
    (store) => store.languageReducer
  );
  const { user } = useUserSelector((state) => state.UserReducer);
  const navigate = useNavigate();
  const [PackageId, setPackageId] = useState<number>();
  const { data, refetch } = SubscribePackageQuery(PackageId);
  const handleClick = async (id: number) => {
    await setPackageId(id);
    const token = Cookies.get("access_token");

    if (!token) {
      navigate("/login");
      return;
    }

    refetch();
    console.log(data);
  };
  return (
    <div className="border rounded-xl px-3 py-8 flex flex-col gap-5">
      <Box
        sx={{
          bgcolor: "primary.light",
          color: "background.default",
          fontSize: "18px",
        }}
        className="flex font-semibold rounded-lg py-3 justify-center"
      >
        {item.name}
      </Box>
      <div className="flex justify-center items-end">
        <Typography
          sx={{ fontSize: "60px", fontWeight: "600", color: "black.dark" }}
        >
          {user?.country_id === 1 ? "EGP" : "$"}
          {user?.country_id === 1 ? item.price : item.dollar_price}
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "gray.dark",
            opacity: 0.6,
          }}
        >
          /{item.duration} {translations.month}
        </Typography>
      </div>
      <Box
        sx={{
          bgcolor: "background.default",
          borderRadius: "20px",
          border: "1px solid",
          borderColor: "divider",
        }}
        className="flex flex-col gap-4"
      >
        <div className="p-5 flex flex-col gap-10 items-center justify-center">
          <Typography
            sx={{ fontSize: "20px", fontWeight: "600", color: "black.dark" }}
          >
            {translations.AvailableFeatures}
          </Typography>
          <div className="flex flex-col gap-4 w-full">
            {item.features?.map((feature) => (
              <div
                key={feature.id}
                className="border rounded-lg gap-3 flex items-center p-3"
              >
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "10px",
                    bgcolor: feature.is_active ? "primary.dark" : "black.light",
                  }}
                >
                  {feature.is_active ? <CheckIcon /> : <RiCloseLargeFill />}
                </Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "black.dark",
                  }}
                >
                  {feature.title}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <Button
          onClick={() => handleClick(item.id)}
          sx={{
            bgcolor: "primary.light",
            "&:hover": { bgcolor: "black.dark" },
            color: "background.default",
            px: "30px",
            py: "15px",
            borderRadius: "0 0 20px 20px",
          }}
        >
          {translations.getStart}
        </Button>
      </Box>
    </div>
  );
};

export default PlaneCard;
