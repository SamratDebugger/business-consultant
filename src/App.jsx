import { Route, Routes } from "react-router";
import Home from "./routes/Home";
import LoginForm from "./routes/LoginForm";
import RegistrationForm from "./routes/RegistrationForm";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="registration" element={<RegistrationForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
