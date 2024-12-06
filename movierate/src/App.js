import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';

function App() {
  return (
    <div className="App">
		<Header />
      		<Routes>
    			<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />		
				<Route path="/register" element={<Register />} />
				<Route path="/logout" element={<Logout />} />
      		</Routes>
		<Footer />
    </div>
  );
}

export default App;
