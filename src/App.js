
import React from 'react'
import Profile from './Profile/ComponentProfile.js';
import './App.css';
import image from './me.jpg';

function App() {
// variable declaration
  const fullName="BEN KHALIFA HASSEN"
  const bio="I ❤️ programming. I am learning the full stack developer JAVASCRIPT course in GO MY CODE hackerspace Gabes."
  const profession="GO MY CODE Student "
  const handleName=(name)=> {alert (`Hello I'm ${name}, nice to meet you!`)}

  return (
    <div className="App">
      {/* send props to profile component */}
       <Profile fullName={fullName}
           bio={bio}
           profession={profession}
           handleName={handleName}
           >
            {/* props children : image  */}
        <div>
          <img src={image} style={{width:350,height:350,borderRadius:'50px', border:" 2px solid #2980B9",boxShadow: "0px 0px 10px 0px #2980B9"}} alt="me"></img>
        </div>
      </Profile>
    </div>
  );
}

export default App;

