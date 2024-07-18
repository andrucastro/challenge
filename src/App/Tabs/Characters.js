import React, { useState, useEffect } from 'react';
import api from 'api.js';

// Characters


function Characters() {
  const [data, setData] = useState(null);


function GetEmployeesFromDMF(data){
  const filteredArray = data.filter(employee => employee.workplace.includes('Dunder Mifflin Scranton'))
  setData(filteredArray)
 }

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        //change the limit to get all the characters
        const response = await fetch('https://theofficeapi.dev/api/characters?limit=83', {
          method: 'GET',
        });
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharacters()
  }, []);

  if (!data) return '...';

  let eCharacters = data.map((character) => {
    return (
      <Character
        key={character.id}
        character={character}
      />
    );
  });

  console.log(eCharacters)

  return (
    <div>
      <h2>characters:</h2>
      <button onClick={()=>{GetEmployeesFromDMF(data)}}>characters that worked at Dunder Mifflin Scranton</button>
      <div className="characters">{eCharacters}</div>
    </div>
  );
}

function Character({ character }) {
  return (
    <a
      onClick={(e) =>
        api.router.click(e, { tab: 'character', character: character.id })
      }
      href="/"
    >
      {character.name}
    </a>
  );
}

export default Characters;
