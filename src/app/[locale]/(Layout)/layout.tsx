

import initTranslations from "@/app/i18n";
import Layout from "@/components/layout/Index";
import TranslationsProvider from "@/components/TranslationsProvider";
const i18nNamespaces = ['common'];
 async function RootLayout({
  children,
  params:{ locale}
}: Readonly<{
  children: React.ReactNode;
  params: { locale:string };
}>) {
  const {  resources } = await initTranslations(locale, i18nNamespaces);
      
  return (
    <html>
    
      <body
      >
          
            <TranslationsProvider 
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
        <Layout>
             {children}
          </Layout>  
        </TranslationsProvider>   
       
      </body>
     
    </html>
  );
}
export default RootLayout;