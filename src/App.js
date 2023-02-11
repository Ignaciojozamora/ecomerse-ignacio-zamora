
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/HomePage';
import { CartContextProvider } from './storage/cartContext';
import CartContainer from './components/CartContainer/CartContainer';



function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    
      <NavBar/>
      
        <Routes>
        
        <Route path="/" element={<HomePage/>}/>
        <Route path="/category/:categoryid" element={<HomePage/>}/>
        <Route path="/item/:itemid" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element= {<CartContainer/>}/>
        <Route path="*" element={<PageNotFound/>}/>


        </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
