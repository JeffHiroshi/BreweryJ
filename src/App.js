import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BeersDirectoryPage from './pages/BeersDirectoryPage';

function App() {
  return (
    <div className="App">
      <Header />
      <BeersDirectoryPage />
      <Footer />
    </div>
  );
}

export default App;
