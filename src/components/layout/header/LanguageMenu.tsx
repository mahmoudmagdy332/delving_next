"use client";
import React, { useEffect, useState } from "react";
import { GrLanguage } from "react-icons/gr";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Logout, PersonAdd } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
const LanguageMenu = () => {
  const { t } = useTranslation('common');
  const [isLogin] = useState(false);
  const currentPathname = usePathname();
  const storelocale = Cookies.get("NEXT_LOCALE");
  const router = useRouter();
  const [currentLocale,setCurrentLocale]=useState<string>();
  useEffect(()=>{
    if(storelocale){
      setCurrentLocale(storelocale)
    }
    else{
      setCurrentLocale('en')
    }
  },[storelocale])
  useEffect(()=>{
    if(currentPathname.includes('/en')){
      router.push(
        currentPathname.replace(`/en`,`/${currentLocale}`)
      );
    }else{
      router.push(
        currentPathname.replace(`/ar`,`/${currentLocale}`)
      );
    }
    router.refresh();
    
  },[currentLocale])
  const change = (e:string) => {
    const newLocale = e;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

     console.log('currentLocale',currentLocale);
     console.log('newLocale',newLocale);
     console.log('currentPathname',currentPathname);
     setCurrentLocale(newLocale)
      // router.push(
      //   currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      // );
      // router.refresh();
      // window.location.reload();
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <React.Fragment>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              {isLogin ? (
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              ) : (
                <GrLanguage className="text-Secondary lang-button cursor-pointer" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
        {isLogin ? (
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> {t('Profile')}
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Avatar /> {t('Myaccount')}
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              {t('AddAccount')}
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              {t('Logout')}
            </MenuItem>
          </Menu>
        ) : (
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,

                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 30,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {currentLocale === "en" ? (
              <MenuItem
                onClick={() => change("ar")}
                className={`${currentLocale !== "en" && "hidden"}`}
              >
                Ar
              </MenuItem>
            ) : (
              <MenuItem
                onClick={() => change("en")}
                className={`${currentLocale === "en" && "hidden"}`}
              >
                En
              </MenuItem>
            )}
          </Menu>
        )}
      </React.Fragment>
      <div></div>
      {/* <div className="dropdownLang">
    <div  className="dropdown-divLang z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-32 ">
        <ul className="flex flex-col py-2 text-sm text-gray-700">
          <li className={`${lang==='en'&&'hidden'}`}>
            <button   className={`flex justify-end w-full px-4 py-2 hover:bg-gray-100 `}>English</button>
          </li>
          <li className={`${lang!=='en'&&'hidden'}`}>
          <button  onClick={()=>change('ar')} className={`flex justify-end w-full px-4 py-2 hover:bg-gray-100 `}>عربى</button>
          </li>
        </ul>
      </div>
   </div> */}
    </>
  );
};

export default LanguageMenu;
