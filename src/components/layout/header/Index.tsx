import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../../../Theme";
import { useTheme } from "@mui/material/styles";
import { Link, NavLink } from "react-router-dom";
import Popup from "../../auth/Popup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { changePopup, useUserSelector } from "../../../app/slices/UserSlice";
import Cookies from "js-cookie";
import { useSettingSliceSelector } from "../../../app/slices/settingSlice";
import UserProfile from "./UserProfile";
import LanguageMenu from "./LanguageMenu";
import { useLanguageSelector } from "../../../app/slices/languageSlice";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

export default function Index(props: Props) {
  const { translations } = useLanguageSelector(
    (state) => state.languageReducer
  );
  const navItems = [
    { name: translations.home, link: "/" },
    { name: translations.Courses, link: "courses" },
    { name: translations.AboutUs, link: "/about" },
    { name: translations.Pricing, link: "/pricing" },
    { name: translations.Careers, link: "/careers" },
  ];
  const { setting } = useSettingSliceSelector((state) => state.settingReducer);
  const { user } = useUserSelector((state) => state.UserReducer);

  const [isLogin, setIsLogin] = React.useState(false);
  const token = Cookies.get("access_token");
  React.useEffect(() => {
    if (user && token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [user, token]);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const dispatch = useDispatch<AppDispatch>();
  const handleClickOpen = () => {
    dispatch(changePopup(true));
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2, width: "90%", mx: "auto" }}>
        <img alt="" src={setting?.logo} />
      </Box>
      <Divider />
      <List sx={{ m: "20px" }}>
        {navItems.map((item, idx) =>
          item.name !== "Pricing" ? (
            <ListItem key={idx} disablePadding>
              <NavLink to={item.link}>
                <ListItemText
                  sx={{
                    color: "primary.light",
                    "&:hover": { color: "yellow.dark" },
                  }}
                  primary={item.name}
                />
              </NavLink>
            </ListItem>
          ) : (
            !user?.is_premium && (
              <ListItem key={idx} disablePadding>
                <NavLink to={item.link}>
                  <ListItemText
                    sx={{
                      color: "primary.light",
                      "&:hover": { color: "yellow.dark" },
                    }}
                    primary={item.name}
                  />
                </NavLink>
              </ListItem>
            )
          )
        )}
      </List>

      {isLogin ? (
        <></>
      ) : (
        <div className="mt-4">
          <Link to="/intro">
            <Button
              sx={{
                bgcolor: "transparent",
                color: "primary.main",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "primary.main",
                  py: "10px",
                },
              }}
            >
              {" "}
              Sign up
            </Button>
          </Link>
          <Button
            sx={{
              bgcolor: "primary.main",
              color: "white",
              py: "10px",
              px: "20px",
              borderRadius: "7px",
              "&:hover": {
                backgroundColor: "yellow.main",
              },
            }}
            onClick={handleClickOpen}
          >
            {translations.login}
          </Button>
        </div>
      )}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box sx={{ display: "flex" }}>
      <Popup />

      <AppBar component="nav" sx={{ bgcolor: "background.default" }}>
        {setting?.announce && (
          <Box sx={{ bgcolor: "primary.light" }} className="py-2">
            <Typography sx={{ color: "primary.dark", textAlign: "center" }}>
              {setting?.announce}
            </Typography>
          </Box>
        )}
        <Toolbar>
          <div className="w-11/12  mx-auto flex justify-between items-center py-2">
            <div className="w-56 h-20">
              {theme.palette.mode === "dark" ? (
                <img alt="" src={setting?.footer_logo} className=" h-20" />
              ) : (
                <img alt="" src={setting?.logo} className=" h-20" />
              )}
            </div>
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                gap: "5px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {navItems.map((item) =>
                item.name !== "Pricing" ? (
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      ` ${isActive ? "bg-[#e3e3e364] rounded-md "  : " "} `
                    }
                  >
                    <Typography
                      sx={{
                        color: "text.primary",
                        fontWeight: 700,
                        px: "15px",
                        py: "10px",
                        fontSize:'16px',
                        borderRadius: "5px",
                        "&:hover": {
                          bgcolor: "background.paper",
                        },
                      }}
                    >
                      {item.name}
                    </Typography>
                  </NavLink>
                ) : (
                  !user?.is_premium && (
                    <NavLink to={item.link}>
                      <Typography
                        sx={{
                          color: "text.primary",
                          fontWeight: 700,
                          fontSize:'16px',
                          px: "15px",
                          py: "10px",
                          borderRadius: "5px",
                          "&:hover": {
                            bgcolor: "background.paper",
                          },
                        }}
                      >
                        {item.name}
                      </Typography>
                    </NavLink>
                  )
                )
              )}
            </Box>

            <div className="flex gap-4 items-center">
              {isLogin ? (
                <>
                  <UserProfile />
                </>
              ) : (
                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    gap: "20px",
                    alignItems: "center",
                  }}
                >
                  <Link to="/intro">
                    <Button
                      sx={{
                        bgcolor: "transparent",
                        color: "primary.main",
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "primary.main",
                          py: "10px",
                        },
                      }}
                    >
                      {" "}
                  {translations.signup}
                    </Button>
                  </Link>
                  <Button
                    sx={{
                      bgcolor: "primary.main",
                      color: "white",
                      py: "10px",
                      px: "20px",
                      borderRadius: "7px",
                      "&:hover": {
                        backgroundColor: "yellow.main",
                      },
                    }}
                    onClick={handleClickOpen}
                  >
                    {translations.login}
                  </Button>

                  <LanguageMenu />
                </Box>
              )}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  display: { lg: "none" },
                  color: "text.primary",
                  ml: "10px",
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                onClick={colorMode.toggleColorMode}
                sx={{
                  color: "text.primary",
                  "&:hover": {
                    color: "text.primary",
                    cursor: "pointer",
                  },
                }}
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { lg: "block", xl: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
