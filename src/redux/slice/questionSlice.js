// =========================================
// FILE: redux/slice/questionSlice.js
// =========================================

import { createSlice } from "@reduxjs/toolkit";

import { fetchQuestions } from "../thunks/questionThunk";

const questionSlice = createSlice({

  name: "question",

  initialState: {

    questions: [],
    loading: false,

  },

  reducers: {},

  extraReducers: (builder) => {

    builder

      .addCase(fetchQuestions.pending, (state) => {

        state.loading = true;

      })

      .addCase(fetchQuestions.fulfilled, (state, action) => {

        state.loading = false;

        state.questions = action.payload;

      });

  },

});

export default questionSlice.reducer;