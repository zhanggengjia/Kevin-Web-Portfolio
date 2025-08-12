import { createSlice } from '@reduxjs/toolkit';

const themes = {
  light: 'nord',
  dark: 'dark',
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.light;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const isDarkTheme = (theme) => {
  const darkThemes = ['night', 'dark', 'black', 'dracula', 'luxury'];
  return darkThemes.includes(theme);
};

const theme = getThemeFromLocalStorage();

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null;
};

const initialState = {
  user: getUserFromLocalStorage(),
  theme,
  isDark: isDarkTheme(theme),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const { dark, light } = themes;
      state.theme = state.theme === dark ? light : dark;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
      state.isDark = isDarkTheme(state.theme);
      // console.log('isDark', state.isDark);
    },
  },
});

export const { toggleTheme } = userSlice.actions;

export default userSlice.reducer;
