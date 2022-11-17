import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import axios from 'axios';

export const getEvents = createAsyncThunk(
  'eventsApp/events/getEvents',
  async (routeParams, { getState }) => {
    routeParams = routeParams || getState().eventsApp.events.routeParams;
    const response = await axios.get('/api/events-app/events', {
      params: routeParams,
    });
    const data = await response.data;

    return { data, routeParams };
  }
);

export const addEvent = createAsyncThunk(
  'eventsApp/events/addEvent',
  async (event, { dispatch, getState }) => {
    const response = await axios.post('/api/events-app/add-event', {
      event,
    });
    const data = await response.data;

    dispatch(getEvents());

    return data;
  }
);

export const updateEvent = createAsyncThunk(
  'eventsApp/events/updateEvent',
  async (event, { dispatch, getState }) => {
    const response = await axios.post('/api/events-app/update-event', {
      event,
    });
    const data = await response.data;

    dispatch(getEvents());

    return data;
  }
);

export const removeEvent = createAsyncThunk(
  'eventsApp/events/removeEvent',
  async (eventId, { dispatch, getState }) => {
    await axios.post('/api/events-app/remove-event', { eventId });

    return eventId;
  }
);

const eventSlice = createSlice({
  name: 'event',
  initialState: [],
  reducers: {
    eventAdded(state, action) {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
        description: action.payload.description,
        typeId: action.payload.typeId,
        completed: false,
      });
    },
  },
});
export const { eventAdded } = eventSlice.actions;
export default eventSlice.reducer;
