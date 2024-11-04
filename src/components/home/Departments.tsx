import { Box, Button, Typography  } from "@mui/material"

const Departments = () => {
    const ListItems=["Civil Engineering","Mechanical Engineering","Electrical Engineering","Computer Engineering","Architectural Engineering"]
    const civilItems=[
      {name:"Calculus in a Nutshell",icon:"/images/ICONS/image 24.png"},
      {name:"Calculus Fundamentals",icon:"/images/ICONS/image 25.png"},
      {name:"Integral Calculus",icon:"/images/ICONS/image 26.png"},
      {name:"Multivariable Functions",icon:"/images/ICONS/image 27.png"},
      {name:"Multivariable Calculus",icon:"/images/ICONS/image 28.png"},
      {name:"Vector Calculus",icon:"/images/ICONS/image 29.png"},
      {name:"Trigonometry",icon:"/images/ICONS/image 30.png"},
    ]  
    return (
    <Box sx={{bgcolor:'background.paper'}}>
         <div className="w-10/12 lg:w-3/4 mx-auto  py-10  ">
            <Box  className="flex flex-col gap-5 items-center text-center   pb-4">
            <Typography sx={{color:"dark.main",fontSize:'24px',fontWeight:"bold"}}>
             Engineering  <span style={{color:"#ffce00"}}>Departments</span>
            </Typography>
            </Box>
            <Box sx={{borderWidth:"1px 0px",borderColor:'text.secondary'}} className="flex justify-between flex-wrap gap-2  justify-center items-center text-center  py-5">
                {ListItems.map((item)=>(
                  <Button sx={{color:"text.primary",fontWeight:"600",'&:hover':{bgcolor:'background.default'},padding:'10px',borderRadius:'5px'}} >
                    {item}
                  </Button>
                ))}
             </Box>
             <Box  className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-10">
                  <Box className="flex flex-col gap-4"> 
                      <Box className="flex flex-col gap-1">
                          <Typography sx={{fontFamily:"typography",fontSize:'20px',fontWeight:400}}>Courses in </Typography>
                          <Typography sx={{fontFamily:"typography",fontSize:'20px',fontWeight:700}}> Civil Engineering </Typography> 
                      </Box>
                      <Box className="flex flex-col gap-4">
                          {civilItems.map((item)=>(
                            <div className="flex gap-2 items-center">
                               <img src={item.icon} className="w-8"/>
                               <Typography sx={{fontWeight:'500',fontSize:'18px'}}>{item.name}</Typography>
                            </div>
                          ))}
                      </Box>
                  </Box>
                  <Box className="col-span-2">
                    <Box className="flex py-3 justify-center" sx={{bgcolor:'text.primary'}}>
                    <Typography sx={{color:"background.paper",fontSize:'20px',fontWeight:"bold"}}>
                       Civil Engineering
                      </Typography>
                    </Box>
                    <Box className="flex justify-center items-cente py-10" sx={{bgcolor:'background.default',border:"2px solid white",borderColor:"text.primary"}}>
                      <img src="/images/PHOTOS/9233783_4111613 1.png" className="h-80"/>
                    </Box>
                      
                  </Box>
             </Box>
            </div>
    </Box>
  )
}

export default Departments