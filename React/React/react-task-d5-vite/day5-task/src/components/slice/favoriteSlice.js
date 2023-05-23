import { createSlice, current } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  initialState: [],
  name: "favoriteSlice",
  reducers: {
    addToFavorite: (state, action) => {
      
      state.push(action.payload);
        return state;
      
      
    },
    deleteFromFav: (state, action) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Movie has been deleted", "success");
        }
      });
      return state.filter((m) => m.id !== action.payload);
    },
    
  },
 
});
export const { addToFavorite, deleteFromFav } = favoriteSlice.actions;
export default favoriteSlice.reducer;
