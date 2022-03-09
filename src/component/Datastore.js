import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Table } from "react-bootstrap";

function Datastorage(props) {
  let navigate = useNavigate();

  const { notes } = props;

 
  const handleDeleteProperty = async (id) => {

    try {
      const res = await axios.delete("http://localhost:5000/user/deleteData/" + id);
      console.log(res, "res");
      if (res.data.status === 200) {
        alert("Deleted");
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };
  const change = async (id) => {
    // console.log(id,)
    
    navigate(`/updateData/`+id);
  };

  return (
    <div style={{ margin: "20px" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Full Name</th>
            <th> PhoneNumber</th>
            <th>Email</th>
            <th>Password</th>
            <th> Actions</th>
          </tr>
        </thead>
        <tbody>
          {notes &&
            notes.map((note, i) => {
              return (
                <tr key={i}>
                  <td>{note._id}</td>
                  <td>{note.fullName}</td>
                  <td>{note.phoneNumber}</td>
                  <td>{note.email}</td>
                  <td>{note.password}</td>
                 <td> <button onClick={(e) => handleDeleteProperty(note._id)}>
                    <i
                      className="fa fa-trash"
                      aria-hidden="true"
                      style={{ color: "red", fontSize: "200%" }}
                    ></i>
                  </button>

                  <button onClick={(e)=>change(note._id)}>
                    <i
                      className="fa fa-edit"
                      aria-hidden="true"
                      style={{ color: "blue", fontSize: "200%" }}
                    ></i>
                  </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default Datastorage;
