import React, { useState } from 'react';


const CreateError = () => {
  const [error, setError] = useState(false);

  const handleError = () =>  {
    try {
      throw new Error('Error has occurred in your app!');
    } catch(err) {
      console.log(err);
      setError(true);
    }
  }

  if(error) {
    return new Error('Error has occurred in your app!');
  }

  return (
    <button onClick={handleError}>Issue an error </button>
  )
}

export default CreateError;