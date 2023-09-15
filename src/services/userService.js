import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";
import axios from "axios";


export const login = createAsyncThunk(
    '/login',
    async (data) =>{
        return await customAxios.post('http://localhost:8000/login', data)
    }
)
export const register = createAsyncThunk(
    '/register',
    async (data) => {
        return await customAxios.post('http://localhost:8000/register', data)
    }
)


