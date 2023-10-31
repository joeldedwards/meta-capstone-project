import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Reservation from './components/Reservation'
import UnderConstruction from './components/UnderConstruction'
import ConfirmedBooking from './components/ConfirmedBooking'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about" element={<UnderConstruction />}></Route>
          <Route path="/reserve" element={<Reservation />}></Route>
          <Route path="/order" element={<UnderConstruction />}></Route>
          <Route path="/login" element={<UnderConstruction />}></Route>
          <Route path="/confirmation" element={<ConfirmedBooking />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
