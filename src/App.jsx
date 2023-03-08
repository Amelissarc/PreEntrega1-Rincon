import styles from "./components/header/NavBarComponent/NavBar.css";
import {NavBarComponent, NavbarDarkExample, ItemListContainer} from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="mainContainer">
      <NavBarComponent />
      <NavbarDarkExample />
      <ItemListContainer greetings = "Bienvenidos a mi Ecommerce" />
    </div>
  );
}

export default App;
