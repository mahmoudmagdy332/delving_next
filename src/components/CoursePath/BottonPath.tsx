
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useUserSelector } from "@/utils/slices/UserSlice"; 
import { useRouter } from "@/i18n/routing";
import image from "@/../public/images/LOGO/gift-plan.svg.png"
import Image from "next/image";

const BottonPath = ({ title, top, left,scorm_url,id,started}:{ id:number,scorm_url:string,title:string, top:number,started:boolean, left :number}) => {
    const [imageIndex, setImageIndex] = useState(0);
    const navigator = useRouter();
    const {user}=useUserSelector(state=>state.UserReducer)
    const [images,setImages]=useState<string[]>([ '/images/default on.svg',
      '',
      '/images/pressed on.svg'])
    useEffect(()=>{
      if(user){
        if(!user.is_premium){
          setImages([
            '/images/locked on.svg',
            '',
      '/images/pressed on.svg'
          ])
        }else if(!user.survey_submited){
          setImages([
            '/images/locked on.svg',
            '',
      '/images/pressed on.svg'
          ])
        }else{
          setImages([ '/images/default on.svg',
            '',
            '/images/pressed on.svg'])
        }
      }else{
        setImages([
          '/images/locked on.svg',
          '',
          '/images/pressed on.svg'
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
          navigator.push("/pricing");
        }else if(!user.survey_submited){
          navigator.push("/welcome");
        }else{
          localStorage.setItem('scorm_url',scorm_url)
          navigator.push(`/${id}/scorm`);
        }
      }else{
        navigator.push("/signin");
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
              <Image  src={image} alt="start" className="w-16 "/>
            </div>
          )}
          <motion.button
      onTapStart={handleTap} // Change the image on tap
      onTap={handleClick} // Reset the image when the tap is completed
      onClick={handleClick}
      style={{backgroundColor:'transparent'}}
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