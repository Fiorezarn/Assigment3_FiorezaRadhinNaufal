/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - product_name
 *         - product_price
 *         - product_stock
 *         - product_desc
 *         - isActive
 *         - created_by
 *         - updated_by
 *       properties:
 *         product_id:
 *           type: integer
 *           description: The auto-generated id of the product
 *         product_name:
 *           type: string
 *           description: The name of your product
 *         product_price:
 *           type: integer
 *           description: The price of your product
 *         product_stock:
 *           type: integer
 *           description: The amount of your product in store
 *         product_desc:
 *           type: string
 *           description: The description of your product
 *         isActive:
 *           type: boolean
 *           description: Whether the product is active or not
 *         created_by:
 *           type: integer
 *           description: The id of the user who created the product
 *         updated_by:
 *           type: integer
 *           description: The id of the user who updated the product
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the product was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the product was updated
 *
 */
/**
 * @swagger
 * /product:
 *   get:
 *     summary: List all the products
 *     tags: [Products]
 *     parameters:
 *       - name: search
 *         in: query
 *         description: Search product by name
 *         type: string
 *         example: Nike
 *     responses:
 *       200:
 *         description: The list of the products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Failed get all products
 *   post:
 *     tags: [Products]
 *     summary: Create a new product
 *     description: Create a new product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The product was successfully created
 *       500:
 *         description: Failed to create product
 *
 * /product/archived:
 *   get:
 *     summary: List all the archived products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of the archived products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Failed get all product archive
 *
 * /product/{id}:
 *   get:
 *     summary: Get the product by id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The product id
 *     responses:
 *       200:
 *         description: Product with id {id} found!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product with id {id} not found!
 *       500:
 *         description: Failed to get product
 *   put:
 *     tags: [Products]
 *     summary: Update the product by the id
 *     description: Update the product by the id.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The product id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The product was updated successfully
 *       500:
 *         description: Failed to update product
 *   patch:
 *     tags: [Products]
 *     summary: Archive or unarchive the product
 *     description: Set `isActive` to `false` to archive the product, or `true` to unarchive it.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The product id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isActive:
 *                 type: boolean
 *                 description: Set `false` to archive, `true` to unarchive
 *             required:
 *               - isActive
 *     responses:
 *       200:
 *         description: The product was successfully archived/unarchived
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product with id {id} not found
 *       500:
 *         description: Failed to archive product
 *   delete:
 *     tags: [Products]
 *     summary: Delete the product
 *     description: Delete the product
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The product id
 *     responses:
 *       200:
 *         description: The product was deleted successfully
 *       500:
 *         description: Failed to delete product
 */

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

router.delete("/:id", deleteProduct);
router.get("/", getAllProducts);
router.get("/archived", getAllProductArchive);
router.get("/:id", getProductById);
router.post("/", bodyValidation, checkDuplicates, createProduct);
router.put("/:id", updateProductById);
router.patch("/:id", archiveProduct);

module.exports = router;
