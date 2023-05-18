// src/pages/Home.tsx

import React from "react";
import biryani from "../images/biryani.jpg";
const Home: React.FC = () => {
  return (
    <div className="relative bg-black h-96">
      <img
        src={biryani}
        alt="biryani"
        className="w-full  object-cover  h-screen"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
        <h2 className="text-2xl text-white font-semibold">
          Welcome to Our Restaurent
        </h2>
        <p className="text-white">
          We serve the best food in town. Feel free to browse our menu and place
          your order.
        </p>
      </div>
    </div>
  );
};

export default Home;
