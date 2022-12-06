import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    users:[],
    followings:[],
    followers:[],
    isLoading:false,
    isError:false,
    isSuccess:false,
    message:""
}


//get users
async function friends(){
    const response = await axios.get(`https://37bc-185-237-231-171.eu.ngrok.io/user/getAll/0/100`);
    console.log(response.data)
    return response.data;
    
}

export const getFriends = createAsyncThunk( "friends/addFriends",
async (_, thunkAPI) => {
  
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
})


//follow users
async function follow(fromId,toId){
  const response = await axios.post(
    `https://37bc-185-237-231-171.eu.ngrok.io/follow/followuser`,{fromuserid:fromId, touserid:toId}
  );

  return response.data;
}

export const followUser= createAsyncThunk(
  "friends/follow",
  async({fromId,toId},thunkAPI)=>{
    try{
      return await follow(fromId,toId);
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
)


//get following
async function followings(id){
  const response = await axios.get(
    `https://37bc-185-237-231-171.eu.ngrok.io/follow/userfollowing/${id}`);

  return response.data;
}

export const userFollowing= createAsyncThunk(
  "friends/following",
  async(_,thunkAPI)=>{
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
)


export const friendsSlice = createSlice({
    name:'friends',
    initialState,
    reducers:{
        reset:(state)=>{
            state.users=null;
        }
    },

    extraReducers: (builder)=>{
        builder
        .addCase(getFriends.fulfilled,(state,action)=>{
            state.users=action.payload.message.data;
        })
        .addCase(followUser.fulfilled,(state)=>{
          state.isSuccess = true;
        })
        .addCase(userFollowing.fulfilled,(state,action)=>{
          state.followings = action.payload.message.data;
        })

    }

})

export const {reset} = friendsSlice.actions
export default friendsSlice.reducer;