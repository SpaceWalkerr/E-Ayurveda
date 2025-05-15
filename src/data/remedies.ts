import { Remedy } from '../types';

export const remedies: Remedy[] = [
  {
    id: 1,
    condition: "Common Cold",
    description: "A viral infection of the upper respiratory tract causing congestion, sore throat, and mild fever",
    herbs: ["Tulsi (Holy Basil)", "Ginger", "Turmeric", "Black Pepper", "Honey"],
    usage: "Prepare a decoction by boiling 1 tsp each of tulsi, ginger, and turmeric with a pinch of black pepper in 2 cups of water until reduced by half. Strain and add honey when cool enough to drink. Take 3 times daily."
  },
  {
    id: 2,
    condition: "Digestive Discomfort",
    description: "Indigestion, bloating, and mild stomach upset caused by improper food combinations or eating habits",
    herbs: ["Fennel Seeds", "Cumin Seeds", "Coriander", "Ajwain (Carom Seeds)", "Ginger"],
    usage: "Make digestive tea by boiling 1 tsp of mixed fennel, cumin, coriander, and a pinch of ajwain seeds in a cup of water for 5 minutes. Strain and sip after meals. Alternatively, chew a small piece of fresh ginger with a pinch of salt before meals."
  },
  {
    id: 3,
    condition: "Stress & Anxiety",
    description: "Mental and emotional tension leading to restlessness, worry, and sleep disturbances",
    herbs: ["Ashwagandha", "Brahmi (Bacopa)", "Jatamansi", "Shankhapushpi", "Tulsi"],
    usage: "Take 1/2 teaspoon of Ashwagandha powder with warm milk before bedtime. For daytime stress, prepare a tea with tulsi leaves and sip throughout the day. For long-term stress management, consider a formulation containing all herbs under practitioner guidance."
  },
  {
    id: 4,
    condition: "Joint Pain",
    description: "Inflammation, stiffness, and pain in the joints often associated with arthritis or overexertion",
    herbs: ["Turmeric", "Boswellia (Shallaki)", "Ashwagandha", "Nirgundi", "Ginger"],
    usage: "Mix 1 tsp of turmeric powder with warm water or milk, adding a pinch of black pepper to enhance absorption. Take twice daily. For external application, make a paste of turmeric with warm sesame oil and apply to affected joints."
  },
  {
    id: 5,
    condition: "Insomnia",
    description: "Difficulty falling asleep or staying asleep, resulting in inadequate rest and daytime fatigue",
    herbs: ["Jatamansi", "Ashwagandha", "Brahmi", "Chamomile", "Nutmeg"],
    usage: "Prepare a sleep-promoting milk by warming 1 cup of milk with 1/2 tsp Ashwagandha powder and a pinch of nutmeg. Drink 30 minutes before bedtime. Alternatively, a tea made with chamomile flowers can be sipped in the evening."
  },
  {
    id: 6,
    condition: "Skin Inflammation",
    description: "Redness, rashes, and irritation of the skin due to allergic reactions or excess pitta (heat)",
    herbs: ["Neem", "Turmeric", "Aloe Vera", "Guduchi", "Manjistha"],
    usage: "For internal use, take 1/2 tsp of Guduchi powder with aloe vera juice in the morning. For external application, make a paste of neem leaves and turmeric with water and apply to affected areas. Wash off when dry."
  },
  {
    id: 7,
    condition: "Low Energy",
    description: "Persistent fatigue, weakness, and lack of motivation not relieved by rest",
    herbs: ["Shilajit", "Ashwagandha", "Shatavari", "Amla", "Chyawanprash"],
    usage: "Take a pea-sized amount of Shilajit resin dissolved in warm milk or water first thing in the morning. Alternatively, 1-2 tsp of Chyawanprash can be taken daily with milk or water to boost overall energy and immunity."
  },
  {
    id: 8,
    condition: "Headache",
    description: "Pain or discomfort in the head, scalp, or neck, often caused by tension, sinus issues, or poor digestion",
    herbs: ["Ginger", "Peppermint", "Brahmi", "Shankhapushpi", "Jatamansi"],
    usage: "For tension headaches, apply paste of brahmi leaves on the forehead. For sinus headaches, inhale steam with a few drops of eucalyptus oil. For digestive-related headaches, chew a small piece of ginger with jaggery."
  },
  {
    id: 9,
    condition: "Cough",
    description: "Reflex action to clear the airways of mucus, irritants, or foreign particles",
    herbs: ["Licorice", "Tulsi", "Pippali (Long Pepper)", "Honey", "Kantakari"],
    usage: "Mix 1/2 tsp of licorice powder with 1 tsp of honey and take 3 times daily. For dry cough, prepare a tea with tulsi leaves and add honey when cool enough. For productive cough, a decoction of ginger, pippali, and honey is effective."
  },
  {
    id: 10,
    condition: "High Blood Pressure",
    description: "Elevated pressure of blood against artery walls, often without noticeable symptoms",
    herbs: ["Arjuna", "Brahmi", "Jatamansi", "Garlic", "Punarnava"],
    usage: "Take 1/2 tsp of Arjuna bark powder twice daily with warm water. A decoction made from a combination of these herbs may be more effective but should be prepared under practitioner guidance. Regular use of fresh garlic in cooking is also beneficial."
  },
  {
    id: 11,
    condition: "Diabetes Management",
    description: "Supporting healthy blood sugar levels and minimizing complications of diabetes",
    herbs: ["Gurmar (Gymnema)", "Fenugreek", "Amla", "Turmeric", "Neem"],
    usage: "Soak 1 tsp of fenugreek seeds overnight and consume in the morning on an empty stomach. Alternatively, take 1/2 tsp of Gurmar powder with warm water before meals. These remedies are adjuncts to, not replacements for, medical treatment for diabetes."
  },
  {
    id: 12,
    condition: "Menstrual Discomfort",
    description: "Cramping, pain, and discomfort before or during menstruation",
    herbs: ["Shatavari", "Ashoka", "Turmeric", "Ginger", "Aloe Vera"],
    usage: "Take 1/2 tsp of Shatavari powder with warm milk twice daily starting a week before expected menstruation. A warm tea of ginger and cinnamon can help with cramping during menstruation. For long-term hormonal balance, Ashoka may be taken regularly."
  },
  {
    id: 13,
    condition: "Hair Loss",
    description: "Excessive shedding of hair leading to thinning or bald patches on the scalp",
    herbs: ["Bhringraj", "Amla", "Brahmi", "Hibiscus", "Neem"],
    usage: "Prepare hair oil by heating coconut oil with dried Bhringraj, Brahmi, and Amla powders, then cooling and straining. Apply to scalp and leave overnight before washing. Internally, take 1/2 tsp Bhringraj powder with warm water daily."
  },
  {
    id: 14,
    condition: "Weight Management",
    description: "Supporting healthy metabolism and balanced weight through diet, herbs, and lifestyle",
    herbs: ["Triphala", "Guggulu", "Ginger", "Cumin", "Fenugreek"],
    usage: "Take 1/2 tsp of Triphala powder with warm water before bedtime to support digestion and elimination. Prepare a morning tea with ginger, cumin, and fenugreek to kindle digestive fire. These should complement, not replace, a balanced diet and regular exercise."
  },
  {
    id: 15,
    condition: "Allergy Relief",
    description: "Managing symptoms of seasonal or environmental allergies like sneezing, itching, and congestion",
    herbs: ["Guduchi", "Neti Pot with Salt", "Turmeric", "Pippali", "Honey"],
    usage: "Take 1/2 tsp of Guduchi powder with honey in the morning on an empty stomach. Use a Neti pot with saline solution to clear nasal passages. A warm tea with local honey (not for children under 1) can help build tolerance to local pollens."
  }
];