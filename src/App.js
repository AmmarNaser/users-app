import { useEffect, useState } from "react";
import NewUser from "./Component/NewUsers/NewUser";
import UserList from "./Component/Users/UsersList";
import "./App.css";

const DUMMY_DATA = [
  {
    id: "U1",
    name: "Ammar",
    age: 30,
  },
  { id: "U2", name: "Ahmed", age: 35 },
];
function App() {
  const [users, setUsers] = useState([]);

 

  const saveUsersHandler = (enteredData) => {
    setUsers((prevUsers) => {
      return [enteredData, ...prevUsers];
    });
  };

  return (
    <div className="App">
      <NewUser onSave={saveUsersHandler} />

      <UserList users={users} />
    </div>
  );
}

export default App;
