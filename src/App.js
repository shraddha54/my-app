import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Profile from "./page/profile/Profile";
import Register from "./page/register/Register";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />    
      </Routes>
    </Router>
  )
}

export default App;