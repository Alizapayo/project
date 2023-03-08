import "./App.css";
import { useState } from "react";
import Axios from "axios";


function App() {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

 
  const [userList, setUserList] = useState([]);

  const getUser = () => {
    Axios.get("http://localhost:3333/User").then((response) => {
      setUserList(response.data);
    });
  };

  const addUser = () => {
    Axios.post("http://localhost:3333/create", {
      name: name,
      user: user,
      password: password
      
    }).then(() => {
      setUserList([
        ...userList,
        {
          name: name,
          user: user,
          password: password
        },
      ]);
    });
  };

  

 

  return (
    <div className="App container">
      <h1>Employees Infomation</h1>
      <div className="information">
        <form action="">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              onChange={(event) => {
                setName(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="User">User:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter User"
              onChange={(event) => {
                setUser(event.target.value)
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Password">Password:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Password"
              onChange={(event) => {
                setPassword(event.target.value)
              }}
            />
          </div>
         
         
          <button onClick={addUser} class="btn btn-success">
            Save
          </button>
        </form>
      </div>
      <hr />
      <div className="employees">
        <button class="btn btn-primary" onClick={getUser}>
          Show data
        </button>
        <br />
        <br />
        {userList.map((val, key) => {
          return (
            <div className="employee card">
              <div className="card-body text-left">
                <p className="card-text">Name: {val.name}</p>
                <p className="card-text">User: {val.user}</p>
                <p className="card-text">Password: {val.password}</p>

               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;