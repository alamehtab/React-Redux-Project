import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getItemsAPI, addItemsAPI, updateItemsAPI, deleteItemsAPI } from "./cartAPI"

const initialState = {
    items: [],
    status: 'idle'
}

export const fetchItemsAsync = createAsyncThunk(
    'items/fetchItems',
    async () => {
        const response = await getItemsAPI()
        return response.data
    }
)
export const addItemsAsync = createAsyncThunk(
    'items/addItems',
    async (items) => {
        const {id,title,thumbnail,price,brand}=items
        const response = await addItemsAPI({id,title,thumbnail,price,brand,quantity:1})
        return response.data
    }
)
export const updateItemsAsync = createAsyncThunk(
    'items/updateItems',
    async ({id,updatedItems}) => {
        const response = await updateItemsAPI(id,updatedItems)
        return response.data
    }
)
export const deleteItemsAsync = createAsyncThunk(
    'items/deleteItems',
    async (id) => {
        await deleteItemsAPI(id)
        return id
    }
)

export const cartSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItemsAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchItemsAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.items = action.payload
            })
            .addCase(addItemsAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.items.push(action.payload)
            })
            .addCase(updateItemsAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                const index=state.items.findIndex(item=>item.id===action.payload.id)
                state.items.splice(index,1,action.payload)
            })
            .addCase(deleteItemsAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                const index=state.items.findIndex(item=>item.id===action.payload)
                state.items.splice(index,1)
            })
    }
})

// export const {  }=itemsSlice.actions

export default cartSlice.reducer