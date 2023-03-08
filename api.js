const axios = require("axios");

const createOrder = (order) => {
  return axios.post("http://localhost:8080/orders", order);
};

module.exports = {
  createOrder,
};
