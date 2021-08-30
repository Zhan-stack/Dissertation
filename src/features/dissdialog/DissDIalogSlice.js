import { createSlice } from '@reduxjs/toolkit';

const DissDialogSlice = createSlice({
    name: "DissDialogReducer",
    initialState: {
        show: false
    },
    reducers: {
        setShow: (state, action) => {
            state.show = action.payload
        }
    }
})

export const selectShowDissDialog = (state) => state.DissDialogReducer.show

export const {
    setShow
} = DissDialogSlice.actions

export default DissDialogSlice.reducer