import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Update from "./Components/Update";
import Create from "./Components/Create";
import Read from "./Components/Read";


function App() {
  return (
    <div className="container">

      <BrowserRouter basename="/CRUD-Application">
        <Routes>
          <Route exact path="/CRUD-Application" element={<Create/>}></Route>
          <Route path="/read" exact  element={<Read/>}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
