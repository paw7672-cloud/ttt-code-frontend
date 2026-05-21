import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";

// GET EXAMS
export const fetchExams = createAsyncThunk(
  "exam/fetch",
  async (_, thunkAPI) => {

    try {

      const res = await axiosInstance.get("/exams");

      return res.data;

    } catch (err) {

      return thunkAPI.rejectWithValue(err.message);

    }

  }
);

// CREATE EXAM
export const createExam = createAsyncThunk(
  "exam/create",
  async (examData, thunkAPI) => {

    try {

      const res = await axiosInstance.post(
        "/exams",
        examData
      );

      return res.data;

    } catch (err) {

      return thunkAPI.rejectWithValue(
        err.response?.data?.message
      );

    }

  }
);