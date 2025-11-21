import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const apiurl = import.meta.env.VITE_API_BASE_URL;
const endpoint = '/products';
import axios from "axios";


const initialState={
    value:[]
}

export const fetchProducts = createAsyncThunk(
    'fetchProducts',
    async () => {
        const response =await axios.get(`${apiurl}${endpoint}`)
        return response.data;
    }

)
// export const fetchProductDetails=createAsyncThunk(
//     'products/fetchproductsdetails',
//     async(id)=>{
//         const response=axios.get(`${apiurl}${endpoint}/${id}`)
//         return response.data;
//     }

// )    

export const productslice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                // state.status='success'
                state.value = action.payload;
            })
        // .addCase(fetchProducts.rejected,(state,action)=>{
        //     state.status='failed'
        //     state.products=action.error.message;
        // })
    }
});

export const {}=productslice.actions
export default productslice.reducer


