import { NavLink, Route, Routes } from "react-router";
import "./App.css";
import "@radix-ui/themes/styles.css";
import "normalize.css";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import UserTypeFormPage from "./pages/Register/UserTypeForm";
import MainFormPage from "./pages/Register/MainForm";
import ProtectedRoute from "./components/misc/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />}>
        <Route
          index
          element={
            <div>
              <NavLink to="/register/user-type">Start</NavLink>
            </div>
          }
        />
        <Route path="user-type" element={<UserTypeFormPage />} />
        <Route path="form" element={<MainFormPage />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<div>Dashboard</div>} />
      </Route>
    </Routes>
  );
}

export default App;
