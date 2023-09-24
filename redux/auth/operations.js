import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/config";

export const registerUser = createAsyncThunk(
  "users/register",
  async ({ login, email, password }) => {
    try {
      await createUserWithEmailAndPassword(auth, login, email, password);

      // await updateProfile(auth.currentUser, { avatar });

      return auth.currentUser;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/login",
  async ({ email, password }) => {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return credentials.user;
    } catch (error) {
      throw error;
    }
  }
);

export const logout = createAsyncThunk("users/logout", async () => {
  try {
    await signOut(auth);
    return;
  } catch (error) {
    throw error;
  }
});
