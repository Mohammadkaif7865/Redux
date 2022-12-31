import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter';
import namesSave from './names';
import dummy from './dummy';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    names: namesSave,
    dummyText: dummy
  },
})
