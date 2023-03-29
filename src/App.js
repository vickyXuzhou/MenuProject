import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItem, setMenuItem] = useState(items)

  function filterItems(item){
    if (item==="all"){
      return(setMenuItem(items))
      ;
    }
    
    let filteredEl = items.filter(elem=>elem.category===item)
   return(setMenuItem(filteredEl))
  }
  
  
  // const filterItems = (category) => {
  //   if (category === 'all') {
  //     setMenuItems(items);
  //     return;
  //   }
  //   const newItems = items.filter((item) => item.category === category);
  //   setMenuItems(newItems);
  // };

  return <main>
    <section className="menu section">
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
         <Categories filterItems={filterItems}/>
        <Menu items={menuItem}/>
      </div>
    </section>
  </main>;
}

export default App;
