
import initTranslations from '@/app/i18n';
import Hero from '@/components/about/Hero';
import ExampleClientComponent from '@/components/ExampleClientComponent'
import TranslationsProvider from '@/components/TranslationsProvider';
import { getAboutAPI } from '@/utils/api';
const i18nNamespaces = ['common'];
const about = async ({ params: { locale } }:{params: { locale:string }}) => {
  const {  resources } = await initTranslations(locale, i18nNamespaces);

    
      const {data} = await getAboutAPI();
 
      console.error(' data:', data);
      
  return (
      <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
        <ExampleClientComponent />
        <Hero About={data.About} />
        {/* <Benefits /> */}
    </TranslationsProvider>
    )
  }
  
  export default about