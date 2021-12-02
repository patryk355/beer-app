import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    name: 'fav',
    initialState: { favItems: [], },
    reducers: {
        uploadFavItems(state, action) {
            state.favItems = action.payload.favItems;
        },
        addToFavItems(state, action) {
            state.favItems.push(action.payload.newFavItem);
        },
        removeFromFavItems(state, action) {
            const favIndex = action.payload.index;
            // state.favItems.includes(fav => fav.id !== favIndex);
            state.favItems.splice(favIndex, 1);
        },
    }
});

export const favActions = favSlice.actions;
export default favSlice;