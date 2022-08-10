import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import BeersDirectoryPage from './pages/BeersDirectoryPage';
import BeerDetailPage from './pages/BeerDetailPage';
import './App.css';
import AboutPage from './pages/AboutPage';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <Header />
        <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='contact' element={<ContactPage />} 
              />
              <Route path='directory' element={<BeersDirectoryPage />} 
              />
              <Route path='directory/:beerId' element={<BeerDetailPage />}
              />
              <Route path='about' element={<AboutPage/>} />
          </Routes>
        <Footer />
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
