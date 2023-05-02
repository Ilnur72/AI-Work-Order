import { createSlice } from "@reduxjs/toolkit";

const dataValueSlice = createSlice({
  name: "dataValueSlice",
  initialState: {},
  
  reducers: {
    dataValue: (state, action) => {
      return {...action.payload };
    },
  },
});

export const { dataValue } = dataValueSlice.actions;
export default dataValueSlice.reducer;
