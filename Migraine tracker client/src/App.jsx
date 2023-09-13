import { Outlet, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import EpisodeForm from "./Pages/EpisodeForm";
import EpisodeDetails from "./Pages/EpisodeDetails";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/ResetPassword";
import { useSelector } from "react-redux";
import { getUser } from "./Redux/userSlice";
import TopBanner from "./Dashboard/TopBanner";
import EditProfile from "./Pages/EditProfile";
import "./CustomCalendar.css";
import { useEffect, useState } from "react";

function Layout() {
  const [contentHeight, setContentHeight] = useState(window.innerHeight);

  useEffect(() => {
    // Function to update the content height when the window is resized
    const updateContentHeight = () => {
      setContentHeight(window.innerHeight);
    };

    // Attach an event listener for window resize
    window.addEventListener("resize", updateContentHeight);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateContentHeight);
    };
  }, []);

  const user = useSelector(getUser);
  const location = useLocation();

  return (
    <>
      {user.user?.token ? (
        <div className="h-screen flex flex-col" style={{ height: `${contentHeight}px` }}>
          <TopBanner />
          <main className="overflow-y-auto overflow-x-hidden">
            <Outlet />
          </main>
          {/* <Footer /> */}
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
        <Route path="/episode/:episodeId" element={<EpisodeDetails />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Route>
      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}
export default App;
