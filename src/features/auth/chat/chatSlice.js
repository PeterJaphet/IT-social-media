import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import constants from '../../../hooks/constant'


const API_URL = constants.API_URL;

const initialState = {
  chats: [],
  messages: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};


//get users chat
async function friends() {
    const response = await axios.get(
      `${API_URL}/user/getAll/0/100`
    );
    console.log(response.data);
    return response.data;
  }
  
  export const getFriends = createAsyncThunk(
    "friends/getFriends",
    async (_, thunkAPI) => {
      console.log(thunkAPI.getState());
      try {
        return await friends();
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
  