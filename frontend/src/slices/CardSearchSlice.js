import { createSlice } from "@reduxjs/toolkit";
import {
  getItemsFromLocalStorage,
  setItemsInLocalStorage,
} from "../utils/localStorage";
import moment from "moment";
const initialState = {
  input: "",
  data: getItemsFromLocalStorage(),
  viewData: {},
};

export const CardSearchSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
    setData: (state, { payload }) => {
      let ID = state.data.length + 1;
      state.data = [
        ...state.data,
        { ...payload, id: ID, date: moment().format("MMM Do YY") },
      ];
      setItemsInLocalStorage(state.data);
      window.location.reload();
    },
    setView: (state, { payload }) => {
      state.viewData = state.data.filter((notes) => notes.id === payload)[0];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInput, setData, setView } = CardSearchSlice.actions;

export default CardSearchSlice.reducer;
