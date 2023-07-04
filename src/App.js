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
      <CampsitesDirectoryPage/>
      <Footer/>
    </div>
  );
}

export default App;
