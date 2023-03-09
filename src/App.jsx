import styles from "./components/header/NavBarComponent/NavBar.css";
import {NavBarComponent, NavbarDarkExample, ItemListContainer, CardComponent } from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="bodyContainer">
      <div className="headerContainer">
        <NavBarComponent />
        <NavbarDarkExample />
      </div>
      <div className="mainContainer">
        <ItemListContainer greeting = "All products" />
      </div>
    </div>
  );
}
export default App;
