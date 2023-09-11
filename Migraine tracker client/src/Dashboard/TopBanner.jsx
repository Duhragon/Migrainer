import { useDispatch, useSelector } from "react-redux";
import { user } from "../../assets/data";
import { Link } from "react-router-dom";
import { logout } from "../Redux/userSlice";

function TopBanner() {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  console.log(user);

  return (
    <div className="w-full p-3 bg-bg-secondary border-b-4 border-links-hover">
      <div className="flex justify-between">
        <div>
          <h1>
            <Link to="/" className=" text-2xl font-semibold cursor-pointer hover:underline">
              Migrainer
            </Link>
          </h1>
          <span className="text-text-light text-xs md:text-base italic self-start">your migraine assistant...</span>
        </div>
        <div className="flex h-full items-center gap-2">
          <div className="flex flex-col items-end">
            <h2 className="font-bold md:text-lg">
              <Link to="/edit-profile" className="hover:underline">
                Hey {user.firstName}
              </Link>
            </h2>
            <button
              onClick={() => dispatch(logout())}
              to="/edit-profile"
              className="button-dark"
              // className="text-xs md:text-sm text-text-light hover:text-text-primary transition-all"
            >
              Logout
            </button>
          </div>
          <img src={user.profileUrl} className=" h-14" />
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
