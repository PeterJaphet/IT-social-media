import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import constants from '../../../hooks/constant'

const API_URL = constants.API_URL;

const initialState = {
  users: [],
  tempUsers: [],
  followings: [],
  followers: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  isSuccessFollow: false,
  message: "",
};

//get users
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

//follow users
async function follow(fromId, toId) {
  const response = await axios.post(
    `${API_URL}/follow/followuser`,
    { fromuserid: fromId, touserid: toId }
  );

  return response.data;
}

export const followUser = createAsyncThunk(
  "friends/follow",
  async ({ fromId, toId }, thunkAPI) => {
    try {
      console.log(fromId, toId);
      return await follow(fromId, toId);
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

//get following
async function followings(id) {
  const response = await axios.get(
    `${API_URL}/follow/userfollowing/${id}`
  );

  return response.data;
}

export const userFollowing = createAsyncThunk(
  "friends/following",
  async (_, thunkAPI) => {
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      return await followings(user.message.data.user._id);
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

export const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    reset: (state) => {
      state.followings = null;
      state.isSuccessFollow = false;
    },
  },

  extraReducers: (builder) => {
    builder
      
      .addCase(getFriends.fulfilled, (state, action) => {
      //  const filtered = action.payload.message.data.filter(item=> !state.followings.followinglist.some(item1=>item1.userId===item._id))
        state.tempUsers =action.payload.message.data;
      })
      .addCase(userFollowing.fulfilled, (state, action) => {
        state.followings = action.payload.message.data;
        const filtered = state.tempUsers.filter(item=> !state.followings.followinglist.some(item1=>item1.userId===item._id))
        state.users=filtered;
      })
      .addCase(followUser.fulfilled, (state) => {
        state.isSuccessFollow = true;
      });
  },
});

export const { reset } = friendsSlice.actions;
export default friendsSlice.reducer;
