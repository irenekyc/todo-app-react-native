import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeType } from "../../typings/Theme";
import { THEME_DEFAULT } from "../../constans/theme";

export interface ThemeState {
  theme: ThemeType;
  firstLoaded: boolean;
}

const initialState: ThemeState = {
  theme: THEME_DEFAULT,
  firstLoaded: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
      state.firstLoaded = true;
    },
  },
});

export default themeSlice.reducer;
