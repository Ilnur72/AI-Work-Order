import { createSlice } from "@reduxjs/toolkit";

const orderValueSlice = createSlice({
  name: "orderValueSlice",
  initialState: {
      category: 0,
      city: null,
      colorNumber: 0,
      companyId: 0,
      count: 0,
      glassDouble: null,
      glassNumber: 0,
      height: 0,
      imageId: 0,
      region: "string",
      responseToCompany: null,
      ruchkaTypeNum: null,
      shelfSize: 0,
      width: 0,
    },
  
  reducers: {
    orderValue: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { orderValue } = orderValueSlice.actions;
export default orderValueSlice.reducer;
