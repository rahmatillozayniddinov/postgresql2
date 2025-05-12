const express = require('express');
const router = express.Router();
const statusController = require('../controllers/statusController');

/**
 * @swagger
 * tags:
 *   name: Status
 *   description: Ticket management
 */

/**
 * @swagger
 * /api/status:
 *   post:
 *     tags: [Status]
 *     summary: Create a new ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ticket created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/status', statusController.createStatus);

/**
 * @swagger
 * /api/status:
 *   get:
 *     tags: [Status]
 *     summary: List all status
 *     responses:
 *       200:
 *         description: List of status
 *       500:
 *         description: Server error
 */
router.get('/status', statusController.getStatus);

/**
 * @swagger
 * /api/status/search:
 *   get:
 *     tags: [Status]
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
router.get('/status/search', statusController.searchStatus);

/**
 * @swagger
 * /api/status/{id}:
 *   get:
 *     tags: [Status]
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
router.get('/status/:id', statusController.getStatusById);

/**
 * @swagger
 * /api/status/{id}:
 *   put:
 *     tags: [Status]
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
 *               status:
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
router.put('/status/:id', statusController.updateStatus);

/**
 * @swagger
 * /api/status/{id}:
 *   delete:
 *     tags: [Status]
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
router.delete('/status/:id', statusController.deleteStatus);

module.exports = router;