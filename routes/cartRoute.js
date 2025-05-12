const express = require("express");
const router = express.Router();
const CartController = require("../controllers/cartController");

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Foydalanuvchilar boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/cart:
 *   post:
 *     summary: Create a new cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               createdAt:
 *                 type: string
 *                 format: date
 *               finishedAt:
 *                 type: string
 *                 format: date
 *               status_id:
 *                 type: number
 *     responses:
 *       '201':
 *         description: admin created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/cart", CartController.createCart);

/**
 * @swagger
 * /api/cart:
 *   get:
 *     summary: Get all cart_item
 *     tags: [Cart]
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:
 *       '201':
 *         description: cart_item created
 *       '500':
 *         description: Server error
 */
router.get("/cart", CartController.getCart);

/**
 * @swagger
 * /api/cart/search:
 *   get:
 *     summary: Search cart_item by name or email
 *     tags: [Cart]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         description: Search query for cart_item name or email
 *         schema:
 *           type: string
 *     responses:
 *       '201':
 *         description: List of cart_item matching the search query
 *       '400':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */
router.get("/cart/search", CartController.searchCart);

/**
 * @swagger
 *  /api/cart/{id}:
 *    get:
 *      summary: Get cart_item by ID
 *      tags: [Cart]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: cart_item ID
 *          schema:
 *            type: integer
 *      responses:
 *        '201':
 *          description: cart_item details
 *        '400':
 *          description: cart_item not found
 *        '500':
 *          description: Server error
 */
router.get("/cart/:id", CartController.getCartById);

/**
 * @swagger
 * /api/cart/{id}:
 *   put:
 *     summary: Update cart_item by ID
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: cart_item ID
 *         schema:
 *           type: integer
 *     responses:
 *       '201':
 *         description: cart_item updated
 *       '400':
 *         description: Invalid input
 *       '404':
 *         description: cart_item not found
 *       '500':
 *         description: Server error
 */
router.put("/cart/:id", CartController.updateCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   delete:
 *     summary: Delete cart_item by ID
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: cart_item ID
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: cart_item deleted
 *       '404':
 *         description: cart_item not found
 *       '500':
 *         description: Server error
 */
router.delete("/cart/:id", CartController.deleteCart);

module.exports = router;
