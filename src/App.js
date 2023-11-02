import Layout from "./Componenet/Layout";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Page/Home";
import Contact from "./Page/Contact";
import Menu from "./Page/Menu";
import About from "./Page/About";
import PageNotFound from "./Page/PageNotFound";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="*"element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
