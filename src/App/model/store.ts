import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { tmdbApi } from '@/features/api/tmdbApi.ts';
import { appReducer, appSlice } from '@/App/model/appSlice.ts';

export const store = configureStore({
  reducer: {
    [appSlice.name]: appReducer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(tmdbApi.middleware),
});

setupListeners(store.dispatch);
