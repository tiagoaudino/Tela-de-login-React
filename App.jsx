
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/login/login";
import Registro from "./Components/registro/registro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
