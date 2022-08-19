import { configureStore } from '@reduxjs/toolkit';
import { beersReducer } from '../features/beers/beersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';

export const store = configureStore({
  reducer: {
    beers: beersReducer,
    promotions: promotionsReducer
  },
});
