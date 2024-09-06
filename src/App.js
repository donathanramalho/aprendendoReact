import { Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import NavBar from './components/navbar';
import CounterPage from './pages/CounterPage';
import Erro from './pages/Erro404';

import Calculator from './components/calculator'
import Todolist from './components/todolist';

import { CounterProvider } from './context/counter';

function App() {
  return (
    <>
      <CounterProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/list' element={<Todolist />} />
          <Route path='/counter' element={<CounterPage />} />
          <Route path='*' element={<Erro />} />
        </Routes>
      </CounterProvider>
    </>
  );
}

export default App;