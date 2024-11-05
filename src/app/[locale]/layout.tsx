import "./globals.css";
import Provider from '@/utils/Providers';
import '../i18n'; 
import MainLayout from "@/components/layout/MainLayout";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
export const metadata = {
  title: 'Your App Title',
  description: 'Your app description',
};
 async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html>
    
      <body
      >
 <NextIntlClientProvider messages={messages}>
      <Provider>
                <MainLayout>
                  {children}
                </MainLayout>
                
              </Provider>
 </NextIntlClientProvider>
        
       
       
      </body>
     
    </html>
  );
}
export default RootLayout;