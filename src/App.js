import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItem, setMenuItem] = useState(items)
  return <main>
    <section className="menu section">
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
         <Categories/>
        <Menu items={menuItem}/>
      </div>
    </section>
  </main>;
}

export default App;
