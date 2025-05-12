const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/adminController");

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Foydalanuvchilar boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/admins:
 *   post:
 *     summary: Create a new admin
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_creator:
 *                 type: boolean
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       '201':
 *         description: admin created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/admins", AdminController.createAdmin);

/**
 * @swagger
 * /api/admins:
 *   get:
 *     summary: Get all Admin
 *     tags: [Admin]
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:
 *       '201':
 *         description: admin created
 *       '500':
 *         description: Server error
 */
router.get("/admins", AdminController.getAdmin);

/**
 * @swagger
 * /api/admins/search:
 *   get:
 *     summary: Search Admin by name or email
 *     tags: [Admin]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         description: Search query for admin name or email
 *         schema:
 *           type: string
 *     responses:
 *       '201':
 *         description: List of Admin matching the search query
 *       '400':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */
router.get("/admins/search", AdminController.searchAdmin);

/**
 * @swagger
 *  /api/admins/{id}:
 *    get:
 *      summary: Get admin by ID
 *      tags: [Admin]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: admin ID
 *          schema:
 *            type: integer
 *      responses:
 *        '201':
 *          description: admin details
 *        '400':
 *          description: admin not found
 *        '500':
 *          description: Server error
 */
router.get("/admins/:id", AdminController.getAdminById);

/**
 * @swagger
 * /api/admins/{id}:
 *   put:
 *     summary: Update admin by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: admin ID
 *         schema:
 *           type: integer
 *     responses:
 *       '201':
 *         description: admin updated
 *       '400':
 *         description: Invalid input
 *       '404':
 *         description: admin not found
 *       '500':
 *         description: Server error
 */
router.put("/admins/:id", AdminController.updateAdmin);

/**
 * @swagger
 * /api/admins/{id}:
 *   delete:
 *     summary: Delete admin by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: admin ID
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: admin deleted
 *       '404':
 *         description: admin not found
 *       '500':
 *         description: Server error
 */
router.delete("/admins/:id", AdminController.deleteAdmin);

module.exports = router;
