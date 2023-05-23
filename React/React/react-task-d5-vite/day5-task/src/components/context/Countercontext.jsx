import axios from "axios";
import React, { createContext, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
export const CounterCtx = createContext();
const Countercontext = (props) => {
  const heartRef = useRef();
  const [isFav,setIsFav]=useState(false)
  const [favCounter, setFavcounter] = useState(0);
  const [favList, setFavList] = useState([]);
  const [movies, setMovies] = useState([]);
 

  const deleteHandler = (id) => {
    const filterdArray = movies.filter((movie) => movie.id !== id);
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
        setMovies(filterdArray);
      }
    });
  };
  const deleteFromFav = (id) => {
    const filterdArray = favList.filter((movie) => movie.id !== id);
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
        setFavList(filterdArray);
      }
    });
  };
  const favHandle = (movie) => {
    let heart = heartRef.current;
    heart.style.color = "red";

    console.log(heart);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your Movie Added Successfully ",
      showConfirmButton: false,
      timer: 1500,
    });
    setFavcounter(favCounter + 1);

    favList.push(movie);
    setFavList(favList);
    console.log(favList);

  };
  const values = { heartRef,favCounter, favHandle,deleteFromFav, movies, favList, deleteHandler };
  return (
    <CounterCtx.Provider value={values}>{props.children}</CounterCtx.Provider>
  );
};

export default Countercontext;
