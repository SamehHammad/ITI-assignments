import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favoriteSlice";
import moviesSlice from "./moviesSlice";


 const store = configureStore({
    reducer:{
        movies:moviesSlice,
        favorite:favoriteSlice,

    }
})
export default store;
