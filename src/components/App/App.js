import {BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Home from '../Home/Home';
import Main from '../Main/Main';
import Products from '../Products/Products';
import ProductItem from '../ProductItem/ProductItem';
import ErrorPage from '../ErrorPage/ErrorPage';

const products = [ 'product1', 'product2', 'product3'];

function App() {
  return (
    <div className="App">
      <h2>Homework 10</h2>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <NavLink className="link" to={"/"}>
                  Main
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to={"/home"}>
                  Home
                </NavLink>
              </li> 
              <li>
                <NavLink className="link" to={"/products"}>
                  Products
                </NavLink>
              </li>
              {products.map(product => {
                return (
                  <li key={product} >
                    <NavLink className="link" to={`/products/${product}`}>
                    Product: {product}
                    </NavLink>
                  </li>
                )
              })}
          </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Main/>}>
              <Route path="home" element={<Home/>}/>
            </Route>            
            <Route path='/products' element={<Products />} > 
              <Route path=':product' element={<ProductItem products={products} />} />
            </Route>            
            <Route path='/error' element={<ErrorPage /> } />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;