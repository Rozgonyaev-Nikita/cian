import './styles/style.scss';
import './App.css'
import NavBar from './components/NavBar.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer';


function App() {
  return (
    <div className="wrapper">
      <NavBar></NavBar>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;

