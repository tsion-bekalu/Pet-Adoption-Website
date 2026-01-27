// Submit contact form
export const submitContactForm = (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address'
      });
    }

    // In production, save to database and send email
    console.log('Contact form submitted:', { name, email, phone, subject, message });

    res.json({
      success: true,
      message: 'Thank you for your message! We will get back to you within 24-48 hours.'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get contact information
export const getContactInfo = (req, res) => {
  res.json({
    success: true,
    data: {
      address: '123 Pet Haven Lane, Pawsville, CA 90210',
      phone: '(555) 123-4567',
      email: 'info@pawsomeadopt.com',
      hours: {
        weekdays: '9:00 AM - 6:00 PM',
        saturday: '10:00 AM - 4:00 PM',
        sunday: 'Closed'
      },
      emergency: {
        phone: '(555) 987-6543',
        available: '24/7'
      },
      social: {
        facebook: 'https://facebook.com/pawsomeadopt',
        instagram: 'https://instagram.com/pawsomeadopt',
        twitter: 'https://twitter.com/pawsomeadopt'
      }
    }
  });
};
