const express = require('express');
const router = express.Router();
const genderController = require('../controllers/genderController');

/**
 * @swagger
 * tags:
 *   name: Gender
 *   description: Gender management
 */

/**
 * @swagger
 * /api/gender:
 *   post:
 *     tags: [Gender]
 *     summary: Create a new gender
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
 *       201:
 *         description: Event created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/gender', genderController.createGender);

/**
 * @swagger
 * /api/gender:
 *   get:
 *     tags: [Gender]
 *     summary: List all flat
 *     responses:
 *       200:
 *         description: List of flat
 *       500:
 *         description: Server error
 */
router.get('/gender', genderController.getGenders);

/**
 * @swagger
 * /api/gender/search:
 *   get:
 *     tags: [Gender]
 *     summary: Search gender by name
 *     parameters:
 *       - name: query
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query for event name
 *     responses:
 *       200:
 *         description: List of flat matching the search query
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get('/gender/search', genderController.searchGender);

/**
 * @swagger
 * /api/gender/{id}:
 *   get:
 *     tags: [Gender]
 *     summary: Get event by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event details
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
router.get('/gender/:id', genderController.getGenderById);

/**
 * @swagger
 * /api/gender/{id}:
 *   put:
 *     tags: [Gender]
 *     summary: Update gender by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Event ID
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
 *       200:
 *         description: Event updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
router.put('/gender/:id', genderController.updateGender);

/**
 * @swagger
 * /api/gender/{id}:
 *   delete:
 *     tags: [Gender]
 *     summary: Delete event by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event deleted
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
router.delete('/gender/:id', genderController.deleteGender);

module.exports = router;
