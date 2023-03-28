import React from 'react';

const Categories = (props) => {
    
  return <button onClick={()=>props.filterItems('breakfast')}>breakfast</button>;
};

export default Categories;
