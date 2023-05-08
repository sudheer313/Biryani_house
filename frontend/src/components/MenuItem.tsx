import React from "react";
interface MenuItemProps {
  item: {
    id: number;
    name: string;
    image: string;
    description: string;
    price: string;
  };
  addToCart: (id: number) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, addToCart }) => {
  const { id, name, image, description, price } = item;
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={image} alt={name} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>"
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-lg font-semibold mb-4">${parseFloat(price).toFixed(2)}</p>
      <button
        onClick={() => addToCart(id)}
        className="bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default MenuItem;
