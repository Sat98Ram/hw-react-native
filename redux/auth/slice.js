import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isLoading: false,
  //   isError: false,
  isAuth: false,
  user: {
    id: null,
    login: "",
    email: "",
    avatar: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers,
});
