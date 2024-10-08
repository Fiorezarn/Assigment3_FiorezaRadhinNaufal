const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  archiveProduct,
  deleteProduct,
  getAllProductArchive,
} = require("@/controllers/product");
const {
  bodyValidation,
  checkDuplicates,
} = require("@/controllers/validations/product");

router.get("/", getAllProducts);
router.get("/archived", getAllProductArchive);
router.get("/:id", getProductById);
router.post("/", bodyValidation, checkDuplicates, createProduct);
router.put("/:id", updateProductById);
router.patch("/:id", archiveProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
