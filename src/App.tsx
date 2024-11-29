import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Signup from "./views/Signup/Signup";
import Signin from "./views/Signin/Signin";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
