import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Collections from './pages/Collections';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    <Header/>
         <Routes>

       <Route path="/" element={<Home/>} />
        <Route path="/collections" element={<Collections/>} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    <Footer/> 

    </div>
  );
}

export default App;
