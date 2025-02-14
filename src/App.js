
import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import Favourites from './components/Favourites';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>

      <NavBar />

      <Routes>
        <Route path='/' element={<><Banner /> <MovieList /> </>} />
        <Route path='/favourites' element={<Favourites />} />
      </Routes>

    </Router>

  );
}

export default App;
