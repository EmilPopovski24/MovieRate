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
import { AuthProvider } from './contexts/AuthContext';

import './App.css';
import { MovieProvider } from './contexts/MovieContext';
import { MovieItem } from './components/Catalog/MovieItem/MovieItem';
// import { withAuth } from './components/hoc/withAuth';

// const EnhancedLogin = withAuth(Login);

function App() {
  return (
    <div className="App">
		<AuthProvider>
		<MovieProvider>
		<Header />
      		<Routes>
    			<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />		
				<Route path="/register" element={<Register />} />
				<Route path="/logout" element={<Logout />} />
				<Route path="/catalog" element={<Catalog />} />
				<Route path='/catalog/:movieId' element={<MovieItem />} />
				<Route path='/addmovie' element={<AddMovie />} />
				<Route path="/editmovie" element={<EditMovie />} />
				<Route path='/account' element={<Account />} />
      		</Routes>
		<Footer />
		</MovieProvider>
		</AuthProvider>
    </div>
  );
}

export default App;
