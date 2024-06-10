// import logo from './logo.svg';
import './App.css';


import { Productes } from './components/products/Productes';
import { Slider } from './components/Slider';
import { Footer } from './components/Footer';

import { Mynav } from './components/Mynav';

function App() {
  return (
    <div className="App">
       <Mynav></Mynav>
       <Slider></Slider>  
       <Productes></Productes>
       <Footer></Footer>
  </div>
  );
}

export default App;
