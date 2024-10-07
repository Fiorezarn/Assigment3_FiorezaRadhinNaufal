const { Product } = require("@/models");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).send({
      status: "success",
      code: 200,
      message: "success get all products",
      data: products,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      code: 500,
      message: error.message,
    });
  }
};

module.exports = {
  getAllProducts,
};
