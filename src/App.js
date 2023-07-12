import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='about' element={<AboutPage/>}></Route>
        <Route path='contact' element={<ContactPage/>}></Route>
        <Route path='directory' element={<CampsitesDirectoryPage/>}></Route>
        <Route path='directory/:campsiteId' element={<CampsiteDetailPage/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
