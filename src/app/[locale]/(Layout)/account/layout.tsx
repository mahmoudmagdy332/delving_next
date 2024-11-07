
import AccountSide from "@/components/Account/AccountSide"; 
import { useProfile } from "@/utils/hooks/useAuth"; 
import { ReactNode } from "react";

const AccountLayout = ({children}:{children:ReactNode}) => {
  useProfile();

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
};

export default AccountLayout;
