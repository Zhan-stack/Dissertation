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
                        imageUrl: 'image1.png',
                        button: {
                            id: "1",
                            name: "Select",
                            correct: false
                        }
                    },
                    {
                        imageUrl: 'image2.png',
                        button: {
                            id: "2",
                            name: "Select",
                            correct: false
                        }
                    },
                    {
                        imageUrl: 'image3.png',
                        button: {
                            id: "3",
                            name: "Select",
                            correct: true
                        }
                    },
                ]
            },
            {
                columnName: "columns2",
                disabled: false,
                values: [
                    {
                        imageUrl: 'group4.png',
                        button: {
                            id: "4",
                            name: "Select",
                            correct: true
                        }
                    },
                    {
                        imageUrl: 'group5.png',
                        button: {
                            id: "5",
                            name: "Select",
                            correct: false
                        }
                    },
                    {
                        imageUrl: 'group3.png',
                        button: {
                            id: "6",
                            name: "Select",
                            correct: false
                        }
                    },
                ]
            },
            {
                columnName: "columns3",
                disabled: false,
                values: [
                    {
                        imageUrl: 'group9.png',
                        button: {
                            id: "7",
                            name: "Select",
                            correct: false
                        }
                    },
                    {
                        imageUrl: 'group6.png',
                        button: {
                            id: "8",
                            name: "Select",
                            correct: false
                        }
                    },
                    {
                        imageUrl: 'group8.png',
                        button: {
                            id: "9",
                            name: "Select",
                            correct: true
                        }
                    },
                ]
            },
            {
                columnName: "columns4",
                disabled: false,
                values: [
                    {
                        imageUrl: 'img3.png',
                        button: {
                            id: "10",
                            name: "Select",
                            correct: true
                        }
                    },
                    {
                        imageUrl: 'img1.png',
                        button: {
                            id: "11",
                            name: "Select",
                            correct: false
                        }
                    },
                    {
                        imageUrl: 'img2.png',
                        button: {
                            id: "12",
                            name: "Select",
                            correct: false
                        }
                    },
                ]
            },
        ],
        payload: {},
        startTime: Date.now(),
        correct: []
    },
    reducers: {
        addIdToItems: (state, action) => {
            state.itemIdsSelected.push(action.payload)
        },
        buttonReduxClicked: (state, action) => {
            console.log(action.payload)
            const event = action.payload.eventId
            const columnName = action.payload.columnName
            const correct = action.payload.correct
            state.correct.push(correct)
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
export const selectCorrect = (state) => state.AppReducer.correct


export const {
    addIdToItems,
    buttonReduxClicked,
    setPayload,
    buttonNoClicked
} = AppSlice.actions


export default AppSlice.reducer