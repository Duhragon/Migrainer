import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  episode: [],
  loading: true,
};

const episodeSlice = createSlice({
  name: "episode",
  initialState,
  reducers: {
    setEpisode(state, action) {
      state.episode = action.payload;
      // state.episode = [...state.episode, action.payload];
    },
    addEpisode(state, action) {
      state.episode = action.payload;
    },
    deleteEpisode(state, action) {
      state.episode = state.episode.filter(item => item.id === action.payload);
    },
    clear(state) {
      state.episode = [];
    },
    setIsLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const getEpisodeArr = state => state.episode;
export const { addEpisode, deleteEpisode, clear, setEpisode } = episodeSlice.actions;
export default episodeSlice.reducer;
