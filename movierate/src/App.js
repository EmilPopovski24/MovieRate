import { Route, Routes } from 'react-router-dom';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { Catalog } from './components/Catalog/Catalog';
import { AddMovie } from './components/AddMovie/AddMovie';
import { EditMovie } from './components/EditMovie/EditMovie';
import { Account } from './components/Account/Account';
import { MovieDetails } from './components/MovieDetails/MovieDetails';
import { AuthProvider } from './contexts/AuthContext';
import { MovieProvider } from './contexts/MovieContext';

import './App.css';
import { Forum } from './components/Forum/Forum';


function App() {
  return (
    <div className="App">
		<AuthProvider>
		<MovieProvider>
		<Header />
			<div className='main-content'>
      		<Routes>
    			<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />		
				<Route path="/register" element={<Register />} />
				<Route path="/logout" element={<Logout />} />
				<Route path="/catalog" element={<Catalog />} />
				<Route path='/catalog/:movieId' element={<MovieDetails />} />
				<Route path='/addmovie' element={<AddMovie />} />
				<Route path="/catalog/:movieId/editmovie" element={<EditMovie />} />
				<Route path='/account' element={<Account />} />
				<Route path='/forum' element={<Forum />} />
      		</Routes>
			</div>
		<Footer />
		</MovieProvider>
		</AuthProvider>
    </div>
  );
}

export default App;
