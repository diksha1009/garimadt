// Program line-up and pricing. Single source of truth — the programs page,
// the home page pricing band and the structured data all read from here.

export const CORE_PROGRAMS = [
  {
    id: 'kickstart',
    emoji: '🌱',
    name: 'Nutrition Kickstart',
    duration: '4 Weeks',
    price: 2999,
    priceLabel: '₹2,999',
    for: 'Getting started with healthier eating habits',
    features: [
      'Initial nutrition consultation',
      'Personalised nutrition plan',
      'Indian / home-food based guidance',
      'Food substitutions',
      '1 follow-up',
      'WhatsApp support',
    ],
    cta: 'Start Your Journey',
  },
  {
    id: 'transformation',
    emoji: '⭐',
    name: 'Health Transformation',
    duration: '12 Weeks',
    price: 7999,
    priceLabel: '₹7,999',
    for: 'Sustainable weight & lifestyle management',
    popular: true,
    features: [
      'Detailed nutrition assessment',
      'Personalised nutrition plan',
      'Weekly check-ins',
      'Regular plan modifications',
      'Eating-out & travel guidance',
      'Lifestyle & habit support',
      'Progress tracking',
      'Maintenance guidance',
    ],
    cta: 'Start Transformation',
  },
  {
    id: 'clinical',
    emoji: '🩺',
    name: 'Clinical Nutrition Care',
    duration: '12 Weeks',
    price: 10999,
    priceLabel: '₹10,999',
    for: 'Nutrition support alongside medical care',
    features: [
      'Detailed health & diet assessment',
      'Relevant lab-report review',
      'Personalised therapeutic nutrition',
      'Weekly follow-ups',
      'Diet modifications',
      'Symptom & progress tracking',
      'Lifestyle guidance',
      'Maintenance strategy',
    ],
    cta: 'Book Clinical Consultation',
  },
];

export const SPECIAL_PROGRAMS = [
  {
    id: 'pre-wedding',
    emoji: '👰',
    name: 'Pre-Wedding Nutrition',
    duration: '8 Weeks',
    price: 7999,
    priceLabel: '₹7,999',
    for: 'Brides- and grooms-to-be who want to feel healthier, more energetic and confident before the wedding',
    features: [
      'Detailed nutrition & lifestyle assessment',
      'Personalised nutrition plan',
      'Healthy weight-management guidance',
      'Skin & hair-supportive nutrition',
      'Gut & digestion support',
      'Energy & sleep guidance',
      'Eating-out & wedding-function strategies',
      'Weekly check-ins',
      'Plan modifications',
      'Progress tracking',
    ],
    cta: 'Start Your Pre-Wedding Journey',
  },
];

export const CONSULTATION = {
  price: 500,
  priceLabel: '₹500',
  duration: '45–60 minutes',
  name: 'Personal Nutrition Consultation',
  note: 'Your consultation fee is adjusted against your program fee if you enrol.',
};

export const ALL_PROGRAMS = [...CORE_PROGRAMS, ...SPECIAL_PROGRAMS];
