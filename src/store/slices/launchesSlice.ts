import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ILaunch } from '../../types';

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

export const launchesSlice = createSlice({
  name: 'launches',
  initialState,
  reducers: {
    setSelectedLaunch: (state, action: PayloadAction<ILaunch>) => {
      state.selectedLaunch = action.payload;
    }
  }
});

export const { setSelectedLaunch } = launchesSlice.actions;

export default launchesSlice.reducer;
