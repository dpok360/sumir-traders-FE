import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../slice/modalSlice';

const appStore = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export default appStore;
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
