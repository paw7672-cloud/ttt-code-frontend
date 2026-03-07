import { createSlice } from "@reduxjs/toolkit";

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
}

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: savedTheme === "dark",
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;

      if (state.darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;