import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from './pages/Container';
import Blogs from './pages/Blogs';
import Blogs2 from "./pages/Blogs2"

function App() {
  return (
   
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Container/>}></Route>
        <Route path='/blogs1' element={<Blogs/>}></Route>
        <Route path='/blogs2' element={<Blogs2/>}></Route>
    

        </Routes>
    </BrowserRouter>
   
  );
}

export default App;
