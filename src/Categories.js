import React from 'react';

const Categories = (props) => {
    
  return <div >
    <button className="filter-btn" onClick={()=>props.filterItems('all')}>All</button>
   <button className="filter-btn" onClick={()=>props.filterItems('breakfast')}>breakfast</button>

  </div>;
};

export default Categories;
