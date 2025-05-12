const express = require("express");
const router = express.Router();
const CustomerController = require("../controllers/customerController");

/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: Foydalanuvchilar boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/customer:
 *   post:
 *     summary: Create a new customer
 *     tags: [Customer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               email:
 *                 type: string
 *               birth_date:
 *                 type: string
 *                 format: date
 *               gender_id:
 *                 type: number
 *               lang_id:
 *                 type: number
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       '201':
 *         description: customer created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/customer", CustomerController.createCustomer);

/**
 * @swagger
 * /api/customer:
 *   get:
 *     summary: Get all cart_item
 *     tags: [Customer]
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:
 *       '201':
 *         description: cart_item created
 *       '500':
 *         description: Server error
 */
router.get("/customer", CustomerController.getCustomers);

/**
 * @swagger
 * /api/customer/search:
 *   get:
 *     summary: Search cart_item by name or email
 *     tags: [Customer]
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
router.get("/customer/search", CustomerController.searchCustomers);

/**
 * @swagger
 *  /api/customer/{id}:
 *    get:
 *      summary: Get cart_item by ID
 *      tags: [Customer]
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
router.get("/customer/:id", CustomerController.getCustomerById);

/**
 * @swagger
 * /api/customer/{id}:
 *   put:
 *     summary: Update cart_item by ID
 *     tags: [Customer]
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
router.put("/customer/:id", CustomerController.updateCustomer);

/**
 * @swagger
 * /api/customer/{id}:
 *   delete:
 *     summary: Delete cart_item by ID
 *     tags: [Customer]
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
router.delete("/customer/:id", CustomerController.deleteCustomer);

module.exports = router;
