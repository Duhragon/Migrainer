import { Outlet, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import EpisodeForm from "./Pages/EpisodeForm";
import EpisodeDetails from "./Pages/EpisodeDetails";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/ResetPassword";
import { useSelector } from "react-redux";
import { getUser } from "./Redux/userSlice";

function Layout() {
  const user = useSelector(getUser);
  const location = useLocation();
  console.log(user);
  return user?.token ? <Outlet /> : <Navigate to={"/login"} state={{ from: location }} replace />;
}

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/episode/new" element={<EpisodeForm />} />
          <Route path="/episode/:episodeId" element={<EpisodeDetails />} />
        </Route>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}
export default App;
