const express = require("express");
const router = express.Router();
const DistrictController = require("../controllers/districtController");

/**
 * @swagger
 * tags:
 *   name: District
 *   description: Foydalanuvchilar boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/district:
 *   post:
 *     summary: Create a new district
 *     tags: [District]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: number
 *     responses:
 *       '201':
 *         description: district created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/district", DistrictController.createDistrict);

/**
 * @swagger
 * /api/district:
 *   get:
 *     summary: Get all district
 *     tags: [District]
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:
 *       '201':
 *         description: district created
 *       '500':
 *         description: Server error
 */
router.get("/district", DistrictController.getDistricts);

/**
 * @swagger
 * /api/district/search:
 *   get:
 *     summary: Search district by name or email
 *     tags: [District]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         description: Search query for district name or email
 *         schema:
 *           type: string
 *     responses:
 *       '201':
 *         description: List of district matching the search query
 *       '400':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */
router.get("/delivery_method/search", DistrictController.searchDistricts);

/**
 * @swagger
 *  /api/district/{id}:
 *    get:
 *      summary: Get district by ID
 *      tags: [District]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: district ID
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
router.get("/district/:id", DistrictController.getDistrictById);

/**
 * @swagger
 * /api/district/{id}:
 *   put:
 *     summary: Update district by ID
 *     tags: [District]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: district ID
 *         schema:
 *           type: integer
 *     responses:
 *       '201':
 *         description: district updated
 *       '400':
 *         description: Invalid input
 *       '404':
 *         description: cart_item not found
 *       '500':
 *         description: Server error
 */
router.put("/district/:id", DistrictController.updateDistrict);

/**
 * @swagger
 * /api/district/{id}:
 *   delete:
 *     summary: Delete district by ID
 *     tags: [District]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: district ID
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: district deleted
 *       '404':
 *         description: district not found
 *       '500':
 *         description: Server error
 */
router.delete("/district/:id", DistrictController.deleteDistrict);

module.exports = router;
