import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";



export const fetchMovies=createAsyncThunk("moviesSlice/fetchMovies",async()=>{
  const res = await fetch('http://localhost:3001/movies');
  const data = await res.json();
  return data;

})

const moviesSlice = createSlice({
  initialState: [],
  name: "moviesSlice",
  reducers: {
    deleteHandler: (state,action) => {
       Swal.fire({
        text: "You won't be able to revert this!",
        title: "Are you sure?",
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
      return state.filter((movie) => movie.id !== action.payload);
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchMovies.fulfilled,(state,action)=>{
        return action.payload;
    })

}
});

export const { deleteHandler } = moviesSlice.actions;
export default moviesSlice.reducer;
