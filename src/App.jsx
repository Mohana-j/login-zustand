import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/login";
import Welcome from "./components/Welcome";


function App() {
  return (
    <BrowserRouter>
   
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
