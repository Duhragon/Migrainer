import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  episode: [],
  isLoadingEpisodes: false,
};

const episodeSlice = createSlice({
  name: "episode",
  initialState,
  reducers: {
    setEpisode(state, action) {
      state.episode = action.payload;
    },
    setIsLoadingEpisode(state, action) {
      state.isLoadingEpisodes = action.payload;
    },
  },
});

export const getEpisodeArr = state => state.episode;
export const { setEpisode, setIsLoadingEpisode } = episodeSlice.actions;
export default episodeSlice.reducer;
