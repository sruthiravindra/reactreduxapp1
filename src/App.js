import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import { Counter } from './features/counter/Counter';
import CampsiteCard from './features/campsites/CampsiteCard.js';
import { CAMPSITES } from './app/shared/CAMPSITES';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='contact' element={<ContactPage/>}></Route>
        <Route path='directory' element={<CampsitesDirectoryPage/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
