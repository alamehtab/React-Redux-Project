import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchProductsAPI } from "./productsAPI"

const initialState = {
    products: [],
    status: 'idle'
}

export const fetchProductsAsync = createAsyncThunk(
    'products/fetchProduct',
    async () => {
        const response = await fetchProductsAPI()
        return response.data
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchProductsAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.products = action.payload
            })
    }
})

// export const {  }=productsSlice.actions

export default productsSlice.reducer