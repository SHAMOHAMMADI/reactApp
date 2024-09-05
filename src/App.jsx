import Home from "./pages/Home";
import {Routes , Route } from 'react-router-dom'
import Products from "./pages/Products";
import Aboutus from "./pages/Aboutus";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import { createContext , useState} from "react";
import Login from "./pages/Login";
import Register from './pages/Register'

export const contextApp = createContext(null)
function App() {
const [login , setIsLogin] = useState(true)


  return (
    <div className="App">
        <contextApp.Provider value={{login , setIsLogin}}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/aboutus" element={<Aboutus />}/>
        <Route path="/contactus" element={<ContactUs />}/>
        <Route path='*' element={<NotFound />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
        </contextApp.Provider>
    </div>
  );
}

export default App;
