const express = require("express");
const router = express.Router();
const Delivery_methodController = require("../controllers/delivery_methodController");

/**
 * @swagger
 * tags:
 *   name: Delivery_method
 *   description: Foydalanuvchilar boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/delivery_method:
 *   post:
 *     summary: Create a new delivery_method
 *     tags: [Delivery_method]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       '201':
 *         description: delivery_method created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/delivery_method", Delivery_methodController.createDelivery_method);

/**
 * @swagger
 * /api/delivery_method:
 *   get:
 *     summary: Get all cart_item
 *     tags: [Delivery_method]
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:
 *       '201':
 *         description: cart_item created
 *       '500':
 *         description: Server error
 */
router.get("/delivery_method", Delivery_methodController.getDelivery_methods);

/**
 * @swagger
 * /api/delivery_method/search:
 *   get:
 *     summary: Search cart_item by name or email
 *     tags: [Delivery_method]
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
router.get("/delivery_method/search", Delivery_methodController.searchDelivery_methods);

/**
 * @swagger
 *  /api/delivery_method/{id}:
 *    get:
 *      summary: Get cart_item by ID
 *      tags: [Delivery_method]
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
router.get("/delivery_method/:id", Delivery_methodController.getDelivery_methodById);

/**
 * @swagger
 * /api/delivery_method/{id}:
 *   put:
 *     summary: Update cart_item by ID
 *     tags: [Delivery_method]
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
router.put("/delivery_method/:id", Delivery_methodController.updateDelivery_method);

/**
 * @swagger
 * /api/delivery_method/{id}:
 *   delete:
 *     summary: Delete cart_item by ID
 *     tags: [Delivery_method]
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
router.delete("/delivery_method/:id", Delivery_methodController.deleteDelivery_method);

module.exports = router;
