import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './components/footer/Footer';
import AboutUs from './Pages/AboutUs';
import ExoticCars from './typeOfCarsPages/ExoticCars';
import LuxuryCars from './typeOfCarsPages/LuxuryCars';
import SportsCars from './typeOfCarsPages/SportsCars';
import SuvCars from './typeOfCarsPages/SuvCars';
import EconomyCars from './typeOfCarsPages/EconomyCars';
import Blog from './Pages/Blog';
import FAQs from './Pages/FAQs';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    < >
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cars-project' element={<Home/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/faq' element={<FAQs/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/exoticcars' element={<ExoticCars/>}/>
      <Route path='/luxurycars' element={<LuxuryCars/>}/>
      <Route path='/sportscar' element={<SportsCars/>}/>
      <Route path='/suvcars' element={<SuvCars/>}/>
      <Route path='/economycars' element={<EconomyCars/>}/>


    </Routes>
    <Footer/>
    </BrowserRouter>
   
    </>
  );
}

export default App;
