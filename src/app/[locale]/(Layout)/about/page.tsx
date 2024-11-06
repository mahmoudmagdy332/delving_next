
import Benefits from '@/components/about/Benefits';
import Hero from '@/components/about/Hero';

import { getAboutAPI } from '@/utils/api';

const about = async ({ params: { locale } }:{params: { locale:string }}) => {
      const {data} = await getAboutAPI(locale);
      if (!data) {
        return <p>Failed to load data</p>;
      }
  return (
  
     <>
      <Hero About={data.aboutUs} />
      <Benefits benefits={data.benefits}/>
     </>
       
 
    )
  }
  
  export default about