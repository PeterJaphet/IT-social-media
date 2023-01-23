import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import constants from '../../../hooks/constant'



const API_URL = constants.API_URL;

const initialState = {
  announcements: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  isSuccessAnnouncement: false,
  message: "",
};


//items
async function addItems(items) {
    const response = await axios.post(
        `${API_URL}/cafeteria/addItem`,items
    );
  
    return response.data;
  }
  
  export const Add = createAsyncThunk(
    "cafteria/add",
    async (items, thunkAPI) => {
      try {
        console.log(items);
        return await addItems(items);
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

  async function add(items) {
    const response = await axios.post(
        `${API_URL}/announcement/getallannouncement/`,items
    );
  
    return response.data;
  }
  
  export const addAnnouncement = createAsyncThunk(
    "cafteria/addAnnouncement",
    async (items, thunkAPI) => {
      try {
        console.log(items);
        return await add(items);
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


  export const cafteriaSlice = createSlice({
    name: 'cafteria',
    initialState,
    reducers:{
        reset:(state) => {
            state.announcements=null;
            state.isLoading = false;
            state.isError = false;
            state.message = '';
            state.isSuccess = false;
        }
    },
    extraReducers:(builder) => {
        builder 
        .addCase(Add.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(Add.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess =true
            //state.foodItems = action.payload
        })
        .addCase(Add.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload;
          })
          .addCase(addAnnouncement.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(addAnnouncement.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess =true
            state.announcements = action.payload
        })
        .addCase(addAnnouncement.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload;
          })
    }
})

export const {reset} = cafteriaSlice.actions
export default cafteriaSlice.reducer;
  