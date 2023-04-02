import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";
import Character from "./components/Character.js";
import Details from "./components/Details.js";



const App = () => {
  const [character, setCharacter] = useState([]);
  const [currentCharacterName, setCurrentCharacterName] = useState('');


      const openDetails = (name) => {
        setCurrentCharacterName(name);
      };
      const closeDetails = () => {
        setCurrentCharacterName('');
      };


    useEffect(() => {

      axios.get('https://swapi.dev/api/people/')
      .then(res => {
        setCharacter(res.data);
        console.log(res.data);
      }) 
      .catch(err => console.error(err));
      
    }, []);

      
 


   

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">REACT WARS</h1>
      { character.map(char => {
        return <Character info={char} key={char.name} openDetails={openDetails} />
      })}
      {
        currentCharacterName != '' && <Details characterName = {currentCharacterName} close={closeDetails}    />
      }
      </div>
  );
};

export default App;
