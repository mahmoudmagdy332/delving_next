import "./globals.css";
import LanguageChanger from '@/components/LanguageChanger';
import Provider from '@/utils/Providers';

export const metadata = {
  title: 'Your App Title',
  description: 'Your app description',
};
 function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
    
      <body
      >
        <LanguageChanger/>
        <Provider>
           {children}
        </Provider>
       
       
      </body>
     
    </html>
  );
}
export default RootLayout;