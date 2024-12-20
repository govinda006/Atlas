import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Adminlogin from "./pages/Adminlogin";
import Home from "./pages/Home";
// import Services from "./pages/Services";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Services" element={<Services />} /> */}
          <Route path="/Adminlogin" element={<Adminlogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
