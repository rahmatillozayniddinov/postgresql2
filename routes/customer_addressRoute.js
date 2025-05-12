const express = require("express");
const router = express.Router();
const Customer_addressController = require("../controllers/customer_addressController");

/**
 * @swagger
 * tags:
 *   name: Customer_address
 *   description: Foydalanuvchilar boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/customer_address:
 *   post:
 *     summary: Create a new customer_address
 *     tags: [Customer_address]
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
 *               country_id:
 *                 type: number
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat_id:
 *                 type: number
 *               location:
 *                 type: string
 *               post_index:
 *                 type: string
 *               info:
 *                 type: string
 *     responses:
 *       '201':
 *         description: customer_address created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/customer_address", Customer_addressController.createCustomer_address);

/**
 * @swagger
 * /api/customer_address:
 *   get:
 *     summary: Get all cart_item
 *     tags: [Customer_address]
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:
 *       '201':
 *         description: cart_item created
 *       '500':
 *         description: Server error
 */
router.get("/customer_address", Customer_addressController.getCustomer_address);

/**
 * @swagger
 * /api/customer_address/search:
 *   get:
 *     summary: Search cart_item by name or email
 *     tags: [Customer_address]
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
router.get("/customer_address/search", Customer_addressController.searchCustomer_address);

/**
 * @swagger
 *  /api/customer_address/{id}:
 *    get:
 *      summary: Get cart_item by ID
 *      tags: [Customer_address]
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
router.get("/customer_address/:id", Customer_addressController.getCustomer_addressById);

/**
 * @swagger
 * /api/customer_address/{id}:
 *   put:
 *     summary: Update cart_item by ID
 *     tags: [Customer_address]
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
router.put("/customer_address/:id", Customer_addressController.updateCustomer_address);

/**
 * @swagger
 * /api/customer_address/{id}:
 *   delete:
 *     summary: Delete cart_item by ID
 *     tags: [Customer_address]
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
router.delete("/customer_address/:id", Customer_addressController.deleteCustomer_address);

module.exports = router;
