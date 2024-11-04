import {  useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useUserSelector } from "../../app/slices/UserSlice";
const BottonPath = ({ title, top, left,scorm_url,id,started}:{ id:number,scorm_url:string,title:string, top:number,started:boolean, left :number}) => {
    const [imageIndex, setImageIndex] = useState(0);
    const navigator = useNavigate();
    const {user}=useUserSelector(state=>state.UserReducer)
    const [images,setImages]=useState<string[]>([ '/images/default on.svg',
      '',
      '/images/pressed on.svg'])
    useEffect(()=>{
      if(user){
        if(!user.is_premium){
          setImages([
            '/images/locked on.svg',
          ])
        }else if(!user.survey_submited){
          setImages([
            '/images/locked on.svg',
          ])
        }else{
          setImages([ '/images/default on.svg',
            '',
            '/images/pressed on.svg'])
        }
      }else{
        setImages([
          '/images/locked on.svg',
        ])
      }
    },[user])
    const handleTap = () => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const handleClick=()=>{
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      if(user){
        if(!user.is_premium){
          navigator("/pricing");
        }else if(!user.survey_submited){
          navigator("/welcome");
        }else{
          localStorage.setItem('scorm_url',scorm_url)
          navigator(`/courses/${title}/${id}`);
        }
      }else{
        navigator("/login");
      }
        
     
    }
    return (
        <>
         <div style={{
            position: 'absolute',
            top: `${top}px`,
            left: `${left}px`,
            textAlign: 'center',
        }} >
          {started&&(
            <div className="absolute -top-10 ">
              <img  src="images/LOGO/gift-plan.svg.png" className="w-16 "/>
            </div>
          )}
          <motion.button
      onTapStart={handleTap} // Change the image on tap
      onTap={handleClick} // Reset the image when the tap is completed
      onClick={handleClick}
    >
      <motion.img
      className="absolute w-24 right-3  z-9"
      style={{bottom:'60px'}}
      key={imageIndex} // key helps in transitioning between different images
      src={images[imageIndex]}
      alt="Switchable"
      animate={{ opacity: 1 }} // end of animation
    
      onTapStart={handleTap} // Change the image on tap

      onClick={handleClick}
    />
             </motion.button>
         
            <Typography sx={{mt:"100px",color:"primary.light"}} className="w-24">{title}</Typography>
            
        </div>
        </>
       
    );
}

export default BottonPath