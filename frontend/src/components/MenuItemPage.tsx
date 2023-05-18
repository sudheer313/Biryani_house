// src/pages/MenuItemPage.tsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuItem from "../components/MenuItem";

interface IMenuItem {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}
const MenuItemPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [menuItem, setMenuItem] = useState<IMenuItem | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/menu/${id}`)
      .then((response) => response.json())
      .then((data) => setMenuItem(data));
  }, [id]);

  if (!menuItem) {
    return <p>Loading....</p>;
  }
  return (
    <div className="container mx-auto">
      <MenuItem
        key={menuItem.id}
        item={{
          ...menuItem,
          price: menuItem.price.toString(),
        }}
        addToCart={() => {}}
      />
    </div>
  );
};

export default MenuItemPage;
