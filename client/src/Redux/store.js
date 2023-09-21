import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import episodeSlice from "./episodeSice";

const store = configureStore({
  reducer: {
    user: userSlice,
    episode: episodeSlice,
  },
});

export default store;
