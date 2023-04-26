import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderNumberSort : 'asc',
    orderStatusSort : 'asc',
    orderDaySort : 'asc',
    estimateStartDateSort : 'asc'
};

// create a slice
export const taskSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        changeSortOrderNumber: (state, action) => {
            state.orderNumberSort = action.payload.status
        },
        changeSortOrderStatus: (state, action) => {
            state.orderStatusSort = action.payload.status
        },
        changeSortOrderDay: (state, action) => {
            state.orderDaySort = action.payload.status
        },
        changeSortEstimateStartDate: (state, action) => {
            state.estimateStartDateSort = action.payload.status
        }
    }
})
// export action addTask from taskSlice
export const {changeSortOrderNumber, changeSortOrderStatus, changeSortOrderDay, changeSortEstimateStartDate} = taskSlice.actions;
// export action get orderNumberSort
export const getOrderNumberSort =  (state) => state.order.orderNumberSort
// export action get orderStatusSort
export const getOrderStatusSort =  (state) => state.order.orderStatusSort
// export action get orderDaySort
export const getOrderDaySort =  (state) => state.order.orderDaySort
// export action get estimateStartDateSort
export const getEstimateStartDateSort =  (state) => state.order.estimateStartDateSort

export default taskSlice.reducer