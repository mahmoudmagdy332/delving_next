"use client"
import { useCareers } from "@/utils/hooks/useCareers"; 
import Hero from "@/components/Help/Hero";
import Openings from "@/components/careers/Openings"; 

const Careers = () => {
  const { isLoading, isSuccess } = useCareers();

  return (
    <div>
      <Hero />
      <Openings loading={isLoading} success={isSuccess} />
    </div>
  );
};

export default Careers;
