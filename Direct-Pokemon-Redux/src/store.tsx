import {
  createSlice,
  configureStore,
  type PayloadAction,
} from "@reduxjs/toolkit";

export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "foo",
  },
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {},
  },
});

export const { setSearch } = searchSlice.actions;

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const selectSearch = (state: RootState) => state.search.search;
