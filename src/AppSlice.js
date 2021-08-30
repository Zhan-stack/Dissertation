import { createSlice } from '@reduxjs/toolkit';

const AppSlice = createSlice({
    name: "AppReducer",
    initialState: {
        itemIdsSelected: [],
        itemIdsDeselected: [],
        columns: [
            {
                columnName: "columns1",
                disabled: false,
                values: [
                    {
                        imageUrl: 'logo192.png',
                        button: {
                            id: "1",
                            name: "Select",
                        }
                    },
                    {
                        imageUrl: 'logo192.png',
                        button: {
                            id: "2",
                            name: "Select",
                        }
                    },
                    {
                        imageUrl: 'logo192.png',
                        button: {
                            id: "3",
                            name: "Select",
                        }
                    },
                ]
            },
            {
                columnName: "columns2",
                disabled: false,
                values: [
                    {
                        imageUrl: 'logo192.png',
                        button: {
                            id: "logo1.png",
                            name: "Select",
                        }
                    },
                    {
                        imageUrl: 'logo192.png',
                        button: {
                            id: "logo2.png",
                            name: "Select",
                        }
                    },
                    {
                        imageUrl: 'logo192.png',
                        button: {
                            id: "logo3.png",
                            name: "Select",
                        }
                    },
                ]
            },
        ],
        payload: {}
    },
    reducers: {
        addIdToItems: (state, action) => {
            state.itemIdsSelected.push(action.payload)
        },
        buttonReduxClicked: (state, action) => {
            console.log(action.payload)
            const event = action.payload.eventId
            const columnName = action.payload.columnName
            state.itemIdsSelected.push(event)
            const index = state.columns.findIndex((column) => column.columnName === columnName)
            state.columns[index].disabled = true
        },
        buttonNoClicked: (state, action) => {
            console.log(action.payload)
            const event = action.payload.eventId
            state.itemIdsDeselected.push(event)
        },
        setPayload: (state, action) => {
            state.payload = action.payload
        }
    }
})

export const selectItemIdsSelected = (state) => state.AppReducer.itemIdsSelected
export const selectEnableDisableColumns = (state) => state.AppReducer.buttonColumnsDisabled
export const selectColumns = (state) => state.AppReducer.columns
export const selectPayload = (state) => state.AppReducer.payload


export const {
    addIdToItems,
    buttonReduxClicked,
    setPayload,
    buttonNoClicked
} = AppSlice.actions


export default AppSlice.reducer