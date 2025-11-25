import { createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';
import type { LoadingState } from '@/shared';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    status: 'idle' as LoadingState,
    error: null as null | string,
  },
  extraReducers: builder => {
    builder
      .addMatcher(isPending, state => {
        state.status = 'loading';
      })
      .addMatcher(isFulfilled, state => {
        state.status = 'succeeded';
      })
      .addMatcher(isRejected, state => {
        state.status = 'failed';
      });
  },
  reducers: {},
  selectors: {
    selectAppStatus: state => state.status,
  },
});

export const { selectAppStatus } = appSlice.selectors;
export const appReducer = appSlice.reducer;
