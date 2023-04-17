import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Entry {
  name: string;
  email: string;
  message: string;
}

interface EntriesState {
  entries: Entry[];
}

const initialState: EntriesState = {
  entries: [],
};

const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    addEntry(state, action: PayloadAction<Entry>) {
      state.entries.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    entries: entriesSlice.reducer,
  },
});

export const { addEntry } = entriesSlice.actions;
export const reducer = entriesSlice.reducer;
export default store;
