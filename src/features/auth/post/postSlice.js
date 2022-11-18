import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import postService from './postService';



const initialState = {
    postItems:[],
    isError:false,
    isGetPostError:false,
    isGetPostSuccess:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

//Add Post Item

export const createPost = createAsyncThunk('post/createPost', 
async(postItems,thunkAPI)=>{
    try{
        // const token =thunkAPI.getState.auth.user.message.data.token;
        return await postService.createPost(postItems)
    }
    catch(error){
        const message = (error.response && error.response.data&&error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
    }
}
)


export const getPosts = createAsyncThunk('post/followingPost',async(_,thunkAPI) => { 
   const user = JSON.parse(localStorage.getItem('user'));
   console.log(user.message.data.user._id);
    try{
       // const token =thunkAPI.getState.auth.user.message.data.token;
       return await postService.getPost(user.message.data.user._id)

    }
    catch(error){
        const message = (error.response && error.response.data&&error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
    }
}

)


export const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{
        reset:() => initialState
    }, 
    extraReducers:(builder)=>{
        builder
        .addCase(createPost.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(createPost.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            // state.postItems.push(action.payload)
        })
        .addCase(createPost.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload;
        })
        .addCase(getPosts.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(getPosts.fulfilled, (state,action)=>{
           // console.log(action.payload.message.data)
            state.isLoading = false;
            state.isGetPostSuccess = true;
            state.postItems = action.payload.message.data
        })
        .addCase(getPosts.rejected, (state,action)=>{
            state.isLoading = false;
            state.isGetPostError = true;
            state.isGetPostSuccess = false;
            state.message = action.payload;
        })


    }
})

export const {reset} = postSlice.actions
export default postSlice.reducer;
