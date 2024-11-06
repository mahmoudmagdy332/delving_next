'use client'
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import React from 'react'

const ChangeLanguage = ({locale}:{locale:string}) => {
    const currentPathname = usePathname();
  return (
    <div>
    {locale==='ar'? <Link href={currentPathname} locale="en">Switch to English</Link>: <Link href={currentPathname} locale="ar">Switch to Arabic</Link>}
    </div>
  )
}

export default ChangeLanguage