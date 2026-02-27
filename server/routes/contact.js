import express from 'express'
import { body, validationResult } from 'express-validator'
import { submitContact, getContacts } from '../controllers/contactController.js'

const router = express.Router()

// Validation middleware
const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
  body('email').trim().isEmail().withMessage('Valid email is required').normalizeEmail(),
  body('subject').trim().notEmpty().withMessage('Subject is required').isLength({ max: 200 }),
  body('message').trim().isLength({ min: 20 }).withMessage('Message must be at least 20 characters'),
]

const handleValidation = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errors.array().map(e => e.msg).join(', ')
    })
  }
  next()
}

router.post('/', validateContact, handleValidation, submitContact)
router.get('/', getContacts) // Protect with auth in production

export default router
