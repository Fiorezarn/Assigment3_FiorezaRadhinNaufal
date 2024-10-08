const Joi = require("joi");
const {
  errorServerResponse,
  errorClientResponse,
} = require("@/helpers/responseHelper");
const { Product } = require("@/models");

const bodyValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    stock: Joi.number().required(),
    createdBy: Joi.number().required(),
    updatedBy: Joi.number().required(),
    isActive: Joi.number(),
  });
  const validationError = schema.validate(req.body).error;
  if (validationError) {
    errorClientResponse(res, validationError.details);
  }
  next();
};

const checkDuplicates = async (req, res, next) => {
  const { name } = req.body;
  try {
    const data = await Product.findOne({ where: { product_name: name } });
    if (data) {
      errorClientResponse(res, `Product with ${name} already exists`);
    }
    next();
  } catch (error) {
    errorServerResponse(res, "Internal server error");
  }
};
module.exports = { bodyValidation, checkDuplicates };
