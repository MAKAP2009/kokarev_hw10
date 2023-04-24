import { useNavigate, useParams } from "react-router-dom";
import style from './ProductItem.module.css';

const ProductItem = () => {

    const {product} = useParams();
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/')
    }    

    return (
      <div className={style.products}>
        <p className={style.product}>{product}</p>
        <button className={style.button} onClick={handleClick}>Go to Main Page </button>
      </div>
    )
}
export default ProductItem;