import React from 'react';
import api from 'api.js';

function Head({ tabs }) {
  const filteredTabs = tabs.filter( item => item.nav === true )
  let eTabs = filteredTabs.map((tab) => {
    return <Tab key={tab.id} {...{ tab }} />;
  });

  return (
    <div className="head">
      <div className="head-nav">{eTabs}</div>
    </div>
  );
}

function Tab({ tab }) {
  return (
    <a
      className={api.router.get('tab') === tab.id ? 'active' : ''}
      onClick={(event) => {
        api.router.click(event, 'tab', tab.id);
      }}
      href="/"
    >
      {tab.name}
    </a>
  );
}

export default Head;
