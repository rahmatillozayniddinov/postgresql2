const express = require("express");
const router = express.Router();
const Customer_cardController = require("../controllers/customer_card");

/**
 * @swagger
 * tags:
 *   name: Customer_card
 *   description: Foydalanuvchilar boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/customer_card:
 *   post:
 *     summary: Create a new customer_card
 *     tags: [Customer_card]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
 *     responses:
 *       '201':
 *         description: customer_card created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/customer_card", Customer_cardController.createCustomer_card);

/**
 * @swagger
 * /api/customer_card:
 *   get:
 *     summary: Get all cart_item
 *     tags: [Customer_card]
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:
 *       '201':
 *         description: cart_item created
 *       '500':
 *         description: Server error
 */
router.get("/customer_card", Customer_cardController.getCustomer_cards);

/**
 * @swagger
 * /api/customer_card/search:
 *   get:
 *     summary: Search cart_item by name or email
 *     tags: [Customer_card]
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
router.get("/customer_card/search", Customer_cardController.searchCustomer_cards);

/**
 * @swagger
 *  /api/customer_card/{id}:
 *    get:
 *      summary: Get cart_item by ID
 *      tags: [Customer_card]
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
router.get("/customer_card/:id", Customer_cardController.getCustomer_cardById);

/**
 * @swagger
 * /api/customer_card/{id}:
 *   put:
 *     summary: Update cart_item by ID
 *     tags: [Customer_card]
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
router.put("/customer_card/:id", Customer_cardController.updateCustomer_card);

/**
 * @swagger
 * /api/customer_card/{id}:
 *   delete:
 *     summary: Delete cart_item by ID
 *     tags: [Customer_card]
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
router.delete("/customer_card/:id", Customer_cardController.deleteCustomer_card);

module.exports = router;
