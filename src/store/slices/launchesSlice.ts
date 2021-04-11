import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getLaunchesFromAPIInterval } from '../../services/launches';
import { ILaunch } from '../../types';
import { RootState } from '../index';

export interface ILaunchesState {
  launches: ILaunch[] | null;
  selectedLaunch: ILaunch | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ILaunchesState = {
  launches: null,
  selectedLaunch: null,
  status: 'idle'
};

export const fetchLaunches = createAsyncThunk<ILaunch[], Date>(
  'launches/fetchLaunches',
  async (date) => {
    const response = await getLaunchesFromAPIInterval(date);
    return response.data.results;
  }
);

export const launchesSlice = createSlice({
  name: 'launches',
  initialState,
  reducers: {
    setSelectedLaunch: (state, action: PayloadAction<ILaunch>) => {
      state.selectedLaunch = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLaunches.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLaunches.fulfilled, (state, action) => {
        state.launches = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchLaunches.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export const { setSelectedLaunch } = launchesSlice.actions;

export const launchesSelector = (state: RootState): ILaunchesState => state.launches;

export default launchesSlice.reducer;
