'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import {useEffect,useState} from "react";
import Cookies from "js-cookie";
export default function LanguageChanger() {

  
  const router = useRouter();
  const currentPathname = usePathname();
  const storelocale = Cookies.get("NEXT_LOCALE");
  const [currentLocale,setCurrentLocale]=useState();
   useEffect(()=>{

  
    setCurrentLocale(storelocale)
   },[storelocale])
  const handleChange = e => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

 
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );

    router.refresh();
  };

  return (
    <select onChange={handleChange} value={currentLocale}>
      <option value="en">English</option>
      <option value="ar">arbic</option>
   
    </select>
  );
}