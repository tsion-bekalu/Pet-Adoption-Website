// Volunteer opportunities data
const opportunities = [
  {
    id: 1,
    title: "Dog Walker",
    description: "Help our dogs get their daily exercise by taking them on walks around our facility or nearby parks.",
    commitment: "2-4 hours per week",
    requirements: ["Must be 16 or older", "Comfortable handling dogs of all sizes", "Physical fitness required"]
  },
  {
    id: 2,
    title: "Cat Socializer",
    description: "Spend time with our cats to help them become more comfortable with human interaction.",
    commitment: "2-3 hours per week",
    requirements: ["Must be 14 or older", "Patient and gentle demeanor", "No cat allergies"]
  },
  {
    id: 3,
    title: "Adoption Counselor",
    description: "Help match potential adopters with the perfect pet by conducting interviews and providing guidance.",
    commitment: "4-6 hours per week",
    requirements: ["Must be 18 or older", "Excellent communication skills", "Training provided"]
  },
  {
    id: 4,
    title: "Foster Parent",
    description: "Provide temporary homes for pets who need extra care or socialization before adoption.",
    commitment: "Varies (2 weeks - 3 months)",
    requirements: ["Stable home environment", "Ability to transport pets", "Previous pet experience preferred"]
  },
  {
    id: 5,
    title: "Event Helper",
    description: "Assist with adoption events, fundraisers, and community outreach programs.",
    commitment: "As needed (weekends)",
    requirements: ["Must be 16 or older", "Friendly personality", "Flexible schedule"]
  },
  {
    id: 6,
    title: "Administrative Support",
    description: "Help with office tasks including data entry, phone calls, and organizing paperwork.",
    commitment: "3-5 hours per week",
    requirements: ["Must be 18 or older", "Basic computer skills", "Attention to detail"]
  }
];

// Get all volunteer opportunities
export const getOpportunities = (req, res) => {
  res.json({
    success: true,
    count: opportunities.length,
    data: opportunities
  });
};

// Submit volunteer application
export const submitVolunteerApplication = (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zip,
      birthdate,
      availability,
      interests,
      experience,
      references,
      backgroundCheck,
      agreeToTerms
    } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !phone) {
      return res.status(400).json({
        success: false,
        error: 'First name, last name, email, and phone are required'
      });
    }

    if (!agreeToTerms) {
      return res.status(400).json({
        success: false,
        error: 'You must agree to the terms and conditions'
      });
    }

    // In production, save to database and send confirmation email
    console.log('Volunteer application received:', {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zip,
      birthdate,
      availability,
      interests,
      experience,
      references,
      backgroundCheck
    });

    res.json({
      success: true,
      message: 'Thank you for your volunteer application! We will review it and contact you within 5-7 business days.'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get volunteer requirements
export const getRequirements = (req, res) => {
  res.json({
    success: true,
    data: {
      general: [
        "Must be at least 14 years old (some positions require 16 or 18+)",
        "Complete volunteer orientation session",
        "Commit to at least 3 months of service",
        "Pass background check (for positions working with minors)"
      ],
      physical: [
        "Ability to stand for extended periods",
        "Capable of lifting up to 25 pounds",
        "No severe allergies to animals"
      ],
      training: [
        "All volunteers receive comprehensive training",
        "Ongoing education opportunities available",
        "Mentorship from experienced volunteers"
      ]
    }
  });
};
