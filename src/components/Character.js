// Write your Character component here
import React from 'react';
import axios from 'axios';


const Character = (props) => {

    const { info, openDetails } = props;
    

    return (
        <div className= 'character'>
         <h1> {info.name} </h1>
        
            <button onClick={() => openDetails(props.info.name)}>
                {props.info.birth_year}
            </button>
        </div>
    );
};
    
  

  export default Character;


