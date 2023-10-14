import React from 'react';
import { Data } from '../data';
import { useState } from 'react';

const Food = () => {
  const [foods, setFoods]=useState(Data);

  const filterCat=(category)=>{
    setFoods(Data.filter((item)=>{
      return item.category === category;
    }))
  }
  return (
    <div className='food-container'>
      <h1 className="h1-center">
        Order Food
      </h1>

        <div className='menu-filter'>
          <button onClick={()=>setFoods(Data)} className='menu-button'>ALL</button>
          <button onClick={()=>filterCat("chicken")} className='menu-button'>Chicken</button>
          <button onClick={()=>filterCat("pizza")} className='menu-button'>Pizza</button>
          <button onClick={()=>filterCat("salad")} className='menu-button'>Salad</button>
        </div>
      
      <div className='food-grid'>
        {foods.map((item) => (
          <div key={item.id} className='food-item'>
            <img src={item.image} alt={item.name} />
              <p className='item-name'>{item.name}</p>
              <div className="item-container">
              <p className="price-text">{"₹"}{item.price}</p>
              <a className='add-button'> ADD </a>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Food;

