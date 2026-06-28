import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  projects: string[];
}

const initialState: FavoritesState = {
  projects: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.projects.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.projects = state.projects.filter((id) => id !== action.payload);
    },
  },
});
export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
