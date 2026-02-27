import Contact from '../models/Contact.js'
import nodemailer from 'nodemailer'

// @desc  Submit contact form
// @route POST /api/contact
export const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    // Save to MongoDB
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
      ipAddress: req.ip,
    })

    // Send email notification (optional)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        })

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_TO || process.env.EMAIL_USER,
          subject: `[Portfolio] New Message: ${subject}`,
          html: `
            <div style="font-family:sans-serif;max-width:600px">
              <h2 style="color:#6366f1">New Contact Form Submission</h2>
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #eee">${name}</td></tr>
                <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #eee">${email}</td></tr>
                <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Subject</td><td style="padding:8px;border:1px solid #eee">${subject}</td></tr>
                <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #eee">${message}</td></tr>
              </table>
            </div>
          `,
        })
      } catch (emailErr) {
        console.warn('Email notification failed (non-critical):', emailErr.message)
      }
    }

    res.status(201).json({
      success: true,
      message: 'Message received! I will get back to you soon.',
      data: { id: contact._id },
    })
  } catch (err) {
    console.error('Contact submission error:', err)

    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(e => e.message)
      return res.status(400).json({ success: false, message: messages.join(', ') })
    }

    res.status(500).json({ success: false, message: 'Server error. Please try again.' })
  }
}

// @desc  Get all contacts (admin)
// @route GET /api/contact
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json({ success: true, count: contacts.length, data: contacts })
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' })
  }
}
