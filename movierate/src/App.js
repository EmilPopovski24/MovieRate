
import { Route, Routes } from 'react-router-dom';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';
import { Catalog } from './components/Catalog/Catalog';
import './App.css';
import { MovieDetails } from './components/MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
        <Header />
        <div className='main-content'>
            <Routes >    
                <Route path='/home' element={<Home />}/>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/catalog/:movieId' element={<MovieDetails />} />
            </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
