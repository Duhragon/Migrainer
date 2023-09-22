import axios from "axios";
import { setEpisode, setIsLoadingEpisode } from "../Redux/episodeSice";

const API_URL = "http://localhost:8800";

export const API = axios.create({
  baseURL: API_URL,
  responseType: "json",
});

export const apiRequest = async ({ url, token, data, method }) => {
  const completeURL = `${API_URL}${url}`; // Construct the complete URL
  console.log("Complete URL:", completeURL); // Debug output
  try {
    const result = await API(url, {
      method: method || "GET",
      data: data,
      headers: {
        "content-type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    return result?.data;
  } catch (error) {
    console.log(error);
    const err = error.response.data;
    console.log(err);
    return { status: err.success, message: err.message };
  }
};

// export const fetchEpisodes = async (token, dispatch, uri, data) => {
//   try {
//     const res = await apiRequest({
//       url: uri || "/episodes",
//       token: token,
//       method: "POST",
//       data: data || {},
//     });
//     dispatch(setEpisode(res?.data));
//     return;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getEpisodes = () => async (dispatch, getState) => {
  const user = getState().user.user;

  try {
    dispatch(setIsLoadingEpisode(true));
    const response = await apiRequest({
      url: "/episodes/get-episodes", //api endpoint for fetching updated data (triggers on every render)
      method: "POST",
      token: user?.token,
    });

    dispatch(setEpisode(response.episodes)); //dispatch action from redux store
    dispatch(setIsLoadingEpisode(false));
  } catch (error) {
    console.error("Error fetching episodes:", error);
    dispatch(setIsLoadingEpisode(false));
  }
};

export const deleteEpisode = async (id, token) => {
  try {
    const res = await apiRequest({
      url: "/episodes/" + id,
      token: token,
      method: "DELETE",
    });
    return;
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfo = async (id, token) => {
  try {
    const uri = id === undefined ? "/users/get-user" : "/users/get-user" + id;
    const res = await apiRequest({
      url: uri,
      token: token,
      method: "POST",
    });

    if (res?.message === "Authentication failed") {
      localStorage.removeItem("user");
      window.alert("User session expired. Login again.");
      window.location.replace("/login");
    }
    return res?.user;
  } catch (error) {
    console.log(error);
  }
};
