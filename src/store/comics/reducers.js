import { createReducer } from "@reduxjs/toolkit";
import comicsActions from "./actions";

const { getComics } = comicsActions;

const initialState = { comics: [], inputText: "", category: [] ,page:1};

const comicsReducers = createReducer(initialState, (builder) => {
  builder //contruye casos de lgca de reduccion
    .addCase(getComics.fulfilled, (state, action) => {
      let newState = {
        comics: action.payload.response.comics,
        text: action.payload.response.text,
        category: action.payload.response.category,
        page: action.payload.response.page
      };
      return newState;
    });
  //addCase rejected..
});

export default comicsReducers;
