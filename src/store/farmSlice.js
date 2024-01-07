import { createSlice } from "@reduxjs/toolkit";

export const farmSlice = createSlice({
    name: "farm",
    initialState: {
        "Быки": {
            "Кол-во быков на ферме": 18
        },
        "Коровы": {
            "Кол-во коров на ферме": 18
        }
    },
    reducers: {
        addBull: (state) => {
            state['Быки']['Кол-во быков на ферме'] += 1;
        },
        minusBull: (state) => {
            state['Быки']['Кол-во быков на ферме'] -= 1;
        },
        addCow: (state) => {
            state['Коровы']['Кол-во коров на ферме'] += 1;
        },
        minusCow: (state) => {
            state['Коровы']['Кол-во коров на ферме'] -= 1;
        },
    }
})

export const { addBull, minusBull, addCow, minusCow } = farmSlice.actions;
export default farmSlice.reducer;