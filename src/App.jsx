import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

import Users from "./pages/Users";
import CreateUser from "./pages/createUser";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/users">Users</Link>
        <Link to="/create">Create User</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/users" replace />} />

        <Route path="/users" element={<Users />} />

        <Route path="/create" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
