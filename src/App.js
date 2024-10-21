import './App.css';
import React from 'react';
import PasswordGenerator from './component/passwordGenerator';


function App() {
  return (
    <>  
    <div className= 'p-10 mx-10 my-8 '>
      <h1 className='text-5xl text-blue'>Password Generator</h1>
      <PasswordGenerator />
      </div>
    </>

  );
}

export default App;
