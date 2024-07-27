import { createSlice } from "@reduxjs/toolkit";
import {
  getItemsFromLocalStorage,
  setItemsInLocalStorage,
} from "../utils/localStorage";
import moment from "moment";
const initialState = {
  searchInput: "",
  data: getItemsFromLocalStorage(),
  cardDataOnClick: {}, // view and edit both
};

export const CardSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setDelete: (state, { payload }) => {
      console.log('delete payload',payload);
      state.data = state.data.filter((note) => note.id != payload);
      setItemsInLocalStorage(state.data);
      window.location.reload();
    },
    setAdd: (state, { payload }) => {
      let ID = state.data.length + 1;
      state.data = [
        ...state.data,
        { id: ID, date: moment().format("MMM Do YY"), ...payload },
      ];
      setItemsInLocalStorage(state.data);
      window.location.reload();
    },
    getCardDataOnClick: (state, { payload }) => {
      state.cardDataOnClick = state.data.filter((notes) => notes.id === payload)[0];
    },
    setEdit: (state, { payload }) => {
      const { id, inputData } = payload;
      state.data = state.data.map((notes) => {
        if (notes.id == id) {
          notes.title = inputData.title;
          notes.content = inputData.content;
          notes.date = moment().format("MMM Do YY");
        }
        return notes;
      });
      setItemsInLocalStorage(state.data);
      window.location.reload();
      console.log('setEdit',state.data);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchInput, setAdd, getCardDataOnClick, setEdit,setDelete } = CardSlice.actions;

export default CardSlice.reducer;
