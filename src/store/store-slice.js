import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newsList: []
}

const storeSlice = createSlice({
    name:'appstore',
    initialState,
    reducers: {
        setNewsList(state, action){
            state.newsList = action.payload
        },
        delteItem(state, action){
            const filterd = state.newsList.filter((i) =>  i.userId !== action.payload )
            state.newsList = filterd;
        }
    }

})

export const storeActions = storeSlice.actions;
export default storeSlice.reducer;