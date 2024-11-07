"use client"
// import ExampleComponent from '@upandgo/react-scorm-container'

import { useEffect,useState } from 'react'; 
import { startLessonQuery } from '@/utils/services/queries';

const Scorm = ({ params: {id}}:{params: {id:string}}) => {


  const [scorm,setScorm]=useState("")
  const {refetch} = startLessonQuery(id);
  useEffect(()=>{
    const scorm_url=localStorage.getItem('scorm_url')
    if(scorm_url){
    setScorm(scorm_url)
    }
    
  },[])
  useEffect(()=>{
    refetch()
  },[id])
// const handleCommit = () => {
  
//     }
  
  return (
  <div className=''>
  <div style={{ paddingTop:'20px' }}>
        {/* <ExampleComponent
          bridgeUrl={scorm?scorm:""}
          manifestUrl={scorm?scorm:""}
          initialState={{}}
          commitCallback={handleCommit}
          width='100%'
          
        /> */}
       {scorm&&scorm!=="null"?(
        <iframe
        src={scorm} 
        width="100%"
      
        className='h-[600px]'
      ></iframe>
       ):(
        <div className='h-96 flex justify-center items-center'>
             <p className='text-red-900 text-2xl'>Scorm Not Found</p>
        </div>
       )}
         
      
      </div>
  </div>
  )
}

export default Scorm