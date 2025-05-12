const express = require("express");
const router = express.Router();
const Cart_itemController = require("../controllers/cart_itemController");

/**
 * @swagger
 * tags:
 *   name: Cart_item
 *   description: Foydalanuvchilar boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/cart_item:
 *   post:
 *     summary: Create a new cart_item
 *     tags: [Cart_item]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               cart_id:
 *                 type: number
 *               quantity:
 *                 type: number
 *     responses:
 *       '201':
 *         description: admin created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/cart_item", Cart_itemController.createCart_item);

/**
 * @swagger
 * /api/cart_item:
 *   get:
 *     summary: Get all cart_item
 *     tags: [Cart_item]
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:
 *       '201':
 *         description: cart_item created
 *       '500':
 *         description: Server error
 */
router.get("/cart_item", Cart_itemController.getcart_items);

/**
 * @swagger
 * /api/cart_item/search:
 *   get:
 *     summary: Search cart_item by name or email
 *     tags: [Cart_item]
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
router.get("/cart_item/search", Cart_itemController.searchCart_items);

/**
 * @swagger
 *  /api/cart_item/{id}:
 *    get:
 *      summary: Get cart_item by ID
 *      tags: [Cart_item]
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
router.get("/cart_item/:id", Cart_itemController.getCart_itemById);

/**
 * @swagger
 * /api/cart_item/{id}:
 *   put:
 *     summary: Update cart_item by ID
 *     tags: [Cart_item]
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
router.put("/cart_item/:id", Cart_itemController.updateCart_item);

/**
 * @swagger
 * /api/cart_item/{id}:
 *   delete:
 *     summary: Delete cart_item by ID
 *     tags: [Cart_item]
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
router.delete("/cart_item/:id", Cart_itemController.deleteCart_item);

module.exports = router;
