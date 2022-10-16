import React from 'react';
import './App.css';
import InputFeild from './components/InputFeild';

const App: React.FC = () => {
  return(
    <div className='App'>
      <span className="heading">To Do List for Today !</span>
      <InputFeild />
    </div>
  )
}

export default App;
