import './styles/style.scss';
import './App.css'
import { Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>

      </Route>
    </Routes>
  );
}

export default App;

