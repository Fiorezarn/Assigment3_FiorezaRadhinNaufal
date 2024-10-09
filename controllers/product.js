const { Product } = require("@/models");
const {
  successResponseData,
  successResponse,
  errorServerResponse,
  errorClientResponse,
} = require("@/helpers/responseHelper");
const { Op, where } = require("sequelize");

const getAllProducts = async (req, res) => {
  try {
    const { search } = req.query;

    if (search) {
      const products = await Product.findAll({
        where: {
          [Op.or]: {
            product_name: { [Op.like]: `%${search}%` },
            product_desc: { [Op.like]: `%${search}%` },
          },
          [Op.and]: { isActive: 1 },
        },
      });
      successResponseData(res, "success get all products", products, 200);
    } else {
      const products = await Product.findAll({
        where: { isActive: 1 },
      });
      successResponseData(res, "success get all products", products, 200);
    }
  } catch (error) {
    console.log(error);
    errorServerResponse(res, "Failed get all products");
  }
};

const getAllProductArchive = async (req, res) => {
  try {
    const products = await Product.findAll({
      where: { isActive: 0 },
    });
    successResponseData(res, "Success get all product archive!", products, 200);
  } catch (error) {
    errorServerResponse(res, "Failed get all product archive");
  }
};

const findProductById = async (id) => {
  try {
    const product = await Product.findOne({
      where: { product_id: id },
    });
    return product;
  } catch (error) {
    throw new Error("Failed to get product");
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const products = await findProductById(id);
    if (!products) {
      errorClientResponse(res, `product with id ${id} not found!`, 404);
      return;
    }
    successResponseData(res, `product with id ${id} found!`, products, 200);
  } catch (error) {
    errorServerResponse(res, "Failed get product");
  }
};

const createProduct = async (req, res) => {
  try {
    const {
      product_name,
      product_price,
      product_stock,
      product_desc,
      created_by,
      updated_by,
    } = req.body;
    const newProduct = await Product.create({
      product_name: product_name,
      product_price: product_price,
      product_stock: product_stock,
      product_desc: product_desc,
      created_by: created_by,
      updated_by: updated_by,
    });
    successResponseData(res, "Successfully Create Product", newProduct);
  } catch (error) {
    errorServerResponse(res, "Failed Create Product!");
  }
};

const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await findProductById(id);
    if (!product) {
      errorClientResponse(res, `product with id ${id} not found!`, 404);
      return;
    }
    const {
      product_name,
      product_price,
      product_stock,
      product_desc,
      updated_by,
    } = req.body;
    await Product.update(
      {
        product_name: product_name,
        product_price: product_price,
        product_stock: product_stock,
        product_desc: product_desc,
        updated_by: updated_by,
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
    const product = await findProductById(id);
    if (!product) {
      errorClientResponse(res, `product with id ${id} not found!`, 404);
      return;
    }
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
    if (isActive === 0) {
      successResponse(res, `Product id ${id} is archived!`);
    } else {
      successResponse(res, `Product id ${id} is unarchived!`);
    }
  } catch (error) {
    errorServerResponse(res, "Failed archived product!");
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await findProductById(id);
    if (!product) {
      errorClientResponse(res, `product with id ${id} not found!`, 404);
      return;
    }
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
  getAllProductArchive,
  getProductById,
  createProduct,
  updateProductById,
  archiveProduct,
  deleteProduct,
  findProductById,
};
