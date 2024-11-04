import { Outlet } from "react-router-dom";
import AccountSide from "../Account/AccountSide";
import { useProfile } from "../../app/utils/hooks/useAuth";

const AccountLayout = () => {
  useProfile();

  return (
    <div className="my-4 w-10/12 mx-auto grid  grid-cols-4">
      <div className="col-span-3">
        <Outlet />
      </div>
      <div>
        <AccountSide />
      </div>
    </div>
  );
};

export default AccountLayout;
