import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/navbar';
import './typography.css';
import './index.css';
import './all.css';
import Home from "./pages/Home";
import Footer from "./components/footer";


function App() {  
  return (
    <>
    <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" exact Component={Home} />



       </Routes>
       <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
