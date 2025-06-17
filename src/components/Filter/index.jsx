import { useState } from 'react';
import jacket from "../../assets/jacket.png";
import tech from "../../assets/computer.png";
import Cards from "./Cards"

const Filter = ({ selectedCategory, onCategoryChange, items }) => {
  const categories = [
    { icon: jacket, category: "Clothing" },
    { icon: tech, category: "Technology" }
  ];

  // Count items for each category
  const getItemCount = (category) => {
    if (!items) return 0;
    return items.filter(item => item.Category === category).length;
  };

  return (
    <section>
      <div className="bg-white rounded-2xl p-6 shadow-soft border border-slate-200">
        <h1 className="font-playfair text-xl font-semibold text-slate-800 mb-6 pb-2 border-b border-slate-200">Categories</h1>
        <div className="flex flex-col gap-3">
          {categories.map(({ icon, category }) => (
            <Cards 
              key={category}
              icon={icon} 
              category={category}
              isActive={selectedCategory === category}
              itemCount={getItemCount(category)}
              onClick={() => onCategoryChange(category)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Filter;
