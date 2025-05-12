const express = require('express');
const router = express.Router();
const venueTypeController = require('../controllers/venue_typeController');

/**
 * @swagger
 * tags:
 *   name: VenueTypes
 *   description: Venue type management
 */

/**
 * @swagger
 * /api/venueTypes:
 *   post:
 *     tags: [VenueTypes]
 *     summary: Create a new venue type
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
 *         description: Venue type created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/venueTypes', venueTypeController.createVenue_type);

/**
 * @swagger
 * /api/venueTypes:
 *   get:
 *     tags: [VenueTypes]
 *     summary: List all venue types
 *     responses:
 *       200:
 *         description: List of venue types
 *       500:
 *         description: Server error
 */
router.get('/venueTypes', venueTypeController.getVenue_type);

/**
 * @swagger
 * /api/venueTypes/search:
 *   get:
 *     tags: [VenueTypes]
 *     summary: Search venue types by name
 *     parameters:
 *       - name: name
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Name to search for
 *     responses:
 *       200:
 *         description: List of venue types matching the name
 *       400:
 *         description: Name is required
 *       500:
 *         description: Server error
 */
router.get('/venueTypes/search', venueTypeController.searchVenue_type);

/**
 * @swagger
 * /api/venueTypes/{id}:
 *   get:
 *     tags: [VenueTypes]
 *     summary: Get venue type by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue type ID
 *     responses:
 *       200:
 *         description: Venue type details
 *       404:
 *         description: Venue type not found
 *       500:
 *         description: Server error
 */
router.get('/venueTypes/:id', venueTypeController.getVenue_typeById);

/**
 * @swagger
 * /api/venueTypes/{id}:
 *   put:
 *     tags: [VenueTypes]
 *     summary: Update venue type by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue type ID
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
 *         description: Venue type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Venue type not found
 *       500:
 *         description: Server error
 */
router.put('/venueTypes/:id', venueTypeController.updateVenue_type);

/**
 * @swagger
 * /api/venueTypes/{id}:
 *   delete:
 *     tags: [VenueTypes]
 *     summary: Delete venue type by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue type ID
 *     responses:
 *       200:
 *         description: Venue type deleted
 *       404:
 *         description: Venue type not found
 *       500:
 *         description: Server error
 */
router.delete('/venueTypes/:id', venueTypeController.deleteVenue_type);

module.exports = router;
