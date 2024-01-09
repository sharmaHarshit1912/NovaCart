import { createSlice } from "@reduxjs/toolkit";
import { createElement } from "react";
import { storeData } from "../../assets/data/dummyData";
export const productSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts: JSON.parse(
      sessionStorage.getItem("filterData") || storeData
    ),
  },
  reducer: {
    filteredProducts(state, action) {
      try {
        const filterAccToType = storeData.filter(
          (prod) => prod.type === action.payload
        );

        state.filteredProducts = filterAccToType;
        const saveState = json.stringify(filterAccToType);
        sessionStorage.setItem("filteredData", saveState);
      } catch (error) {
        return error;
      }
    },
  },
});

export const { filteredProducts } = productSlice.actions;
export default productSlice.reducer;
