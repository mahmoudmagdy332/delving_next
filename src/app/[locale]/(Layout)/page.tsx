"use client"
import Loader from '@/components/common/Loader';
import useHome from '@/utils/hooks/useHome';
import { useUserSelector } from '@/utils/slices/UserSlice';
import { useTranslations } from 'next-intl';
import React from 'react';
import Cookies from "js-cookie";
import MyLearning from '@/components/home/MyLearning';
import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import Works from '@/components/home/Works';
import Partners from '@/components/home/Partners';
import Engineering from '@/components/Premium/Engineering';


const Home = () => {
  const t = useTranslations('common');
  const { isLoading, isError, error } = useHome();
  const { user } = useUserSelector((state) => state.UserReducer);
  if (isLoading)
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader />
      </div>
    );
  if (isError)
    return (
      <div className="h-screen flex justify-center items-center">
        {t('Error')}: {error?.message}
      </div>
    );
  return (
    <div>
       {Cookies.get("access_token") && user?.is_premium ? (
        <MyLearning />
      ) : (
        <>
          <Hero />
          <Categories />
          <Works />
          {/* <Departments/>   */}
          <Engineering />
          <Partners />
        </>
      )}
    </div>
  )
}

export default Home