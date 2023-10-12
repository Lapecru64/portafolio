import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  darkMode: false, // Agrega un estado para el modo oscuro
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode; // Cambia el estado del modo oscuro
    },
  },
});

export const { increment, decrement, toggleDarkMode } = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
