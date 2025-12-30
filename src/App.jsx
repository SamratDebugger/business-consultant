import { Route, Routes } from "react-router";
import Home from "./routes/Home";
import LoginForm from "./routes/LoginForm";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
