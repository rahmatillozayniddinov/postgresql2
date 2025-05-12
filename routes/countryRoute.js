const express = require("express");
const router = express.Router();
const CountryController = require("../controllers/countryController");

/**
 * @swagger
 * tags:
 *   name: Country
 *   description: Foydalanuvchilar boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/country:
 *   post:
 *     summary: Create a new country
 *     tags: [Country]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               country:
 *                 type: string
 *     responses:
 *       '201':
 *         description: admin created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/country", CountryController.createCountry);

/**
 * @swagger
 * /api/country:
 *   get:
 *     summary: Get all cart_item
 *     tags: [Country]
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:
 *       '201':
 *         description: cart_item created
 *       '500':
 *         description: Server error
 */
router.get("/country", CountryController.getcountrys);

/**
 * @swagger
 * /api/country/search:
 *   get:
 *     summary: Search cart_item by name or email
 *     tags: [Country]
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
router.get("/country/search", CountryController.searchcountrys);

/**
 * @swagger
 *  /api/country/{id}:
 *    get:
 *      summary: Get cart_item by ID
 *      tags: [Country]
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
router.get("/country/:id", CountryController.getCountryById);

/**
 * @swagger
 * /api/country/{id}:
 *   put:
 *     summary: Update cart_item by ID
 *     tags: [Country]
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
router.put("/country/:id", CountryController.updatecountry);

/**
 * @swagger
 * /api/country/{id}:
 *   delete:
 *     summary: Delete cart_item by ID
 *     tags: [Country]
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
router.delete("/country/:id", CountryController.deleteCountry);

module.exports = router;
