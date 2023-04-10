import Favs from "./Routes/Favs";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextGlobal } from "./Components/utils/global.context";
import { useContext } from "react";

function App() {
  const { currentContext } = useContext(ContextGlobal)
  const { theme } = currentContext
  return (
    <div className="App">
      <div className={theme}>
      
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
        </BrowserRouter>
        <Footer />
        </div>
    </div>
  );
}

export default App;