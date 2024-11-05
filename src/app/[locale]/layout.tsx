import "./globals.css";
import Provider from '@/utils/Providers';
import '../i18n'; 
import MainLayout from "@/components/layout/MainLayout";
export const metadata = {
  title: 'Your App Title',
  description: 'Your app description',
};
 async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

      
  return (
    <html>
    
      <body
      >

        <Provider>
          <MainLayout>
             {children}
          </MainLayout>
           
        </Provider>
       
       
      </body>
     
    </html>
  );
}
export default RootLayout;