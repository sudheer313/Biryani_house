const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("hello world!");
});
//routes for menu
app.get("/menu", (req, res) => {
  const menuItems = [
    {
      name: "Chicken Biryani",
      description:
        "Aromatic basmati rice cooked with tender chicken and spices",
      price: 10.99,
    },
    {
      name: "Vegetable Biryani",
      description: "A vegetarian version of our aromatic basmati rice dish",
      price: 8.99,
    },
  ];
  res.json("menuItems");
});

//routes for orders
app.post("/orders", (req, res) => {
  res.json({ message: "order palced sucessfully" });
});

app.listen(8080, () => {
  console.log("server started on port 8080");
});
