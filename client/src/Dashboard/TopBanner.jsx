import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../Redux/userSlice";
import { LuLogOut } from "react-icons/lu";
import { forwardRef } from "react";

const TopBanner = forwardRef((props, ref) => {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div ref={ref} className="w-full px-3 py-2 bg-bg-third border-b-2 border-bg-secondary">
      <div className="flex justify-between">
        <div className="flex items-center justify-center ">
          <h1 className="">
            <Link to="/" className="md:text-2xl pl-4 text-xl font-semibold cursor-pointer hover:underline">
              Migrainer.
            </Link>
          </h1>
        </div>
        <div className="flex h-full items-center gap-2">
          <div className="flex items-center justify-center">
            <h2 className="invisible sm:visible md:text-lg">Hey {user.firstName}</h2>
            <button onClick={() => dispatch(logout())} to="/edit-profile" className="button-dark text-sm py-2 ml-2">
              <LuLogOut />
            </button>
          </div>
          <img src={user.avatar} className="h-12 p-1 rounded hover:bg-bg-secondary" />
        </div>
      </div>
    </div>
  );
});

TopBanner.displayName = "TopBanner";

export default TopBanner;
