import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/home.pages'
import Logue from "./pages/login.pages";
function App() {
    return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Logue />}/>
      <Route path="/home" element= {<Home /> }/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
