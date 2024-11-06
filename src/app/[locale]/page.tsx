import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import {setRequestLocale} from 'next-intl/server';


export default function HomePage({params:{locale}}:{params:{locale:string}}) {
  setRequestLocale(locale);
  const t = useTranslations('common');
  return (
    <div>
      <h1 className='bg-black'>{t('Profile')}</h1>
      <Link href="/about">{t('about')}</Link>
     
    </div>
  );
}