const express = require('express');
const router = express.Router();
const languageController = require('../controllers/languageController');

/**
 * @swagger
 * tags:
 *   name: Language
 *   description: Language management
 */

/**
 * @swagger
 * /api/language:
 *   post:
 *     tags: [Language]
 *     summary: Create a new language
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               language:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Language created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/language', languageController.createLanguage);

/**
 * @swagger
 * /api/language:
 *   get:
 *     tags: [Language]
 *     summary: List all languages
 *     responses:
 *       200:
 *         description: List of languages
 *       500:
 *         description: Server error
 */
router.get('/language', languageController.getLanguage);

/**
 * @swagger
 * /api/language/search:
 *   get:
 *     tags: [Language]
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
router.get('/language/search', languageController.searchLanguage);

/**
 * @swagger
 * /api/language/{id}:
 *   get:
 *     tags: [Language]
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
router.get('/language/:id', languageController.getLanguageById);

/**
 * @swagger
 * /api/language/{id}:
 *   put:
 *     tags: [Language]
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
 *               language:
 *                 type: string
 *               description:
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
router.put('/language/:id', languageController.updateLanguage);

/**
 * @swagger
 * /api/language/{id}:
 *   delete:
 *     tags: [Language]
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
router.delete('/language/:id', languageController.deleteLanguage);

module.exports = router;