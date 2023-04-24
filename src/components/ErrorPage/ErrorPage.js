import React from "react";
import { useNavigate} from "react-router-dom";
import style from './ErrorPage.module.css';
import image from '../../img/error.png'

const ErrorPage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/')
    }    

    return (
        <div className={style.error} >
            <h3> Something went wrong !!! </h3>
            <img src={image} alt={'error'}/> 
            <button className={style.button} onClick={handleClick}> Transfer to Main Page </button>
        </div>
    )
}

export default ErrorPage;