const express = require("express");
const router = express.Router();
const BookingController = require("../controllers/bookingController");

/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: Foydalanuvchilar boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/booking:
 *   post:
 *     summary: Create a new booking
 *     tags: [Booking]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: number
 *               createdAt:
 *                 type: string
 *                 format: date
 *               fineshed:
 *                 type: string
 *                 format: date
 *               payment_method_id:
 *                 type: number
 *               delivery_method_id:
 *                 type: number
 *               discount_coupon_id:
 *                 type: number
 *               status_id:
 *                 type: number
 *     responses:
 *       '201':
 *         description: booking created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/booking", BookingController.createBooking);

/**
 * @swagger
 * /api/booking:
 *   get:
 *     summary: Get all Admin
 *     tags: [Booking]
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:
 *       '201':
 *         description: admin created
 *       '500':
 *         description: Server error
 */
router.get("/booking", BookingController.getBookings);

/**
 * @swagger
 * /api/booking/search:
 *   get:
 *     summary: Search Admin by name or email
 *     tags: [Booking]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         description: Search query for admin name or email
 *         schema:
 *           type: string
 *     responses:
 *       '201':
 *         description: List of Admin matching the search query
 *       '400':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */
router.get("/booking/search", BookingController.searchBookings);

/**
 * @swagger
 *  /api/booking/{id}:
 *    get:
 *      summary: Get admin by ID
 *      tags: [Booking]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: admin ID
 *          schema:
 *            type: integer
 *      responses:
 *        '201':
 *          description: admin details
 *        '400':
 *          description: admin not found
 *        '500':
 *          description: Server error
 */
router.get("/booking/:id", BookingController.getBookingById);

/**
 * @swagger
 * /api/booking/{id}:
 *   put:
 *     summary: Update admin by ID
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: admin ID
 *         schema:
 *           type: integer
 *     responses:
 *       '201':
 *         description: admin updated
 *       '400':
 *         description: Invalid input
 *       '404':
 *         description: admin not found
 *       '500':
 *         description: Server error
 */
router.put("/booking/:id", BookingController.updateBooking);

/**
 * @swagger
 * /api/booking/{id}:
 *   delete:
 *     summary: Delete admin by ID
 *     tags: [Booking]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: admin ID
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: admin deleted
 *       '404':
 *         description: admin not found
 *       '500':
 *         description: Server error
 */
router.delete("/booking/:id", BookingController.deleteBooking);

module.exports = router;
