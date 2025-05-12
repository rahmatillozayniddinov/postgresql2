const express = require('express');
const router = express.Router();
const langController = require('../controllers/langController');

/**
 * @swagger
 * tags:
 *   name: Langs
 *   description: Language management
 */

/**
 * @swagger
 * /api/langs:
 *   post:
 *     tags: [Langs]
 *     summary: Create a new language
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
 *         description: Language created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/langs', langController.createLang);

/**
 * @swagger
 * /api/langs:
 *   get:
 *     tags: [Langs]
 *     summary: List all languages
 *     responses:
 *       200:
 *         description: List of languages
 *       500:
 *         description: Server error
 */
router.get('/langs', langController.getLangs);

/**
 * @swagger
 * /api/langs/search:
 *   get:
 *     tags: [Langs]
 *     summary: Search languages by name or code
 *     parameters:
 *       - name: query
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query for language name or code
 *     responses:
 *       200:
 *         description: List of languages matching the search query
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get('/langs/search', langController.searchLang);

/**
 * @swagger
 * /api/langs/{id}:
 *   get:
 *     tags: [Langs]
 *     summary: Get language by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Language ID
 *     responses:
 *       200:
 *         description: Language details
 *       404:
 *         description: Language not found
 *       500:
 *         description: Server error
 */
router.get('/langs/:id', langController.getLangById);

/**
 * @swagger
 * /api/langs/{id}:
 *   put:
 *     tags: [Langs]
 *     summary: Update language by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Language ID
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
 *         description: Language updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Language not found
 *       500:
 *         description: Server error
 */
router.put('/langs/:id', langController.updateLang);

/**
 * @swagger
 * /api/langs/{id}:
 *   delete:
 *     tags: [Langs]
 *     summary: Delete language by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Language ID
 *     responses:
 *       200:
 *         description: Language deleted
 *       404:
 *         description: Language not found
 *       500:
 *         description: Server error
 */
router.delete('/langs/:id', langController.deleteLang);

module.exports = router;