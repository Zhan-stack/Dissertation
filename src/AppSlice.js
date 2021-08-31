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
                            id: "4",
                            name: "Select",
                        }
                    },
                    {
                        imageUrl: 'logo192.png',
                        button: {
                            id: "5",
                            name: "Select",
                        }
                    },
                    {
                        imageUrl: 'logo192.png',
                        button: {
                            id: "6",
                            name: "Select",
                        }
                    },
                ]
            },
            {
                columnName: "columns3",
                disabled: false,
                values: [
                    {
                        imageUrl: 'logo192.png',
                        button: {
                            id: "7",
                            name: "Select",
                        }
                    },
                    {
                        imageUrl: 'logo192.png',
                        button: {
                            id: "8",
                            name: "Select",
                        }
                    },
                    {
                        imageUrl: 'logo192.png',
                        button: {
                            id: "9",
                            name: "Select",
                        }
                    },
                ]
            },
            {
                columnName: "columns4",
                disabled: false,
                values: [
                    {
                        imageUrl: 'logo192.png',
                        button: {
                            id: "10",
                            name: "Select",
                        }
                    },
                    {
                        imageUrl: 'logo192.png',
                        button: {
                            id: "11",
                            name: "Select",
                        }
                    },
                    {
                        imageUrl: 'logo192.png',
                        button: {
                            id: "12",
                            name: "Select",
                        }
                    },
                ]
            },
        ],
        payload: {},
        startTime: Date.now()
    },
    reducers: {
        addIdToItems: (state, action) => {
            state.itemIdsSelected.push(action.payload)
        },
        buttonReduxClicked: (state, action) => {
            console.log(action.payload)
            const event = action.payload.eventId
            const columnName = action.payload.columnName
            state.itemIdsSelected.push({ id: event, columnName: columnName })
            const index = state.columns.findIndex((column) => column.columnName === columnName)
            state.columns[index].disabled = true
        },
        buttonNoClicked: (state, action) => {
            console.log(action.payload)
            const event = action.payload.eventId
            const columnName = action.payload.columnName
            state.itemIdsDeselected.push({ id: event, columnName: columnName })
        },
        setPayload: (state, action) => {
            state.payload = action.payload
        }
    }
})

export const selectItemIdsSelected = (state) => state.AppReducer.itemIdsSelected
export const selectItemIdsDeselected = (state) => state.AppReducer.itemIdsDeselected
export const selectEnableDisableColumns = (state) => state.AppReducer.buttonColumnsDisabled
export const selectColumns = (state) => state.AppReducer.columns
export const selectPayload = (state) => state.AppReducer.payload
export const selectStartTime = (state) => state.AppReducer.startTime


export const {
    addIdToItems,
    buttonReduxClicked,
    setPayload,
    buttonNoClicked
} = AppSlice.actions


export default AppSlice.reducer