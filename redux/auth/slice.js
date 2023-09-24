import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logout, registerUser } from "./operations";

const initialState = {
  token: null,
  isLoading: false,
  //   isError: false,
  isAuth: false,
  user: {
    id: null,
    login: "",
    email: "",
    avatar: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, pending)
      .addCase(registerUser.fulfilled, registerFulfilled)
      .addCase(registerUser.rejected, rejected)

      .addCase(loginUser.pending, pending)
      .addCase(loginUser.fulfilled, loginFulfilled)
      .addCase(loginUser.rejected, rejected)

      .addCase(logout.pending, pending)
      .addCase(logout.fulfilled, () => initialState);
  },
});

function pending(state) {
  state.isLoading = true;
}

function rejected(state, { error }) {
  state.isLoading = false;
  state.isAuth = false;
  console.log(error.message);
}

function registerFulfilled(state, { payload }) {
  state.isLoading = false;
  state.isAuth = true;
  state.login = payload.login;
  state.email = payload.email;
  state.avatar = payload.avatar;
}

function loginFulfilled(state, { payload }) {
  state.isLoading = false;
  state.isAuth = true;
  state.login = payload.login;
  state.email = payload.email;
  state.avatar = payload.avatar;
}
