import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const categoriesState = ["all",...new Set(items.map(elem=>elem.category))]
  
 const [MenuItem, setMenuItem] = useState(items)
 const [ButtonEl, setButtonEl] = useState(categoriesState)
//  console.log(ButtonEl)
function filterItems(category){
  if(category==="all"){
    setMenuItem(items)
    return
  }
  const filteredElem = items.filter(item=>item.category===category)
  setMenuItem(filteredElem)
}

  return <main>
    <section className="menu section">
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
         <Categories filterItems={filterItems} ButtonEl={ButtonEl}
         />
         <Menu MenuItem={MenuItem}/>
      </div>
    </section>
  </main>;
}

export default App;
