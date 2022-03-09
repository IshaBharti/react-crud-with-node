import React, { useEffect, useState } from "react";
import axios from "axios";
import Datastore from "../component/Datastore";

function Getdata() {
  const [notes, setNotes] = useState("");
  useEffect(() => {
    get_all_data();
  }, []);
  const get_all_data = () => {
    const url = "http://localhost:5000/user/getDoc";

    axios
      .get(url)
      .then((response) => {
        setNotes(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(`error:${error}`));
  };

  return (
    <>
      <Datastore notes={notes} />
    </>
  );
}
export default Getdata;
