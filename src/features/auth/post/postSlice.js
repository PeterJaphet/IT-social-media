import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";
import axios from "axios";
import constants from '../../../hooks/constant'

const API_URL = constants.API_URL;


const initialState = {
  postItems: [],
  comments:[],
  isError: false,
  isGetPostError: false,
  isGetPostSuccess: false,
  isSuccess: false,
  isLoading: false,
  isCommentSuccess:false,
  message: "",
};

//Add Post Item

export const createPost = createAsyncThunk(
  "post/createPost",
  async (postItems, thunkAPI) => {
    try {
      // const token =thunkAPI.getState.auth.user.message.data.token;
      return await postService.createPost(postItems);
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

// add and unaddlike

async function like(PostId, UserId) {
  const response = await axios.post(
    `${API_URL}/post/like`,{postId:PostId, userId:UserId}
  );

  return response.data;
}


//get posts
export const getPosts = createAsyncThunk(
  "post/followingPost",
  async (_, thunkAPI) => {
    const user = JSON.parse(localStorage.getItem("user"));
   // console.log(user.message.data.user._id);
    try {
      // const token =thunkAPI.getState.auth.user.message.data.token;
      return await postService.getPost(user.message.data.user._id);
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


//Add Comments
async function comment(postid, userid,message) {
  const response = await axios.post(
    `${API_URL}/comment/addcomment`,{postid:postid, userid:userid, message:message}
  );

  return response.data;
}

export const addComment = createAsyncThunk(
  "post/addComment",
  async ({postid, userid,message}, thunkAPI) => {
    try {
      return await comment(postid, userid,message);
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

//getComments function

async function getcomment(postid) {
  const response = await axios.get(
    `${API_URL}/comment/getcomment/${postid}`
  );

  return response.data;
}

export const getComments = createAsyncThunk(
  "post/getComments",
  async ({postid}, thunkAPI) => {
    try {
      return await getcomment(postid);
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


export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    
    addLove: (state, action) => {

        console.log(action.payload.postId)
        console.log(action.payload.userId)
       
      if (state.postItems !== null) {
       // console.log(state.postItems[0].post._id)
        for (let i = 0; i < state.postItems.length; i++) {
          if (state.postItems[i].post._id === action.payload.postId) {
            if (
              !state.postItems[i].post.userLike.includes(
                action.payload.userId
              )
            ) {
              state.postItems[i].post.userLike.push(
                action.payload.userId
                
              );
              console.log(action.payload.status)
              console.log(state.postItems[i].post.userLike)
              like(action.payload.postId, action.payload.userId);
            //  console.log(state.likeInfo)
              
            } else {
              state.postItems[i].post.userLike = state.postItems[
                i
              ].post.userLike.filter(
                (item) => item !== action.payload.userId
              );
              
              console.log(action.payload.status)
              console.log(state.postItems[i].post.userLike)
             like(action.payload.postId, action.payload.userId);
             
             
            }
          }
        }
      }
    },
    reset: (state) => {
      //state.followings = null;
      // state.isSuccessFollow = false;
      state.isError= false;
      state.isGetPostError= false;
      state.isGetPostSuccess= false;
      state.isSuccess= false;
      state.isLoading= false;
      // state.isCommentSuccess=false;
      state.message= "";
    },
    COMMENT_RESET: (state) =>{
      state.isCommentSuccess = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.postItems.push(action.payload)
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        // console.log(action.payload.message.data)
        state.isLoading = false;
        state.isGetPostSuccess = true;
        state.postItems = action.payload.message.data;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isGetPostError = true;
        state.isGetPostSuccess = false;
        state.message = action.payload;
      })
      .addCase(addComment.fulfilled, (state) => {
        state.isCommentSuccess=true;
      })
      .addCase(getComments.fulfilled, (state, action)=>{
        state.comments = action.payload.message.data
      })
  },
});

export const { reset,addLove, COMMENT_RESET } = postSlice.actions;
export default postSlice.reducer;
