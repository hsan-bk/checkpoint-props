import React from 'react'
import propTypes from 'prop-types'

function ComponentProfile(props) {
    return (
        <div>
            {/* receive props and affichage with inline css */}
               <h1 style={{color:"blue",fontSize:"50px"}}>{props.fullName}</h1>
                <p style={{fontSize:"35px"}}>{props.bio}</p>
                <h3 style={{fontSize:"30px"}}>{props.profession}</h3> 
               {props.children} 
               
               <button onClick={()=>props.handleName(props.fullName)}
                    style={{
                    fontSize: '20px',
                    width: '250px',
                    backgroundColor: '#7286D3',
                    border:'none',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    marginTop:'20px',
                    cursor: 'pointer',
                }}>
                    Click Me !
                </button>
        </div>
  
    ) 
}
// default

ComponentProfile.defaultProps={
    fullName:"This a default name",
    bio:"This a default bio",
    profession:"This is a default profession"
}

// props types
ComponentProfile.propTypes={
    fullName:propTypes.string.isRequired,
    bio:propTypes.string.isRequired,
    profession:propTypes.string.isRequired,
    handleName:propTypes.func

}

export default ComponentProfile