import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Change from '@/components/Change';
import Provider from '@/utils/Providers';
import MainLayout from '@/components/layout/MainLayout';
import '@/app/globals.css'
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
        <Change locale={locale}/>
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