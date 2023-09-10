import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  episode: [],
};

const episodeSlice = createSlice({
  name: "episode",
  initialState,
  reducers: {
    addEpisode(state, action) {
      state.episode = action.payload;
    },
    deleteEpisode(state, action) {
      state.episode = state.episode.filter(item => item.id === action.payload);
    },
    clear(state) {
      state.episode = [];
    },
  },
});

export const { addEpisode, deleteEpisode, clear } = episodeSlice.actions;
export default episodeSlice.reducer;
