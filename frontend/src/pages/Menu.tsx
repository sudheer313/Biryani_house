import React, { useState, useEffect } from "react";
import MenuItem from "../components/MenuItem";

interface IMenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const Menu: React.FC = () => {
  const [MenuItems, setMenuItems] = useState<IMenuItem[]>([]);

  useEffect(() => {
    //Fetch the menu items when the component mounts
    fetch("http://localhost:8080/menu")
      .then((response) => response.json())
      .then((data) => setMenuItems(data));
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MenuItems.map((item: IMenuItem) => (
          <MenuItem
            key={item.id}
            item={{ ...item, price: item.price.toString() }}
            addToCart={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
