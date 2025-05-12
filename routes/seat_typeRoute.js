const express = require('express');
const router = express.Router();
const seat_typeController = require('../controllers/seat_typeController');

/**
 * @swagger
 * tags:
 *   name: Seat_type
 *   description: Seat management
 */

/**
 * @swagger
 * /api/seat_type:
 *   post:
 *     tags: [Seat_type]
 *     summary: Create a new seat
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
 *         description: Seat created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/seat_type', seat_typeController.createSeat_type);

/**
 * @swagger
 * /api/seat_type:
 *   get:
 *     tags: [Seat_type]
 *     summary: List all seats
 *     responses:
 *       200:
 *         description: List of seats
 *       500:
 *         description: Server error
 */
router.get('/seat_type', seat_typeController.getSeat_type);

/**
 * @swagger
 * /api/seat_type/search:
 *   get:
 *     tags: [Seat_type]
 *     summary: Search seats by number or section
 *     parameters:
 *       - name: query
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query for seat number or section
 *     responses:
 *       200:
 *         description: List of seats matching the search query
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get('/seat_type/search', seat_typeController.searchSeat_type);

/**
 * @swagger
 * /api/seat_type/{id}:
 *   get:
 *     tags: [Seat_type]
 *     summary: Get seat by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Seat ID
 *     responses:
 *       200:
 *         description: Seat details
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
router.get('/seat_type/:id', seat_typeController.getSeat_typeById);

/**
 * @swagger
 * /api/seat_type/{id}:
 *   put:
 *     tags: [Seat_type]
 *     summary: Update seat by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Seat ID
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
 *         description: Seat updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
router.put('/seat_type/:id', seat_typeController.updateSeat_type);

/**
 * @swagger
 * /api/seat_type/{id}:
 *   delete:
 *     tags: [Seat_type]
 *     summary: Delete seat by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Seat ID
 *     responses:
 *       200:
 *         description: Seat deleted
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
router.delete('/seat_type/:id', seat_typeController.deleteSeat_type);

module.exports = router;
