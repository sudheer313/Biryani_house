// src/pages/Home.tsx

import React from "react";
import biryani from "../images/biryani.jpg";
const Home: React.FC = () => {
  return (
    <div>
      <img src={biryani} alt="biryani" className="w-full  object-cover  h-80" />
      <p>
        We serve the best food in town. Feel free to browse our menu and place
        your order.
      </p>
    </div>
  );
};

export default Home;
