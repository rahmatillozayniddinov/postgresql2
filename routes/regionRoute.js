const express = require('express');
const router = express.Router();
const regionController = require('../controllers/regionController');

/**
 * @swagger
 * tags:
 *   name: Regions
 *   description: Region management
 */

/**
 * @swagger
 * /api/regions:
 *   post:
 *     tags: [Regions]
 *     summary: Create a new region
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
 *         description: Region created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/regions', regionController.createRegion);

/**
 * @swagger
 * /api/regions:
 *   get:
 *     tags: [Regions]
 *     summary: List all regions
 *     responses:
 *       200:
 *         description: List of regions
 *       500:
 *         description: Server error
 */
router.get('/regions', regionController.getRegion);

/**
 * @swagger
 * /api/regions/search:
 *   get:
 *     tags: [Regions]
 *     summary: Search regions by name
 *     parameters:
 *       - name: name
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Name to search for
 *     responses:
 *       200:
 *         description: List of regions matching the name
 *       400:
 *         description: Name is required
 *       500:
 *         description: Server error
 */
router.get('/regions/search', regionController.searchRegion);

/**
 * @swagger
 * /api/regions/{id}:
 *   get:
 *     tags: [Regions]
 *     summary: Get region by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Region ID
 *     responses:
 *       200:
 *         description: Region details
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
router.get('/regions/:id', regionController.getRegionById);

/**
 * @swagger
 * /api/regions/{id}:
 *   put:
 *     tags: [Regions]
 *     summary: Update region by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Region ID
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
 *         description: Region updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
router.put('/regions/:id', regionController.updateRegion);

/**
 * @swagger
 * /api/regions/{id}:
 *   delete:
 *     tags: [Regions]
 *     summary: Delete region by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Region ID
 *     responses:
 *       200:
 *         description: Region deleted
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
router.delete('/regions/:id', regionController.deleteRegion);

module.exports = router;
