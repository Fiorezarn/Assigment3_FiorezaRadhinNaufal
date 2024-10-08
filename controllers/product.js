const { Product } = require("@/models");
const {
  successResponseCreateData,
  successResponseGetData,
  errorServerResponse,
  errorClientResponse,
} = require("@/helpers/responseHelper");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    successResponseGetData(res, "success get all products", code, products);
  } catch (error) {
    errorServerResponse(res, "Failed get all products");
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const products = await Product.findOne({
      where: { product_id: id },
    });
    if (!products) {
      errorClientResponse(res, `product with id ${id} not found!`, 404);
    }
    successResponseGetData(res, `product with id ${id} found!`, products, data);
  } catch (error) {
    console.log(error);
    errorServerResponse(res, "Failed get product");
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, price, stock, createdBy, updatedBy } = req.body;
    const newProduct = await Product.create({
      product_name: name,
      product_price: price,
      product_stock: stock,
      created_by: createdBy,
      updated_by: updatedBy,
      isActive: 1,
    });
    successResponseCreateData(
      res,
      "Successfully Create Product",
      newProduct,
      code
    );
  } catch (error) {
    errorServerResponse(res, "Failed get product!");
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};
