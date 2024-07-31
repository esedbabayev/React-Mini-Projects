import { Routes, Route } from "react-router-dom";

// Pages
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";

//Components
import Container from "./Components/Container";


import Plus from "./icons/Plus";
import Search from "./icons/Search";
import Dots from "./icons/Dots";
import Clip from "./icons/Clip";
import Smile from "./icons/Smile";
import Mic from "./icons/Mic";
import Send from "./icons/Send";
import Home from "./pages/Home";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Container>
  );
};

export default App;
