import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./views/Landing/landing";
// import SignUp from "./views/SignUp/signup";
import Signin from "./views/Signin/signin";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/login" element={<Signin />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
