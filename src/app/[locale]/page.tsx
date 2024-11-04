
import initTranslations from '../i18n';
export default async function Home({ params: { locale } }:{params: { locale:string }}) {
  const { t } = await initTranslations(locale, ['common']);

  return (
    <div>
      <h1>{t('welcome')}</h1>
      
    </div>   
  );
}
