import "./App.css";
import { Signup } from "./Components/signup";
import { Login } from "./Components/login";
import { ErrorPage } from "./Components/Errorpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { InputContextProvider } from "./context";

function App() {
  return (
    <InputContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </InputContextProvider>
  );
}

export default App;
