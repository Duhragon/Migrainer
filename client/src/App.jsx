import { Outlet, Route, Routes, Navigate, useLocation, useNavigation } from "react-router-dom";
import Home from "./Pages/Home";
import EpisodeForm from "./Pages/EpisodeForm";
import EpisodeDetails from "../src/Pages/EpisodeDetails";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/ResetPassword";
import { useSelector } from "react-redux";
import { getUser } from "./Redux/userSlice";
import TopBanner from "./Dashboard/TopBanner";
import { useRef } from "react";

function Layout() {
  const user = useSelector(getUser);
  const location = useLocation();
  const topBannerRef = useRef(null);

  return (
    <>
      {user.user?.token ? (
        <div className="flex flex-col h-[100vh]">
          <TopBanner ref={topBannerRef} />
          <main className="overflow-y-auto overflow-x-hidden h-[100%]">
            <Outlet context={[topBannerRef]} />
          </main>
        </div>
      ) : (
        <Navigate to={"/login"} state={{ from: location }} replace />
      )}
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/episode/new" element={<EpisodeForm />} />
        <Route path="/episode/:episodeId?" element={<EpisodeDetails />} />
      </Route>
      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}
export default App;
