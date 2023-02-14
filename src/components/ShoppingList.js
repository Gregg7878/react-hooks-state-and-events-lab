import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  });

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothes">Clothes</option>
      </select>
      <ul>
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} price={item.price} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
