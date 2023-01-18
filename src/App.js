
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/HomePage';


function App() {
  return (
    <BrowserRouter>
    
      <NavBar/>
        <Routes>
        
        <Route path="/" element={<HomePage/>}/>
        <Route path="/category/:categoryid" element={<HomePage/>}/>
        <Route path="/item/:itemid" element={<ItemDetailContainer/>}/>
        
        <Route path="*" element={<PageNotFound/>}/>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
