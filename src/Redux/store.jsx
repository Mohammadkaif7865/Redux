import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter';
import namesSave from './names';
import dummy from './dummy';
import final from './final';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    names: namesSave,
    dummyText: dummy,
    finalSentence: final
  },
})
