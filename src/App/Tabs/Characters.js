import React, { useState, useEffect } from 'react';
import api from 'api.js';

// Characters

function Characters() {
  const [data, setData] = useState(null);
  useEffect(() => {
    //change the limit to get all the characters
    fetch('https://theofficeapi.dev/api/characters?limit=83', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!data) return '...';
  console.log(data)
  let eCharacters = data.results.map((result) => {
    return (
      <Character
        key={result.id}
        {...{
          character: result,
        }}
      />
    );
  });

  return (
    <div>
      <h2>characters:</h2>
      <button>characters that worked at Dunder Mifflin Scranton</button>
      <div className="characters">{eCharacters}</div>
    </div>
  );
}

function Character({ character }) {
  return (
    <a onClick={(e) => api.router.click(e, { tab: 'character', character: character.id })} href="/">
      {character.name}
    </a>
  );
}

export default Characters;
