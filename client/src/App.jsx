import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/home.pages';
import PlayersTable from "./pages/planilla.pages";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="planilla" element={<PlayersTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
