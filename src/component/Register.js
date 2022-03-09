import { React, useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
// ***********Register***************
function Register() {
  let navigate = useNavigate();

  const [state, setState] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }
  console.log(state);

  function handleSubmit(event) {
    event.preventDefault();
    setFormErrors(validate(state));
    const data = axios.post(`http://localhost:5000/user/insertUser`, state).then((res) => {
      if (data) {
        alert(res.data.message);
        navigate("/getData");
      }
    });
  }
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0) {
      console.log(state);
    }
  }, [formErrors]);
  // ************validation***************
  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.fullName) {
      errors.fullName = "FullName is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    }else if(!regex.test(state.email)){
      errors.email="This is not valid email"
    }
    if (!values.password) {
      errors.password = "Password is required";
    }else if (values.password<4){
        errors.password="Password must be more than 4 legth"}
    if (!values.phoneNumber) {
      errors.phoneNumber ="Phone Number is required";
    }
    
    return errors;
  }
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
            placeholder="Enter your Name"
            id="exampleInputFullName"
            aria-describedby="emailHelp"
            onChange={handleChange}
          ></input>
        </div>
        <p style={{color:"red"}}>{formErrors.fullName}</p>
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
            placeholder="Enter your Email"

            aria-describedby="emailHelp"
            onChange={handleChange}
          ></input>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <p style={{color:"red"}}>{formErrors.email}</p>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            PhoneNumber
          </label>
          <input
            type="phoneNumber"
            placeholder="Enter your PhoneNumber"

            name="phoneNumber"
            value={state.phoneNumber}
            className="form-control"
            id="exampleInputPhoneMumber"
            onChange={handleChange}
          ></input>
        </div>
        <p style={{color:"red"}}>{formErrors.phoneNumber}</p>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"

            name="password"
            value={state.password}
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleChange}
          ></input>
        </div>
        <p style={{color:"red"}}>{formErrors.password}</p>


        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
export default Register;
