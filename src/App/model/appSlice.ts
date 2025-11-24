import { createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';
import type { RequestStatus } from '@/features/api/tmdbApi.types.ts';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    status: 'idle' as RequestStatus,
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
