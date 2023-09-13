import { useDispatch, useSelector } from "react-redux";
import { user } from "../../assets/data";
import { Link } from "react-router-dom";
import { logout } from "../Redux/userSlice";
import { LuLogOut } from "react-icons/lu";

function TopBanner() {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  console.log(user);

  return (
    <div className="w-full px-3 py-2 bg-bg-third border-b-2 border-bg-secondary">
      <div className="flex justify-between">
        <div className="flex items-center justify-center ">
          <h1>
            <Link to="/" className="md:text-2xl text-xl font-semibold cursor-pointer hover:underline">
              Migrainer
            </Link>
          </h1>
        </div>
        <div className="flex h-full items-center gap-2">
          <div className="flex items-center justify-center">
            <h2 className="md:text-lg">
              <Link to="/edit-profile" className="hover:underline">
                Hey {user.firstName}
              </Link>
            </h2>
            <button onClick={() => dispatch(logout())} to="/edit-profile" className="button-dark text-sm py-2 ml-2">
              <LuLogOut />
            </button>
          </div>
          <img src={user.profileUrl} className=" h-14" />
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
