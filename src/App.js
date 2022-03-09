import "./App.css";
import { BrowserRouter, Routes, Route,useParams} from "react-router-dom";

import Register from "../src/component/Register";
import Getdata from "../src/component/Getdata";
import Update from "./component/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route exact path="/getData" element={<Getdata />} />
          <Route exact path="/updateData/:id" element={<Update />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
