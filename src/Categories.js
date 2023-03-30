import React from 'react';

const Categories = ({filterItems,ButtonEl}) => {
  console.log(ButtonEl)
return(
  <div className="btn-container">{
     ButtonEl.map((elem,index)=>{
      return(
        <button
        type='button'
        className="filter-btn"
        onClick={()=>filterItems(elem)}
        key={index}
        >
          {elem}
        </button>
      )
     })
        
    }
  </div>
)
// return (
  // <div className="btn-container">
  //   {categories.map((category, index) => {
  //     return (
  //       <button
  //         type="button"
  //         className="filter-btn"
  //         key={index}
  //         onClick={() => filterItems(category)}
  //       >
  //         {category}
  //       </button>
  //     );
  //   })}
  // </div>
// );
 
};

export default Categories;
