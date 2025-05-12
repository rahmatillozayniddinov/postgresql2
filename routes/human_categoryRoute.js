const express = require('express');
const router = express.Router();
const human_categoryController = require('../controllers/human_categoryController');

/**
 * @swagger
 * tags:
 *   name: HumanCategories
 *   description: Human Category management
 */

/**
 * @swagger
 * /api/human-categories:
 *   post:
 *     tags: [HumanCategories]
 *     summary: Create a new human category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: number
 *               finish_age:
 *                 type: number
 *               gender_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: Human category created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/human-categories', human_categoryController.createHuman_category);

/**
 * @swagger
 * /api/human-categories:
 *   get:
 *     tags: [HumanCategories]
 *     summary: List all human categories
 *     responses:
 *       200:
 *         description: List of human categories
 *       500:
 *         description: Server error
 */
router.get('/human-categories', human_categoryController.getHuman_categorys);

/**
 * @swagger
 * /api/human-categories/search:
 *   get:
 *     tags: [HumanCategories]
 *     summary: Search human categories by name
 *     parameters:
 *       - name: name
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Name to search for
 *     responses:
 *       200:
 *         description: List of human categories matching the name
 *       400:
 *         description: Name is required
 *       500:
 *         description: Server error
 */
router.get('/human-categories/search', human_categoryController.searchHuman_category);

/**
 * @swagger
 * /api/human-categories/{id}:
 *   get:
 *     tags: [HumanCategories]
 *     summary: Get human category by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Human category ID
 *     responses:
 *       200:
 *         description: Human category details
 *       404:
 *         description: Human category not found
 *       500:
 *         description: Server error
 */
router.get('/human-categories/:id', human_categoryController.getHuman_categoryById);

/**
 * @swagger
 * /api/human-categories/{id}:
 *   put:
 *     tags: [HumanCategories]
 *     summary: Update human category by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Human category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: string
 *               finish_age:
 *                 type: string
 *               gender:
 *                 type: number
 *     responses:
 *       200:
 *         description: Human category updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Human category not found
 *       500:
 *         description: Server error
 */
router.put('/human-categories/:id', human_categoryController.updateHuman_category);

/**
 * @swagger
 * /api/human-categories/{id}:
 *   delete:
 *     tags: [HumanCategories]
 *     summary: Delete human category by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Human category ID
 *     responses:
 *       200:
 *         description: Human category deleted
 *       404:
 *         description: Human category not found
 *       500:
 *         description: Server error
 */
router.delete('/human-categories/:id', human_categoryController.deleteHuman_category);

module.exports = router;