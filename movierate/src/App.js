
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';

function App() {
  return (
    <div className="App">
        <Header />
        <div className='main-content'>
            <Routes >    
                <Route path='/home' element={<Home />}/>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
