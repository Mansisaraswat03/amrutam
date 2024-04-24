import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home,Header} from './components';
import Doctors from './pages/Doctors';
function App() {

  return (
    <BrowserRouter>
     <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/find-doctors" element={<Doctors />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
