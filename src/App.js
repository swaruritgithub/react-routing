import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Index from "./pages/index";
import Registration from "./pages/registration";
import Login from "./pages/login";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/index" element={<Index />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
