import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import eventReducer from '../features/event/eventSlice';
import allCodeReducer from '../features/allCode/allCodeSlice';
// import visitReducer from '../features/visit/visitSlice';
// import relationshipReducer from '../features/relationship/relationshipSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    event: eventReducer,
    allCode: allCodeReducer,
    // visit: visitReducer,
    // relationship: relationshipReducer,
  },
});
