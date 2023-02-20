import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const toggleCart = () => {
    setIsInCart((prevValue) => !prevValue);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      {name} - ${category}
      <button onClick={toggleCart}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
