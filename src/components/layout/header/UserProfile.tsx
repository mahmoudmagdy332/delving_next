
import React from 'react'
import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import { Logout } from '@mui/icons-material';
import {  RootState } from '../../../app/store';
import { useLogout } from '../../../app/utils/hooks/useAuth';

import { Link } from 'react-router-dom';
import { stringAvatar } from '../../../app/utils/hooks/stringAvatar';
import { useUserSelector } from '../../../app/slices/UserSlice';
import { useLanguageSelector } from '../../../app/slices/languageSlice';







const UserProfile = () => {
  const { translations } = useLanguageSelector(
    (store) => store.languageReducer
  );
 
  const { user } = useUserSelector((state: RootState) => state.UserReducer);
    const {refetch}=useLogout()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
      const handleLogout=async()=>{
         await refetch();

        handleClose();
      }
   

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar {...stringAvatar(user?.fname || "Null")} />
          </IconButton>
        </Tooltip>
      </Box>

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
          <Link to="/account" className="flex gap-2 items-center">
            {user?.image?(
               <img alt='' src={user.image} className='w-10 rounded-full'/>
            ):(
              <Avatar />
            )}
           
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold hover:text-Secondary transition-all ease-in-out">
                {user?.fname}
              </h3>
              <p
                className="text-sm w-200 truncate"
                style={{
                  width: "150px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                {user?.email}
              </p>
            </div>
          </Link>
        </MenuItem>

        <Divider />

   

        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          {translations.Logout}
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default UserProfile;
