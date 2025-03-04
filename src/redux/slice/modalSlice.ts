import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  openModal: string | null;
  modalProps?: any;
}

const initialState: ModalState = {
  openModal: null,
  modalProps: {},
};
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      return {
        ...state,
        openModal: action.payload.name,
        modalProps: action.payload.props || {},
      };
    },
    closeModal: () => {
      return { openModal: null, modalProps: {} };
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
