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
            <ul class = "list"> 
                    
                    <p>Gender:{info.gender}</p> 
                    <p>Height:{info.height}</p>
                    <p>Mass:{info.mass}</p>
                    <p>BirthYear:{info.birth_year}</p>
                    <p>Eye Color:{info.eye_color}</p>
                    <p>Hair Color:{info.hair_color}</p>
                    <p>Skin color:{info.skin_color}</p>
                    
                    </ul>
        </div>
    );
};
    
  

  export default Character;


