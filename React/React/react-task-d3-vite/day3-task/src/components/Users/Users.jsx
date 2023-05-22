import React, { useState } from "react";
import "./users.css";
import Search from "./Search";
import { Alert, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const Users = (props) => {
  const [filterdArr, setFilteredArr] = useState(props.users);

  const navigate = useNavigate();
  const handleDeleteAll = () => {
    props.setUsers([]);
  };
  const handleSearch = (searchText) => {
    // filterdArr = ;
    setFilteredArr(
      props.users.filter((user) => user.name.includes(searchText))
    );
  };
  console.log(props.users);
  const handleDelet = (id) => {
    props.setUsers(props.users.filter((user) => user.id !== id));
  };
  return (
    <>
      <p className="firstLine">
        U &nbsp; S &nbsp; E &nbsp; R &nbsp;S &nbsp;&nbsp; &nbsp; I &nbsp; N
        &nbsp; F &nbsp; O
      </p>
      <Search textHandler={handleSearch} />
      <div className="btns">
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            navigate("/add");
          }}
        >
          Add New User
        </Button>
        {props.users.length > 0 ? (
          <Button variant="contained" color="error" onClick={handleDeleteAll}>
            Delete All ({props.users.length})
          </Button>
        ) : (
          ""
        )}
      </div>
      <div>
        {props.users.length > 0 ? (
          filterdArr.map((user, index) => (
            <div key={user.id}>
              <span className="num-user">{index + 1}</span>
              <div className="ag-courses_item">
                <div href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>

                  
                  <div className="ag-courses-item_date-box">
                    Username →
                    <span className="ag-courses-item_date"> {user.name}</span>
                  </div>
                  <div className="ag-courses-item_date-box">
                    User age →
                    <span className="ag-courses-item_date"> {user.age}</span>
                  </div>
                </div>

                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelet(user.id)}
                >
                  <DeleteIcon />
                </Button>
              </div>
            </div>
          ))
        ) : (
          <Alert severity="warning">Users List Is Empty !!</Alert>
        )}
      </div>
    </>
  );
};

export default Users;
