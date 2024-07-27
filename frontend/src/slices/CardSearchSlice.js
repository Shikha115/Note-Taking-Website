import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
};

export const CardSearchSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setInput: (state, val) => {
        console.log(state,val,'cardserach');
      state.input = val;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInput } = CardSearchSlice.actions;

export default CardSearchSlice.reducer;
