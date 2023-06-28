const axios = require("axios");
const { DB_PORT } = process.env;

module.exports.postProducts = async function (product) {
    let productDB = {
      model: product.model,
      lateral: product.lateral,
      fabric: product.fabric,
      description: product.description,
      color: product.color,
      mesures: product.mesures,
      price: product.price,
      rating: product.rating,
    };
    await axios
      .post(`http://localhost:${DB_PORT}/courses`, productDB)
      .then(function (response) {
        //console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };