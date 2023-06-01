import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';
import NavBack from './components/navBack';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBack />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
