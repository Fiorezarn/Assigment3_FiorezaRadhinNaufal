const Joi = require("joi");
const {
  errorServerResponse,
  errorClientResponse,
} = require("@/helpers/responseHelper");
const { Product } = require("@/models");

const bodyValidation = (req, res, next) => {
  const schema = Joi.object({
    product_name: Joi.string().required(),
    product_price: Joi.number().required(),
    product_stock: Joi.number().required(),
    product_desc: Joi.string().required(),
    isActive: Joi.boolean(),
    created_by: Joi.number(),
    updated_by: Joi.number(),
  });
  const validationError = schema.validate(req.body).error;
  if (validationError) {
    errorClientResponse(res, validationError.details);
  }
  next();
};

const checkDuplicates = async (req, res, next) => {
  const { product_name } = req.body;
  try {
    const data = await Product.findOne({
      where: { product_name: product_name },
    });
    if (data) {
      errorClientResponse(res, `Product with ${product_name} already exists`);
    }
    next();
  } catch (error) {
    errorServerResponse(res, "Internal server error");
  }
};
module.exports = { bodyValidation, checkDuplicates };
