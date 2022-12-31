import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter';
import namesSave from './names';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    names: namesSave
  },
})
