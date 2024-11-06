'use client'
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
import { ColorModeContext } from "@/utils/Theme"; 
import { useTheme } from "@mui/material/styles";
import Popup from "../../auth/Popup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/utils/store"; 
import { changePopup, useUserSelector } from "@/utils/slices/UserSlice"; 
import Cookies from "js-cookie";
import { useSettingSliceSelector } from "@/utils/slices/settingSlice"; 
import UserProfile from "./UserProfile";
import LanguageMenu from "./LanguageMenu";
import { useTranslations } from "next-intl"; 
import {Link} from '@/i18n/routing';
interface Props {

  window?: () => Window;
}

const drawerWidth = 240;

export default function Index(props: Props) {
  const t = useTranslations('common');
  const navItems = [
    { name: t('home'), link: "/" },
    { name: t('Courses'), link: "courses" },
    { name: t('AboutUs'), link: "/about" },
    { name: t('Pricing'), link: "/pricing" },
    { name: t('Careers'), link: "/careers" },
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
      <Box >
        <img alt="" src={setting?.logo} className="w-32" />
      </Box>
      <Divider />
      <List sx={{ m: "20px" }}>
        {navItems.map((item, idx) =>
          item.name !== "Pricing" ? (
            <ListItem key={idx} disablePadding>
              <Link href={item.link}>
                <ListItemText
                  sx={{
                    color: "primary.light",
                    "&:hover": { color: "yellow.dark" },
                  }}
                  primary={item.name}
                />
              </Link>
            </ListItem>
          ) : (
            !user?.is_premium && (
              <ListItem key={idx} disablePadding>
                <Link href={item.link}>
                  <ListItemText
                    sx={{
                      color: "primary.light",
                      "&:hover": { color: "yellow.dark" },
                    }}
                    primary={item.name}
                  />
                </Link>
              </ListItem>
            )
          )
        )}
      </List>

      {isLogin ? (
        <></>
      ) : (
        <div className="mt-4">
          <Link href="/intro">
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
            {t('login')}
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
                  <Link
                  key={item.name}
                    href={item.link}
                    className="bg-[#e3e3e364] rounded-md "
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
                  </Link>
                ) : (
                  !user?.is_premium && (
                    <Link href={item.link}>
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
                    </Link>
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
                  <Link href="/intro">
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
                  {t('signup')}
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
                    {t('login')}
                  </Button>

                  <LanguageMenu  />
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
