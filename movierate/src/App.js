
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div className="App">
        <Header />
        <div className='main-content'>
            <Routes >    
                <Route path='/home' element={<Home />}/>
            </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
