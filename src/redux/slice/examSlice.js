import { createSlice } from "@reduxjs/toolkit";
import { fetchExams , createExam} from "../thunks/examThunk";

const examSlice = createSlice({

  name: "exam",

  initialState: {
    exams: [],
    loading: false,
  },

  extraReducers: (builder) => {

    builder

      .addCase(fetchExams.pending, (state) => {

        state.loading = true;

      })

      .addCase(fetchExams.fulfilled, (state, action) => {

        state.loading = false;
        state.exams = action.payload;

      })
      .addCase(createExam.fulfilled, (state, action) => {

  state.exams.push(action.payload);

});
      

  },

  
});

export default examSlice.reducer;