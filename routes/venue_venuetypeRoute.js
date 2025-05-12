const express = require('express');
const router = express.Router();
const Venue_venuetypeController = require('../controllers/venue_venuetypeController');

/**
 * @swagger
 * tags:
 *   name: VenueVenueTypes
 *   description: Venue-VenueType relationship management
 */

/**
 * @swagger
 * /api/venueVenueTypes:
 *   post:
 *     tags: [VenueVenueTypes]
 *     summary: Link a venue with a venue type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: number
 *               venuetype_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: Venue-VenueType link created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/venueVenueTypes', Venue_venuetypeController.createVenue_venuetype);

/**
 * @swagger
 * /api/venueVenueTypes:
 *   get:
 *     tags: [VenueVenueTypes]
 *     summary: List all venue-venue type links
 *     responses:
 *       200:
 *         description: List of venue-venue type links
 *       500:
 *         description: Server error
 */
router.get('/venueVenueTypes', Venue_venuetypeController.getVenue_venuetype);

/**
 * @swagger
 * /api/venueVenueTypes/search:
 *   get:
 *     tags: [VenueVenueTypes]
 *     summary: Search venue-venue type links by venue ID
 *     parameters:
 *       - name: venue_id
 *         in: query
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue ID to search links for
 *     responses:
 *       200:
 *         description: List of links matching the venue ID
 *       400:
 *         description: Venue ID is required
 *       500:
 *         description: Server error
 */
router.get('/venueVenueTypes/search', Venue_venuetypeController.searchVenue_venuetype);

/**
 * @swagger
 * /api/venueVenueTypes/{id}:
 *   get:
 *     tags: [VenueVenueTypes]
 *     summary: Get venue-venue type link by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Link ID
 *     responses:
 *       200:
 *         description: Venue-VenueType link details
 *       404:
 *         description: Link not found
 *       500:
 *         description: Server error
 */
router.get('/venueVenueTypes/:id', Venue_venuetypeController.getVenue_venuetypeById);

/**
 * @swagger
 * /api/venueVenueTypes/{id}:
 *   put:
 *     tags: [VenueVenueTypes]
 *     summary: Update venue-venue type link by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Link ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: integer
 *               venue_type_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Venue-VenueType link updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Link not found
 *       500:
 *         description: Server error
 */
router.put('/venueVenueTypes/:id', Venue_venuetypeController.updateVenue_venuetype);

/**
 * @swagger
 * /api/venueVenueTypes/{id}:
 *   delete:
 *     tags: [VenueVenueTypes]
 *     summary: Delete venue-venue type link by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Link ID
 *     responses:
 *       200:
 *         description: Link deleted
 *       404:
 *         description: Link not found
 *       500:
 *         description: Server error
 */
router.delete('/venueVenueTypes/:id', Venue_venuetypeController.deleteVenue_venuetype);

module.exports = router;