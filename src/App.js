
import './App.css';
import FlexWrapper from './components/flexWrapper/FlexWrapper';
import NavBar from './components/NavBar/NavBar'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
    <FlexWrapper>
    <NavBar/>
    <CartWidget/>
    </FlexWrapper>
    <ItemListContainer greeting="bienvenido"/>



    </>
  );
}

export default App;
