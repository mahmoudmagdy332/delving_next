import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useMode } from "../../Theme";
import { useLanguageSelector } from "../../app/slices/languageSlice";

const AccountSide = () => {
  const { translations } = useLanguageSelector(
    (store) => store.languageReducer
  );
  const [theme] = useMode();
  console.log(theme.palette);

  return (
    <Box
      className="w-11/12 lg:w-3/4 mt-12 pt-8 pb-4 mx-auto flex flex-col gap-4"
      sx={{
        
        borderBottom: `2px solid ${theme.palette.divider}`,
        borderTop: `2px solid ${theme.palette.divider}`,
      }}
    >
      <NavLink
        to="/account"
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-gray-500"
        }
      >
        {translations.Avatar}
      </NavLink>
      <NavLink
        to="/account/personal"
        className={({ isActive }) =>
           isActive ? "text-blue-500" : "text-gray-500"
        }
      >
        {translations.PersonalInfo}
      </NavLink>
      <NavLink
        to="/account/password"
        className={({ isActive }) =>
         isActive ? "text-blue-500" : "text-gray-500"
        }
      >
        {translations.Password}
      </NavLink>
      {/* <NavLink
        to="/account/myCourses"
        className={location.pathname === "/account/myCourses" ? "active" : ""}
      >
        Courses
      </NavLink> */}
    </Box>
  );
};

export default AccountSide;
