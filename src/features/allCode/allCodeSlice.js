import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllCodes = createAsyncThunk('allCode/getAllCodes', async () => {
  // routeParams = routeParams || getState().allCodesApp.allCodes.routeParams;
  const response = await axios.get('http://localhost:3000/allCodes');
  const data = await response.data;
  console.log(data);

  return { data };
});

export const addAllCode = createAsyncThunk(
  'allCodesApp/allCodes/addAllCode',
  async (allCode, { dispatch, getState }) => {
    const response = await axios.post('/api/allCodes-app/add-allCode', {
      allCode,
    });
    const data = await response.data;

    dispatch(getAllCodes());

    return data;
  }
);

export const updateAllCode = createAsyncThunk(
  'allCodesApp/allCodes/updateAllCode',
  async (allCode, { dispatch, getState }) => {
    const response = await axios.post('/api/allCodes-app/update-allCode', {
      allCode,
    });
    const data = await response.data;

    dispatch(getAllCodes());

    return data;
  }
);

export const removeAllCode = createAsyncThunk(
  'allCodesApp/allCodes/removeAllCode',
  async (allCodeId, { dispatch, getState }) => {
    await axios.post('/api/allCodes-app/remove-allCode', { allCodeId });

    return allCodeId;
  }
);

const allCodesAdapter = createEntityAdapter({});
export const { selectAll: selectAllCodes, selectById: selectAllCodesById } =
  allCodesAdapter.getSelectors((state) => state.allCode);
const allCodeSlice = createSlice({
  name: 'allCodes',
  initialState: allCodesAdapter.getInitialState({
    allCodeDetail: {
      type: 'new',
      data: null,
    },
  }),
  reducers: {
    allCodeAdded(state, action) {
      state.push({
        id: action.payload.id,
        key: action.payload.key,
        value: action.payload.value,
        type: action.payload.type,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCodes.fulfilled, (state, action) => {
      console.log(state);
      const { data } = action.payload;
      allCodesAdapter.setAll(state, data);
    });
  },
});
export const { allCodeAdded } = allCodeSlice.actions;
export default allCodeSlice.reducer;
