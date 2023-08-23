import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const login = createAsyncThunk(
    '/login',
    async (data) =>{
        return await customAxios.post('http://localhost:8000/login', data)
    }
)

