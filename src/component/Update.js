import { React, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import { useParams } from "react-router-dom";
function Update() {
  let navigate = useNavigate();

  let { id } = useParams();

  console.log(id, "iiiiiiii");

  const [state, setState] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(id);
      const data = await axios.put("http://localhost:5000/user/updateDoc/" + id, state);
      if (data.status === 200) {
        alert("Succesfully Update");
      }
      console.log(data);
      navigate("/getData");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            FullName
          </label>
          <input
            type="fullName"
            name="fullName"
            value={state.fullName}
            className="form-control"
            id="exampleInputFullName"
            aria-describedby="emailHelp"
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={state.email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
          ></input>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            PhoneNumber
          </label>
          <input
            type="phoneNumber"
            name="phoneNumber"
            value={state.phoneNumber}
            className="form-control"
            id="exampleInputPhoneMumber"
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={state.password}
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleChange}
          ></input>
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </>
  );
}
export default Update;
