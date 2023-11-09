import "./App.css";
import { AddComputer, ComputerDetail, EditComputer, ComputerList } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className=" bg-container">
    <h1>React.js CRUD </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ComputerList />} />
          <Route path="/Computer/create" element={<AddComputer />} />
          <Route path="/Computer/edit/:id" element={<EditComputer />} />
          <Route path="/Computer/detail/:id" element={<ComputerDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
