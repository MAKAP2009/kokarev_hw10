import React from 'react';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import CreateError from '../CreateError/CreateError'
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
      <ErrorBoundary>
        <div>
          <h2 style={{color:"lightcoral"}}>Main page!</h2>
          <Outlet/> 
          <CreateError/> 
        </div>  
      </ErrorBoundary>
    )
  }

export default Main;