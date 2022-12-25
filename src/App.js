
import './App.css';
import FlexWrapper from './components/flexWrapper/FlexWrapper';
import NavBar from './components/NavBar/NavBar'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
    
    <NavBar/>
    <ItemListContainer greeting="bienvenido"/>
    </>
  );
}

export default App;
