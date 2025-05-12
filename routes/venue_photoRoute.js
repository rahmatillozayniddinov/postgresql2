const express = require('express');
const router = express.Router();
const venuePhotoController = require('../controllers/venue_photoController');

/**
 * @swagger
 * tags:
 *   name: VenuePhotos
 *   description: Venue photo management
 */

/**
 * @swagger
 * /api/venuePhotos:
 *   post:
 *     tags: [VenuePhotos]
 *     summary: Upload a new venue photo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: integer
 *               url:
 *                 type: string
 *     responses:
 *       201:
 *         description: Venue photo uploaded
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/venuePhotos', venuePhotoController.createVenue_photo);

/**
 * @swagger
 * /api/venuePhotos:
 *   get:
 *     tags: [VenuePhotos]
 *     summary: List all venue photos
 *     responses:
 *       200:
 *         description: List of venue photos
 *       500:
 *         description: Server error
 */
router.get('/venuePhotos', venuePhotoController.getVenue_photo);

/**
 * @swagger
 * /api/venuePhotos/search:
 *   get:
 *     tags: [VenuePhotos]
 *     summary: Search venue photos by venue ID
 *     parameters:
 *       - name: venue_id
 *         in: query
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue ID to search photos for
 *     responses:
 *       200:
 *         description: List of venue photos matching the venue ID
 *       400:
 *         description: Venue ID is required
 *       500:
 *         description: Server error
 */
router.get('/venuePhotos/search', venuePhotoController.searchVenue_photo);

/**
 * @swagger
 * /api/venuePhotos/{id}:
 *   get:
 *     tags: [VenuePhotos]
 *     summary: Get venue photo by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue photo ID
 *     responses:
 *       200:
 *         description: Venue photo details
 *       404:
 *         description: Venue photo not found
 *       500:
 *         description: Server error
 */
router.get('/venuePhotos/:id', venuePhotoController.getVenue_photoById);

/**
 * @swagger
 * /api/venuePhotos/{id}:
 *   put:
 *     tags: [VenuePhotos]
 *     summary: Update venue photo by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue photo ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: integer
 *               url:
 *                 type: string
 *     responses:
 *       200:
 *         description: Venue photo updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Venue photo not found
 *       500:
 *         description: Server error
 */
router.put('/venuePhotos/:id', venuePhotoController.updateVenue_photo);

/**
 * @swagger
 * /api/venuePhotos/{id}:
 *   delete:
 *     tags: [VenuePhotos]
 *     summary: Delete venue photo by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue photo ID
 *     responses:
 *       200:
 *         description: Venue photo deleted
 *       404:
 *         description: Venue photo not found
 *       500:
 *         description: Server error
 */
router.delete('/venuePhotos/:id', venuePhotoController.deleteVenue_photo);

module.exports = router;