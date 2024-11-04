
import Dialog from '@mui/material/Dialog';

import Typography from '@mui/material/Typography';

import { changePopup, useUserSelector } from '../../app/slices/UserSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import GoogleLogin from './login/GoogleLogin';





export default function Popup() {
  const {isPopup:open}=useUserSelector((state)=>state.UserReducer)
  const dispatch = useDispatch<AppDispatch>();


  const handleClose = () => {
    dispatch(changePopup(false));
  };

  return (
    <div className=''>
  
      
  <Dialog onClose={handleClose} open={open} sx={{'& .MuiPaper-root': {
    borderRadius: '24px',
    width:'500px',
    
  },}}>
     <div className='flex justify-center'>
     <div className='flex flex-col gap-6 p-5 items-center w-3/4'>
         <img src="/images/LOGO/icon (1).png" className='w-30 lg:w-40'/>
         <Typography sx={{color:'black.dark',textAlign:'center',fontSize:'25px',fontFamily:'Typography'}}>Delve into Engineering with Delveng</Typography>
         <GoogleLogin/>
          {/* <Box sx={{borderWidth:'1px 1px 3px 1px',borderStyle:'solid',borderColor:'black.dark'}}  className='cursor-pointer transition-all ease-in-out rounded-full py-3 font-semibold hover:shadow-lg flex justify-center items-center gap-2 w-full '>
          <img src='/images/ICONS/facebook.svg'/>Log in with Facebook
          </Box> */}
          {/* <Box sx={{borderWidth:'1px 1px 3px 1px',borderStyle:'solid',borderColor:'black.dark'}}  className='cursor-pointer  transition-all ease-in-out rounded-full py-3 font-semibold hover:shadow-lg flex justify-center items-center gap-2 w-full '>
          <img src='/images/ICONS/apple.svg'/>Log in with Apple
          </Box> */}
          <Link to="/Login-with-email" onClick={handleClose} className='w-full'>
          <Box sx={{backgroundColor:'gray.dark',color:'gray.light',borderWidth:'1px 1px 3px 1px',borderStyle:'solid',borderColor:'black.dark'}}  className='cursor-pointer  transition-all ease-in-out rounded-full py-3 font-semibold hover:shadow-lg flex justify-center items-center gap-2 w-full mb-5'>
           Log in with Email
          </Box>
          </Link>
         
      </div>
      
     </div>
      
    </Dialog>
    </div>
  );
}