const express = require("express");
const router = express.Router();
const DiscountController = require("../controllers/discountController");

/*
 * @swagger
 * tags:
 *   name: Discount
 *   description: Chegirmalarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/discounts:
 *   post:
 *     summary: Create a new admin
 *     tags: [Discount]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               discount:
 *                 type: string
 *               finish_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       '201':
 *         description: admin created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/discounts", DiscountController.createDiscount);

/** 
 * @swagger
 * /api/discounts:
 *   get:
 *     summary: Get all Discounts
 *     tags: [Discount]
 *     description: Barcha chegirmalar ro'yxatini olish
 *     responses:
 *       '200':
 *         description: List of discounts
 *       '500':
 *         description: Server error
 */
router.get("/discounts", DiscountController.getDiscount);

/** 
 * @swagger
 * /api/discounts/search:
 *   get:
 *     summary: Search Discount by name
 *     tags: [Discount]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         description: Search query for discount name
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: List of discounts matching the search query
 *       '400':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */
router.get("/discounts/search", DiscountController.searchDiscount);

/** 
 * @swagger
 *  /api/discounts/{id}:
 *    get:
 *      summary: Get discount by ID
 *      tags: [Discount]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Discount ID
 *          schema:
 *            type: integer
 *      responses:
 *        '200':
 *          description: Discount details
 *        '404':
 *          description: Discount not found
 *        '500':
 *          description: Server error
 */
router.get("/discounts/:id", DiscountController.getDiscountById);

/** 
 * @swagger
 * /api/discounts/{id}:
 *   put:
 *     summary: Update discount by ID
 *     tags: [Discount]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Discount ID
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Discount updated
 *       '400':
 *         description: Invalid input
 *       '404':
 *         description: Discount not found
 *       '500':
 *         description: Server error
 */
router.put("/discounts/:id", DiscountController.updateDiscount);

/**
 * @swagger
 * /api/discounts/{id}:
 *   delete:
 *     summary: Delete discount by ID
 *     tags: [Discount]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Discount ID
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Discount deleted
 *       '404':
 *         description: Discount not found
 *       '500':
 *         description: Server error
 */
router.delete("/discounts/:id", DiscountController.deleteDiscount);

module.exports = router;