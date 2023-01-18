
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';


function App() {
  return (
    <BrowserRouter>
    
      <NavBar/>
        <Routes>
        
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
        <Route path="/item/:itemid" element={<ItemDetailContainer/>}/>
        
        <Route path="*" element={<PageNotFound/>}/>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
