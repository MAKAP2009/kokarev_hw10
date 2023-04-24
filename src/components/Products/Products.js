import { Outlet } from "react-router-dom";
import style from './Products.module.css';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import CreateError from '../CreateError/CreateError'

const Products = () => {
    return (
      <ErrorBoundary>  
        <div className={style.products}>          
          <p className={style.text}> Products Page! </p>
          <Outlet />
          <CreateError/>
        </div>
      </ErrorBoundary>  
    )
}
export default Products;