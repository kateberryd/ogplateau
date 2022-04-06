import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios';
const baseurl = 'https://opengovapi.herokuapp.com/api/v1';


export const loginUser = createAsyncThunk(
  "users/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        baseurl+ "/auth/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      )
      let data = await response.json()
      if (response.status === 200) {
        sessionStorage.setItem('token', data.data.token)
        localStorage.setItem("token", data.data.token)
        return data
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (e) {
      console.log("Error", e.response.data)
      thunkAPI.rejectWithValue(e.response.data)
    }
  }
)


export const registerUser = createAsyncThunk(
  "users/register",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        baseurl+ "/user/register",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      )
      let data = await response.json()
      console.log("response", data)
      if (response.status === 200) {
        localStorage.setItem("token", data.token)
        return data
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (e) {
      console.log("Error", e.response.data)
      thunkAPI.rejectWithValue(e.response.data)
    }
  }
)






