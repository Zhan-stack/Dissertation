import { configureStore } from '@reduxjs/toolkit';
import AppReducer from '../AppSlice';
import DissDialogReducer from '../features/dissdialog/DissDIalogSlice'

export const store = configureStore({
  reducer: {
    AppReducer: AppReducer,
    DissDialogReducer: DissDialogReducer
  },
});
