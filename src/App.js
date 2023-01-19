import React from 'react';
import './App.css';
import Signup from './components/form-component/Signup';
import UserInformation from './components/form-component/UserInformation';

function App() {
  return (
    <div className="App">
      <Signup />
      <UserInformation />
    </div>
  );
}

export default App;
