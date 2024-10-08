const { Product } = require("@/models");
const {
  successResponseData,
  successResponse,
  errorServerResponse,
  errorClientResponse,
} = require("@/helpers/responseHelper");
const { Op } = require("sequelize");

const getAllProducts = async (req, res) => {
  try {
    const searchInput = req.query;

    // if (searchInput) {
    //   const products = await Product.findAll({
    //     where: {
    //       [Op.or]: {
    //         product_name: searchInput,
    //         product_price: searchInput,
    //       },
    //     },
    //   });
    //   successResponseData(res, "success get all products", products, 200);
    // }
    const products = await Product.findAll();
    successResponseData(res, "success get all products", products, 200);
  } catch (error) {
    console.log(error);
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
    successResponseData(res, `product with id ${id} found!`, products, 200);
  } catch (error) {
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
    successResponseData(res, "Successfully Create Product", newProduct);
  } catch (error) {
    errorServerResponse(res, "Failed Create Product!");
  }
};

const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, price, stock, createdBy, updatedBy } = req.body;
    await Product.update(
      {
        product_name: name,
        product_image: image,
        product_price: price,
        product_stock: stock,
        created_by: createdBy,
        updated_by: updatedBy,
        isActive: 1,
      },
      {
        where: {
          product_id: id,
        },
      }
    );

    successResponse(res, `Successfully update product with id ${id}`);
  } catch (error) {
    errorServerResponse(res, "Failed update product");
  }
};

const archiveProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;
    await Product.update(
      {
        isActive: isActive,
      },
      {
        where: {
          product_id: id,
        },
      }
    );
    successResponse(res, `Product id ${id} is archived!`);
  } catch (error) {
    errorServerResponse(res, "Failed archived product!");
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.destroy({
      where: {
        product_id: id,
      },
    });
    successResponse(res, `Succesfully delete product id ${id}`);
  } catch (error) {
    errorServerResponse(res, "Failed delete product");
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  archiveProduct,
  deleteProduct,
};
