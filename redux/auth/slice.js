import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isLoading: false,
  isError: false,
  isAuth: false,
  user: {},
};
