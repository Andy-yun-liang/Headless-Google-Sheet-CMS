import { useState, useEffect } from 'react';
import Filter from './Filter';
import ItemList from './ItemList';

export default function ShoppingSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://script.google.com/macros/s/AKfycbx1eb8oBUGEYIlIqTviM575a0NGkFSe9aLE5sgaV9QMQsbfnMv0MObTm_rIrIuPepkd0w/exec")
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div className="flex pt-8 gap-4">
      <Filter 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        items={items}
      />
      <ItemList selectedCategory={selectedCategory} items={items} isLoading={isLoading} />
    </div>
  );
} 