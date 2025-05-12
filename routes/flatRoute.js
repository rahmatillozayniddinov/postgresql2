const express = require('express');
const router = express.Router();
const flatController = require('../controllers/flatController');

/**
 * @swagger
 * tags:
 *   name: Flat
 *   description: Flat management
 */

/**
 * @swagger
 * /api/flat:
 *   post:
 *     tags: [Flat]
 *     summary: Create a new event
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               floor:
 *                 type: number
 *               condition:
 *                 type: string
 *     responses:
 *       201:
 *         description: Event created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/flat', flatController.createFlat);

/**
 * @swagger
 * /api/flat:
 *   get:
 *     tags: [Flat]
 *     summary: List all flat
 *     responses:
 *       200:
 *         description: List of flat
 *       500:
 *         description: Server error
 */
router.get('/flat', flatController.getFlats);

/**
 * @swagger
 * /api/flat/search:
 *   get:
 *     tags: [Flat]
 *     summary: Search flat by name
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
router.get('/flat/search', flatController.searchFlat);

/**
 * @swagger
 * /api/flat/{id}:
 *   get:
 *     tags: [Flat]
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
router.get('/flat/:id', flatController.getFlatById);

/**
 * @swagger
 * /api/flat/{id}:
 *   put:
 *     tags: [Flat]
 *     summary: Update flat by ID
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
 *               floor:
 *                 type: number
 *               condition:
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
router.put('/flat/:id', flatController.updateFlat);

/**
 * @swagger
 * /api/flat/{id}:
 *   delete:
 *     tags: [Flat]
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
router.delete('/flat/:id', flatController.deleteFlat);

module.exports = router;
