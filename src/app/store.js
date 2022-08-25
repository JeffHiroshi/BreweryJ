import { configureStore } from '@reduxjs/toolkit';
import { beersReducer } from '../features/beers/beersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    beers: beersReducer,
    promotions: promotionsReducer,
    user: userReducer
  },
});
