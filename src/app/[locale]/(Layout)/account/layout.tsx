import AccountSide from "@/components/Account/AccountSide";




 async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="my-4 w-10/12 mx-auto grid  grid-cols-4">
    <div className="col-span-3">
      {children}
    </div>
    <div>
      <AccountSide />
    </div>
  </div>
  );
}
export default RootLayout;