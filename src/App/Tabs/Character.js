import React, { useState, useEffect } from 'react';

function Character({ character }) {
  const [data, setData] = useState(null);
  console.log(data);
  useEffect(() => {
    fetch(`https://theofficeapi.dev/api/character/${character}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, [character]);

  if (!data) return '...';

  return (
    <div>
      <h2>{data.name}</h2>

      <div className="charactherTable">
        <div className="column">
          <div>actor</div>
          <div>firstAppearance</div>
          <div>gender</div>
          <div>id</div>
          <div>job</div>
          <div>lastAppearance</div>
          <div>marital</div>
        </div>
        <div className="column">
          <div>{data.actor ? data.actor : " No information provided " }</div>
          <div>{data.firstAppearance ? data.firstAppearance : " No information provided "}</div>
          <div>{data.gender ? data.gender : " No information provided "}</div>
          <div>{data.id ? data.id : " No information provided "}</div>
          <div>{data.job ? data.job : " No information provided "}</div>
          <div>{data.lastAppearance ? data.lastAppearance : " No information provided "}</div>
          <div>{data.marital ? data.marital : " No information provided " }</div>
        </div>
      </div>
    </div>
  );
}

export default Character;
