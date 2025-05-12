const express = require('express');
const router = express.Router();
const paymentMethodController = require('../controllers/payment_methodController');

/**
 * @swagger
 * tags:
 *   name: PaymentMethod
 *   description: Payment method management
 */

/**
 * @swagger
 * /api/paymentMethod:
 *   post:
 *     tags: [PaymentMethod]
 *     summary: Create a new payment method
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
 *         description: Payment method created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/paymentMethod', paymentMethodController.createPayment_method);

/**
 * @swagger
 * /api/paymentMethod:
 *   get:
 *     tags: [PaymentMethod]
 *     summary: List all payment methods
 *     responses:
 *       200:
 *         description: List of payment methods
 *       500:
 *         description: Server error
 */
router.get('/paymentMethod', paymentMethodController.getPayment_method);

/**
 * @swagger
 * /api/paymentMethod/search:
 *   get:
 *     tags: [PaymentMethod]
 *     summary: Search payment methods by name
 *     parameters:
 *       - name: query
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query for payment method name
 *     responses:
 *       200:
 *         description: List of payment methods matching the search query
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get('/paymentMethod/search', paymentMethodController.searchPayment_method);

/**
 * @swagger
 * /api/paymentMethod/{id}:
 *   get:
 *     tags: [PaymentMethod]
 *     summary: Get payment method by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Payment method ID
 *     responses:
 *       200:
 *         description: Payment method details
 *       404:
 *         description: Payment method not found
 *       500:
 *         description: Server error
 */
router.get('/paymentMethod/:id', paymentMethodController.getPayment_methodById);

/**
 * @swagger
 * /api/paymentMethod/{id}:
 *   put:
 *     tags: [PaymentMethod]
 *     summary: Update payment method by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Payment method ID
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
 *         description: Payment method updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Payment method not found
 *       500:
 *         description: Server error
 */
router.put('/paymentMethod/:id', paymentMethodController.updatePayment_method);

/**
 * @swagger
 * /api/paymentMethod/{id}:
 *   delete:
 *     tags: [PaymentMethod]
 *     summary: Delete payment method by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Payment method ID
 *     responses:
 *       200:
 *         description: Payment method deleted
 *       404:
 *         description: Payment method not found
 *       500:
 *         description: Server error
 */
router.delete('/paymentMethod/:id', paymentMethodController.deletePayment_method);

module.exports = router;
