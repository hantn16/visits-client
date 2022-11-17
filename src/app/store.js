import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import eventReducer from '../features/event/eventSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    event: eventReducer,
  },
});
