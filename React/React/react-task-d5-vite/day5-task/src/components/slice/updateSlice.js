import { createSlice, current } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  initialState: [],
  name: "favoriteSlice",
  reducers: {
    addToFavorite: (state, action) => {
      
      state.push(action.payload);
        return state;
      
      
    },
    updateMovie: (state, action) => {
     
    },
    
  },
 
});
export const { addToFavorite, deleteFromFav } = favoriteSlice.actions;
export default favoriteSlice.reducer;
