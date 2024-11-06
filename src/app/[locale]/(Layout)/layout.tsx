


import Layout from "@/components/layout/Index";

 async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>

      <body
      >
        <Layout >
             {children}
          </Layout>       
      </body>
     
    </html>
  );
}
export default RootLayout;