
import { Route, Routes } from 'react-router-dom';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';
import { Catalog } from './components/Catalog/Catalog';
import { MovieDetails } from './components/MovieDetails/MovieDetails';
import { About } from './components/About/About';
import { Profile } from './components/Profile/Profile';
import { AddMovie } from './components/AddMovie/AddMovie';
import { EditMovie } from './components/EditMovie/EditMovie';

import './App.css';
import { AuthProvider } from './contexts/AuthContext';


function App() {
  return (
    <AuthProvider>
    <div className="App">
        <Header />
        <div className='main-content'>
            <Routes >    
                <Route path='/' element={<Home />}/>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/addmovie' element={<AddMovie />} />
                <Route path='/catalog/:movieId' element={<MovieDetails />} />
                <Route path='/catalog/:movieId/edit' element={<EditMovie />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
        <Footer />
    </div>
    </AuthProvider>
  );
}

export default App;
