import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Add from "./components/Addform/Add";
import Users from "./components/Users/Users";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Container } from "@mui/material";

const App = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const addUser = (newUser) => {
    
    console.log(users);
    navigate("/");
  };

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Users users={users} setUsers={setUsers} />} />
        <Route path="/add" element={<Add onAddUser={addUser} />} />
        <Route path="*" element={<h1>ERROR</h1>} />
      </Routes>
    </Container>
  );
};

export default App;
