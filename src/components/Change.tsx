"use client"
import { Link, usePathname } from '@/i18n/routing';
import React from 'react'

const Change = ({locale}:{locale:string}) => {
    const currentPathname = usePathname();
    console.log('sadasd',currentPathname)
  return (
    <div>
            {locale==='ar'? <Link href={currentPathname} locale="en">Switch to English</Link>: <Link href={currentPathname} locale="ar">Switch to Arabic</Link>}

    </div>
  )
}

export default Change