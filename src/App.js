import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="logo-header">
          <img src="./img/tipo blancotrabajo.png" alt="logo" />
        </div>

        <div className="header-search-cart">
          <form className="search-header">
            <label htmlFor="search-input" className="sr-only"></label>
            <div className="input-group">
              <div className="input-group-prepend">
                <i className="fa-solid fa-search"></i>
                <button
                  className="btn-outline-secondary"
                  type="submit"
                  id="btn-search"
                  aria-label="btn-search"
                ></button>
              </div>
              <input
                id="search-input"
                className="form-control"
                type="search"
                placeholder="Search products"
                aria-label="Search"
              />
            </div>
          </form>

          <div className="account-cart-header">
            <div className="account">
              <a href="#" aria-label="user">
                <i className="fa-regular fa-user"></i>
                <p>Sing in</p>
              </a>
            </div>
            <div className="cart">
              <a href="#" aria-label="cart">
                <i className="fa-solid fa-basket-shopping"></i>
                <p>Cart</p>
              </a>
            </div>
          </div>
        </div>
      </header>

      <aside>
        <div className="categories-products">
          <div className="category-products">
            <ul>
              <li>
                <a href="#">All products</a>
              </li>
              <li>
                <a href="#">Yoga set</a>
              </li>
              <li>
                <a href="#">Drinkware</a>
              </li>
              <li>
                <a href="#">Bolster</a>
              </li>
              <li>
                <a href="#">Yoga Block</a>
              </li>
              <li>
                <a href="#">Shirts</a>
              </li>
              <li>
                <a href="#">Boooks</a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      
    </div>
  );
}

export default App;
