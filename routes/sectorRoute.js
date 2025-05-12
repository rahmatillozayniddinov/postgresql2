const express = require('express');
const router = express.Router();
const sectorController = require('../controllers/sectorController');

/**
 * @swagger
 * tags:
 *   name: Sector
 *   description: Sector management
 */

/**
 * @swagger
 * /api/sector:
 *   post:
 *     tags: [Sector]
 *     summary: Create a new ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ticket created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/sector', sectorController.createSector);

/**
 * @swagger
 * /api/sector:
 *   get:
 *     tags: [Sector]
 *     summary: List all status
 *     responses:
 *       200:
 *         description: List of status
 *       500:
 *         description: Server error
 */
router.get('/sector', sectorController.getSector);

/**
 * @swagger
 * /api/sector/search:
 *   get:
 *     tags: [Sector]
 *     summary: Search status by title or description
 *     parameters:
 *       - name: query
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query for ticket title or description
 *     responses:
 *       200:
 *         description: List of status matching the search query
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get('/sector/search', sectorController.searchSector);

/**
 * @swagger
 * /api/sector/{id}:
 *   get:
 *     tags: [Sector]
 *     summary: Get ticket by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket ID
 *     responses:
 *       200:
 *         description: Ticket details
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
router.get('/sector/:id', sectorController.getSectorById);

/**
 * @swagger
 * /api/sector/{id}:
 *   put:
 *     tags: [Sector]
 *     summary: Update ticket by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ticket updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
router.put('/sector/:id', sectorController.updateSector);

/**
 * @swagger
 * /api/sector/{id}:
 *   delete:
 *     tags: [Sector]
 *     summary: Delete ticket by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket ID
 *     responses:
 *       200:
 *         description: Ticket deleted
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
router.delete('/sector/:id', sectorController.deleteSector);

module.exports = router;