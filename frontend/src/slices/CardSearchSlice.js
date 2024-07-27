import { createSlice } from "@reduxjs/toolkit";
import { setItemsInLocalStorage } from "../utils/localStorage";

const initialState = {
  input: "",
  data: [
    {
      title: "",
      content: "",
    },
  ],
};

export const CardSearchSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
    setData: (state, action) => {
      state.data = [...state.data, ...action.payload];
      setItemsInLocalStorage(state.data)
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInput, setData } = CardSearchSlice.actions;

export default CardSearchSlice.reducer;
