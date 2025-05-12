const express = require('express');
const router = express.Router();
const ticketStatusController = require('../controllers/ticket_statusController');

/**
 * @swagger
 * tags:
 *   name: TicketStatuses
 *   description: Ticket status management
 */

/**
 * @swagger
 * /api/ticket-statuses:
 *   post:
 *     tags: [TicketStatuses]
 *     summary: Create a new ticket status
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
 *         description: Ticket status created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/ticket-statuses', ticketStatusController.createTicket_status);

/**
 * @swagger
 * /api/ticket-statuses:
 *   get:
 *     tags: [TicketStatuses]
 *     summary: List all ticket statuses
 *     responses:
 *       200:
 *         description: List of ticket statuses
 *       500:
 *         description: Server error
 */
router.get('/ticket-statuses', ticketStatusController.getTicket_status);

/**
 * @swagger
 * /api/ticket-statuses/search:
 *   get:
 *     tags: [TicketStatuses]
 *     summary: Search ticket statuses by name
 *     parameters:
 *       - name: query
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query for ticket status name
 *     responses:
 *       200:
 *         description: List of ticket statuses matching the search query
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get('/ticket-statuses/search', ticketStatusController.searchTicket_status);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   get:
 *     tags: [TicketStatuses]
 *     summary: Get ticket status by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket status ID
 *     responses:
 *       200:
 *         description: Ticket status details
 *       404:
 *         description: Ticket status not found
 *       500:
 *         description: Server error
 */
router.get('/ticket-statuses/:id', ticketStatusController.getTicket_statusById);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   put:
 *     tags: [TicketStatuses]
 *     summary: Update ticket status by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket status ID
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
 *         description: Ticket status updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Ticket status not found
 *       500:
 *         description: Server error
 */
router.put('/ticket-statuses/:id', ticketStatusController.updateTicket_status);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   delete:
 *     tags: [TicketStatuses]
 *     summary: Delete ticket status by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket status ID
 *     responses:
 *       200:
 *         description: Ticket status deleted
 *       404:
 *         description: Ticket status not found
 *       500:
 *         description: Server error
 */
router.delete('/ticket-statuses/:id', ticketStatusController.deleteTicket_status);

module.exports = router;
