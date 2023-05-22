import { useState } from "react";
import "./add.css";
import { Container } from "@mui/material";
import { v4 as uuid } from 'uuid';

const Add = ({ onAddUser }) => {
  const [uName, setName] = useState("");
  const [uAge, setAge] = useState("");

  const changeHandler = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "age") {
      setAge(e.target.value);
    }
  };

  const addHandler = () => {
    const newUser = { id:uuid(),name: uName, age: uAge };
    onAddUser(newUser);
  };

  return (
    <Container>
      <div className="text-centera">
        <div className="centered">
          <p className="firstLine">
            A &nbsp; D &nbsp; D &nbsp; &nbsp; N &nbsp;E&nbsp;W &nbsp; &nbsp;U
            &nbsp; S &nbsp; E &nbsp; R &nbsp; &nbsp;
          </p>

          <p>
            <input
              className="InputStyle"
              placeholder="USER NAME"
              type="text"
              name="name"
              onChange={changeHandler}
            />
            <input
              className="InputStyle"
              placeholder="USER AGE"
              type="text"
              name="age"
              onChange={changeHandler}
            />
            <input
              className="InputStyle btn"
              type="button"
              value={"ADD"}
              onClick={addHandler}
            />
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Add;
