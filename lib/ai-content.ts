export interface Article { id: string; title: string; summary: string; content: string; category: string; date: string; author: string; readTime: string; tags: string[]; }

export interface BlogCategory {
  id: string
  title: string
  description: string
  icon: string
  href: string
  articleCount: number
}

export interface FAQItem {
  question: string;
  answer: string;
}

// Placeholder FAQ content
const defaultFAQs: FAQItem[] = [
  {
    question: "What services does Dr. Salumu offer?",
    answer: "We offer general medical consultations, preventative care, chronic illness management, and more."
  },
  {
    question: "Do I need an appointment?",
    answer: "Appointments are preferred but we do accept walk-ins when possible."
  },
  {
    question: "Where is the practice located?",
    answer: "14 Central Avenue, Kempton Park, Gauteng, South Africa."
  }
];

// Async generator function for FAQs
export async function generateFAQ(): Promise<FAQItem[]> {
  // In real use, this might fetch from a CMS or DB
  return Promise.resolve(defaultFAQs);
}

// Generate medical articles for the blog
export async function generateMedicalArticles(): Promise<Article[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  return [
    {
      id: "heart-health-basics",
      title: "Heart Health: Your Guide to a Stronger Heart",
      summary: "Learn essential tips for maintaining heart health through diet, exercise, and lifestyle changes. Discover warning signs and when to seek medical attention.",
      content: `Heart health is fundamental to overall well-being. Your heart works tirelessly, pumping blood throughout your body to deliver oxygen and nutrients to every cell. Taking care of this vital organ should be a top priority.

## Why Heart Health Matters

Cardiovascular disease remains one of the leading causes of death worldwide, including in South Africa. The good news is that many heart conditions are preventable through lifestyle changes and early detection.

## Key Risk Factors

Several factors can increase your risk of heart disease:
- **High blood pressure**: Often called the "silent killer" because it has no symptoms
- **High cholesterol**: Can lead to plaque buildup in arteries
- **Diabetes**: Increases risk of heart disease significantly
- **Obesity**: Puts extra strain on your heart
- **Smoking**: Damages blood vessels and heart tissue
- **Physical inactivity**: Weakens the heart muscle

## Prevention Strategies

### 1. Healthy Diet
Focus on a heart-healthy diet rich in:
- Fruits and vegetables (aim for 5 servings daily)
- Whole grains (brown rice, whole wheat bread)
- Lean proteins (fish, chicken, legumes)
- Healthy fats (olive oil, nuts, avocados)
- Limit salt, sugar, and processed foods

### 2. Regular Exercise
Aim for at least 150 minutes of moderate exercise weekly:
- Walking, swimming, or cycling
- Strength training 2-3 times per week
- Start slowly and gradually increase intensity

### 3. Stress Management
Chronic stress can harm your heart:
- Practice relaxation techniques (meditation, deep breathing)
- Get adequate sleep (7-9 hours nightly)
- Maintain social connections
- Consider counseling if needed

## Warning Signs

Seek immediate medical attention if you experience:
- Chest pain or pressure
- Shortness of breath
- Pain radiating to arm, jaw, or back
- Dizziness or fainting
- Swelling in legs or ankles
- Irregular heartbeat

## Regular Check-ups

Schedule regular visits with your healthcare provider to:
- Monitor blood pressure
- Check cholesterol levels
- Assess diabetes risk
- Review medications
- Discuss lifestyle changes

Remember, small changes can make a big difference in heart health. Start with one improvement and build from there. Your heart will thank you for it!`,
      category: "Heart Health",
      date: "2024-01-15",
      author: "Dr. Kabongo Salumu",
      readTime: "5 min read",
      tags: ["heart health", "cardiovascular", "prevention", "lifestyle"]
    },
    {
      id: "mental-wellness-guide",
      title: "Mental Wellness: Building Resilience in Daily Life",
      summary: "Explore practical strategies for maintaining mental health, managing stress, and building emotional resilience in today's fast-paced world.",
      content: `Mental wellness is just as important as physical health, yet it's often overlooked. In our busy lives, taking time to care for our mental health is essential for overall well-being and quality of life.

## Understanding Mental Wellness

Mental wellness encompasses emotional, psychological, and social well-being. It affects how we think, feel, and act, influencing how we handle stress, relate to others, and make choices.

## Common Mental Health Challenges

Many people experience mental health challenges at some point:
- **Anxiety**: Excessive worry and fear
- **Depression**: Persistent sadness and loss of interest
- **Stress**: Overwhelm from daily pressures
- **Sleep problems**: Difficulty falling or staying asleep
- **Burnout**: Physical and emotional exhaustion

## Building Mental Resilience

### 1. Practice Self-Care
Make time for activities that bring you joy:
- Engage in hobbies you enjoy
- Spend time in nature
- Practice mindfulness or meditation
- Take regular breaks from work
- Prioritize adequate sleep

### 2. Maintain Social Connections
Strong relationships support mental health:
- Stay connected with family and friends
- Join community groups or clubs
- Volunteer in your community
- Seek support when needed
- Be there for others

### 3. Develop Healthy Coping Skills
Learn to manage stress effectively:
- Deep breathing exercises
- Progressive muscle relaxation
- Journaling your thoughts and feelings
- Physical exercise
- Creative expression (art, music, writing)

### 4. Establish Healthy Routines
Consistency helps maintain mental balance:
- Regular sleep schedule
- Balanced meals at regular times
- Daily physical activity
- Time for relaxation
- Limiting screen time

## When to Seek Professional Help

Consider professional support if you experience:
- Persistent sadness or anxiety
- Difficulty functioning at work or home
- Changes in sleep or appetite
- Thoughts of self-harm
- Substance use to cope
- Withdrawal from activities you once enjoyed

## Breaking the Stigma

Mental health challenges are common and treatable:
- Talk openly about mental health
- Educate yourself and others
- Support those struggling
- Seek help without shame
- Remember: asking for help is a sign of strength

## Resources for Support

If you're struggling, help is available:
- Speak with your healthcare provider
- Contact mental health professionals
- Reach out to support groups
- Use crisis helplines if needed
- Talk to trusted friends or family

Remember, mental wellness is a journey, not a destination. Be patient with yourself and celebrate small progress. Your mental health matters, and taking care of it is one of the most important things you can do for yourself and those around you.`,
      category: "Mental Wellness",
      date: "2024-01-10",
      author: "Dr. Kabongo Salumu",
      readTime: "6 min read",
      tags: ["mental health", "wellness", "stress management", "resilience"]
    },
    {
      id: "vaccination-importance",
      title: "Vaccinations: Protecting Your Family's Health",
      summary: "Understand the importance of vaccinations, common myths debunked, and the vaccination schedule for different age groups in South Africa.",
      content: `Vaccinations are one of the most effective ways to prevent serious diseases and protect public health. They work by training your immune system to recognize and fight specific infections.

## How Vaccines Work

Vaccines contain weakened or inactive parts of a particular organism (antigen) that triggers an immune response within your body. This response creates antibodies that help your body fight the disease if you're exposed to it in the future.

## Common Vaccines and Their Importance

### Childhood Vaccines
**BCG (Tuberculosis)**
- Given at birth
- Protects against severe forms of TB
- Essential in South Africa where TB is prevalent

**DPT (Diphtheria, Pertussis, Tetanus)**
- Multiple doses from 6 weeks
- Prevents three serious bacterial infections
- Booster shots needed throughout life

**MMR (Measles, Mumps, Rubella)**
- Given at 9 and 18 months
- Prevents highly contagious viral diseases
- Critical for preventing outbreaks

**Polio**
- Multiple doses in first year
- Prevents paralysis and disability
- Nearly eradicated globally

### Adult Vaccines
**Influenza (Flu)**
- Annual vaccination recommended
- Especially important for elderly and those with chronic conditions
- Reduces severity of illness

**Pneumococcal**
- Protects against pneumonia and meningitis
- Recommended for adults 65+ and those with certain conditions

**COVID-19**
- Multiple doses for full protection
- Reduces severe illness and hospitalization
- Helps protect vulnerable populations

## Debunking Common Myths

**Myth: Vaccines cause autism**
- Fact: Multiple large studies have found no link between vaccines and autism

**Myth: Natural immunity is better**
- Fact: Natural immunity comes with risks of serious complications. Vaccines provide safer protection

**Myth: Vaccines contain dangerous ingredients**
- Fact: Vaccine ingredients are safe and necessary for effectiveness

**Myth: Vaccines aren't needed because diseases are rare**
- Fact: Diseases remain rare because of vaccination. Stopping vaccines could lead to outbreaks

## Vaccination Schedule

### Birth to 6 Years
- Birth: BCG, OPV
- 6 weeks: DPT, OPV, Rotavirus, PCV
- 10 weeks: DPT, OPV, Rotavirus, PCV
- 14 weeks: DPT, OPV, Rotavirus, PCV
- 9 months: Measles
- 18 months: DPT, OPV, Measles

### School Age (6-18 years)
- 6 years: DPT, OPV
- 12 years: Td (Tetanus, Diphtheria)
- 16 years: Td

### Adults
- Annual: Influenza
- Every 10 years: Td
- 65+: Pneumococcal
- As recommended: COVID-19 boosters

## Vaccine Safety

Vaccines undergo rigorous testing:
- Pre-clinical studies in labs
- Clinical trials with thousands of participants
- Ongoing monitoring for safety
- Regular review by health authorities

## Side Effects

Most side effects are mild and temporary:
- Soreness at injection site
- Low-grade fever
- Fatigue
- Mild rash (some vaccines)

Serious side effects are extremely rare and are carefully monitored.

## Getting Vaccinated

**Where to get vaccines:**
- Public health clinics
- Private medical practices
- Pharmacies (some vaccines)
- Workplace programs

**What to bring:**
- Vaccination record
- ID document
- Medical aid details (if applicable)

## Protecting Vulnerable Populations

Some people cannot be vaccinated due to:
- Age (too young)
- Medical conditions
- Allergies to vaccine components

These individuals rely on herd immunity - when enough people are vaccinated to prevent disease spread.

## Your Role in Public Health

Getting vaccinated protects:
- Yourself from serious illness
- Your family and community
- Vulnerable individuals
- Future generations

Vaccination is a simple, safe, and effective way to protect your health and contribute to public health. Talk to your healthcare provider about which vaccines you and your family need.`,
      category: "Vaccinations",
      date: "2024-01-05",
      author: "Dr. Kabongo Salumu",
      readTime: "7 min read",
      tags: ["vaccinations", "immunization", "public health", "prevention"]
    },
    {
      id: "child-health-essentials",
      title: "Child Health: Essential Care for Growing Families",
      summary: "Comprehensive guide to child health, from newborn care to adolescent development, including nutrition, safety, and when to seek medical attention.",
      content: `Raising healthy children is one of life's most important responsibilities. Understanding child health basics helps parents make informed decisions and provide the best care for their children.

## Newborn Care (0-3 months)

### Feeding
- **Breastfeeding**: Recommended exclusively for first 6 months
- **Formula feeding**: Safe alternative if breastfeeding isn't possible
- **Feeding frequency**: Every 2-3 hours, including at night
- **Signs of adequate feeding**: 6+ wet diapers daily, steady weight gain

### Sleep
- **Safe sleep practices**: Back to sleep, firm mattress, no soft bedding
- **Sleep patterns**: 14-17 hours daily, waking every 2-4 hours
- **Room sharing**: Recommended for first 6 months

### Development Milestones
- **1 month**: Lifts head briefly, follows objects with eyes
- **2 months**: Smiles, makes cooing sounds
- **3 months**: Holds head steady, reaches for objects

## Infant Care (4-12 months)

### Nutrition
- **4-6 months**: Introduce solid foods gradually
- **First foods**: Iron-fortified cereals, pureed fruits/vegetables
- **6-12 months**: Variety of foods, avoid honey and cow's milk
- **Breastfeeding**: Continue alongside solid foods

### Safety
- **Baby-proofing**: Secure furniture, cover outlets, lock cabinets
- **Car seats**: Rear-facing until at least 2 years
- **Supervision**: Never leave alone in bath or high places

### Development
- **6 months**: Sits without support, babbles
- **9 months**: Crawls, pulls to stand
- **12 months**: First steps, says first words

## Toddler Years (1-3 years)

### Nutrition
- **Balanced meals**: Fruits, vegetables, proteins, whole grains
- **Portion sizes**: 1 tablespoon per year of age
- **Healthy snacks**: Limit processed foods and sugary drinks
- **Mealtime**: Establish routines, eat together as family

### Safety
- **Child-proofing**: Continue safety measures
- **Water safety**: Never leave alone near water
- **Poison prevention**: Keep medications and chemicals locked up
- **Stranger safety**: Teach basic safety rules

### Development
- **Language**: Rapid vocabulary growth
- **Motor skills**: Running, climbing, drawing
- **Social skills**: Parallel play, sharing (with guidance)
- **Independence**: "Me do it" phase

## Preschool Years (3-5 years)

### Health and Wellness
- **Regular check-ups**: Annual visits with healthcare provider
- **Vaccinations**: Keep up with recommended schedule
- **Dental care**: First dental visit by age 3
- **Vision screening**: Regular eye exams

### Learning and Development
- **Pre-reading skills**: Letter recognition, rhyming
- **Numbers**: Counting, basic math concepts
- **Social skills**: Cooperative play, following rules
- **Emotional regulation**: Managing feelings appropriately

### Physical Activity
- **Daily exercise**: At least 60 minutes of active play
- **Outdoor time**: Nature exploration, playground visits
- **Screen time**: Limit to 1-2 hours daily

## School Age (6-12 years)

### Academic Health
- **Homework routine**: Consistent study habits
- **Reading**: Daily reading for pleasure
- **Screen time**: Balance with physical activity
- **Sleep**: 9-12 hours nightly

### Social Development
- **Friendships**: Support healthy peer relationships
- **Bullying**: Teach coping strategies and when to seek help
- **Self-esteem**: Encourage interests and achievements
- **Responsibility**: Age-appropriate chores and tasks

### Physical Health
- **Sports and activities**: Encourage participation
- **Nutrition**: Healthy school lunches and snacks
- **Hygiene**: Personal care habits
- **Safety**: Stranger danger, internet safety

## Adolescent Health (13-18 years)

### Physical Changes
- **Puberty**: Normal development varies widely
- **Nutrition**: Increased caloric needs
- **Sleep**: 8-10 hours needed
- **Exercise**: 60 minutes daily recommended

### Mental Health
- **Emotional changes**: Normal mood swings
- **Stress management**: Healthy coping strategies
- **Depression awareness**: Know warning signs
- **Communication**: Keep lines open

### Safety and Risk Prevention
- **Substance use**: Open discussions about risks
- **Sexual health**: Age-appropriate education
- **Driving safety**: Graduated licensing
- **Internet safety**: Digital citizenship

## When to Seek Medical Attention

### Emergency Situations
- Difficulty breathing
- Severe injury or bleeding
- Unconsciousness
- Seizures
- Severe allergic reactions

### Urgent Care Needed
- High fever (especially in infants)
- Persistent vomiting or diarrhea
- Dehydration signs
- Severe pain
- Unusual behavior changes

### Regular Check-ups
- Well-child visits as recommended
- Vaccination updates
- Growth and development monitoring
- Vision and hearing screening

## Building Healthy Habits

### Nutrition
- Family meals when possible
- Healthy food choices
- Proper portion sizes
- Limited sugary drinks and snacks

### Physical Activity
- Daily exercise
- Outdoor play
- Sports participation
- Active family activities

### Sleep
- Consistent bedtime routine
- Adequate sleep duration
- Screen-free time before bed
- Comfortable sleep environment

### Mental Health
- Open communication
- Stress management skills
- Positive self-image
- Healthy relationships

Remember, every child develops at their own pace. Trust your instincts as a parent, and don't hesitate to ask your healthcare provider questions. Your child's health and well-being are worth the attention and care you provide.`,
      category: "Child Health",
      date: "2024-01-20",
      author: "Dr. Kabongo Salumu",
      readTime: "8 min read",
      tags: ["child health", "pediatrics", "development", "parenting"]
    },
    {
      id: "diabetes-management",
      title: "Diabetes Management: Living Well with Diabetes",
      summary: "Comprehensive guide to managing diabetes through diet, exercise, medication, and lifestyle changes. Learn about prevention and treatment options.",
      content: `Diabetes is a chronic condition that affects how your body processes glucose (sugar). With proper management, people with diabetes can live healthy, active lives.

## Understanding Diabetes

### Types of Diabetes
**Type 1 Diabetes**
- Autoimmune condition where body doesn't produce insulin
- Usually diagnosed in children and young adults
- Requires insulin therapy

**Type 2 Diabetes**
- Body becomes resistant to insulin or doesn't produce enough
- Most common type, often related to lifestyle factors
- Can be managed with diet, exercise, and medication

**Gestational Diabetes**
- Develops during pregnancy
- Usually resolves after childbirth
- Increases risk of Type 2 diabetes later

## Symptoms and Diagnosis

### Common Symptoms
- Increased thirst and frequent urination
- Extreme hunger
- Unexplained weight loss
- Fatigue and irritability
- Blurred vision
- Slow-healing sores
- Frequent infections

### Diagnosis
- Fasting blood glucose test
- Oral glucose tolerance test
- A1C test (average blood sugar over 3 months)
- Random blood glucose test

## Blood Sugar Management

### Target Ranges
- **Before meals**: 80-130 mg/dL (4.4-7.2 mmol/L)
- **2 hours after meals**: Less than 180 mg/dL (10.0 mmol/L)
- **A1C**: Less than 7% (individualized)

### Monitoring
- Regular blood glucose testing
- Continuous glucose monitoring (CGM)
- Keeping a log of readings
- Understanding patterns and trends

## Nutrition and Diabetes

### Carbohydrate Management
- Count carbohydrates in meals
- Choose complex carbs over simple sugars
- Distribute carbs throughout the day
- Consider glycemic index of foods

### Healthy Eating Principles
- **Vegetables**: Fill half your plate
- **Proteins**: Lean meats, fish, legumes
- **Grains**: Whole grains in moderation
- **Fruits**: In controlled portions
- **Fats**: Healthy fats in moderation

### Meal Planning
- Consistent meal timing
- Portion control
- Balanced macronutrients
- Regular meal spacing

## Physical Activity

### Benefits of Exercise
- Improves insulin sensitivity
- Helps control blood sugar
- Aids weight management
- Reduces cardiovascular risk
- Boosts mood and energy

### Exercise Guidelines
- **Aerobic exercise**: 150 minutes weekly
- **Strength training**: 2-3 times weekly
- **Flexibility**: Regular stretching
- **Start slowly**: Gradually increase intensity

### Exercise Safety
- Check blood sugar before and after
- Carry fast-acting carbohydrates
- Stay hydrated
- Wear proper footwear
- Listen to your body

## Medication Management

### Oral Medications
- **Metformin**: First-line treatment for Type 2
- **Sulfonylureas**: Stimulate insulin production
- **DPP-4 inhibitors**: Help control blood sugar
- **SGLT2 inhibitors**: Remove glucose through urine

### Insulin Therapy
- **Rapid-acting**: Mealtime coverage
- **Long-acting**: Basal insulin needs
- **Premixed**: Combination products
- **Insulin pumps**: Continuous delivery

### Medication Safety
- Take as prescribed
- Don't skip doses
- Monitor for side effects
- Keep medications organized
- Regular medication reviews

## Lifestyle Modifications

### Weight Management
- Achieve and maintain healthy weight
- Focus on sustainable changes
- Consider professional support
- Set realistic goals

### Stress Management
- Practice relaxation techniques
- Maintain work-life balance
- Seek support when needed
- Regular physical activity

### Sleep Hygiene
- 7-9 hours of quality sleep
- Consistent sleep schedule
- Create restful environment
- Avoid screens before bed

### Smoking Cessation
- Smoking worsens diabetes complications
- Seek support to quit
- Consider nicotine replacement
- Professional counseling available

## Preventing Complications

### Regular Check-ups
- **A1C**: Every 3-6 months
- **Blood pressure**: Every visit
- **Cholesterol**: Annually
- **Kidney function**: Annually
- **Eye exam**: Annually
- **Foot exam**: Every visit

### Cardiovascular Health
- Control blood pressure
- Manage cholesterol
- Regular exercise
- Heart-healthy diet
- Medication compliance

### Foot Care
- Daily foot inspection
- Proper footwear
- Regular podiatry visits
- Immediate attention to sores
- Good hygiene

### Eye Health
- Annual comprehensive eye exam
- Control blood sugar and blood pressure
- Report vision changes immediately
- Protect eyes from injury

## Emergency Preparedness

### Hypoglycemia (Low Blood Sugar)
**Symptoms**: Shakiness, sweating, confusion, hunger
**Treatment**: Fast-acting carbohydrates (glucose tablets, juice)
**Prevention**: Regular meals, medication timing, exercise planning

### Hyperglycemia (High Blood Sugar)
**Symptoms**: Thirst, frequent urination, fatigue
**Treatment**: Check blood sugar, take medication as prescribed
**Prevention**: Diet, exercise, medication compliance

### Sick Day Management
- Continue diabetes medications
- Monitor blood sugar frequently
- Stay hydrated
- Contact healthcare provider if needed
- Have sick day plan ready

## Support and Resources

### Healthcare Team
- Primary care physician
- Endocrinologist (diabetes specialist)
- Diabetes educator
- Dietitian
- Mental health professional

### Support Groups
- Local diabetes associations
- Online communities
- Family and friends
- Peer support programs

### Educational Resources
- Diabetes education classes
- Books and websites
- Mobile apps for tracking
- Professional organizations

## Living Well with Diabetes

### Positive Mindset
- Focus on what you can control
- Celebrate small victories
- Don't let diabetes define you
- Seek support when needed

### Goal Setting
- Set realistic, achievable goals
- Break large goals into smaller steps
- Track progress regularly
- Adjust goals as needed

### Quality of Life
- Maintain hobbies and interests
- Stay socially connected
- Pursue career and personal goals
- Don't let diabetes limit you

Remember, diabetes management is a journey, not a destination. With proper care, education, and support, you can live a full, healthy life with diabetes. Work closely with your healthcare team and don't hesitate to ask questions or seek help when needed.`,
      category: "Chronic Conditions",
      date: "2024-01-25",
      author: "Dr. Kabongo Salumu",
      readTime: "9 min read",
      tags: ["diabetes", "chronic disease", "management", "lifestyle"]
    },
    {
      id: "preventive-care-guide",
      title: "Preventive Care: Your Health Investment",
      summary: "Learn about the importance of preventive healthcare, recommended screenings by age, and how regular check-ups can prevent serious health issues.",
      content: `Preventive care is the foundation of good health. By taking proactive steps to maintain your health and catch potential problems early, you can avoid serious illnesses and enjoy a better quality of life.

## What is Preventive Care?

Preventive care includes health services that help prevent illness, disease, and other health problems. It's about staying healthy rather than just treating illness when it occurs.

## Benefits of Preventive Care

### Early Detection
- Catch health problems before they become serious
- More treatment options available
- Better outcomes and recovery rates
- Lower healthcare costs

### Disease Prevention
- Reduce risk of chronic conditions
- Prevent complications from existing conditions
- Maintain optimal health and function
- Improve quality of life

### Cost Savings
- Avoid expensive treatments for advanced disease
- Reduce hospitalizations and emergency visits
- Lower medication costs
- Maintain productivity and work capacity

## Recommended Screenings by Age

### Children (0-18 years)
**Newborn to 2 years**
- Regular well-child visits
- Growth and development monitoring
- Vaccination schedule
- Vision and hearing screening

**3-5 years**
- Annual check-ups
- Vision and hearing tests
- Dental check-ups
- Developmental screening

**6-12 years**
- Annual physical exams
- Vision screening
- Dental care
- Sports physicals as needed

**13-18 years**
- Annual check-ups
- Mental health screening
- Sexual health education
- Substance use screening

### Adults (18-64 years)
**18-39 years**
- Annual physical exam
- Blood pressure screening
- Cholesterol screening (every 5 years)
- Diabetes screening (if at risk)
- Cervical cancer screening (women)
- Testicular exam (men)
- Skin cancer screening

**40-64 years**
- Annual physical exam
- Blood pressure monitoring
- Cholesterol screening
- Diabetes screening
- Colorectal cancer screening (starting at 45)
- Breast cancer screening (women)
- Prostate cancer screening (men)
- Bone density testing (women 50+)

### Seniors (65+ years)
- Annual comprehensive exam
- Blood pressure monitoring
- Cholesterol screening
- Diabetes screening
- Cancer screenings as recommended
- Bone density testing
- Vision and hearing tests
- Cognitive screening
- Fall risk assessment

## Vaccinations Throughout Life

### Childhood Vaccines
- BCG, DPT, MMR, Polio
- Hepatitis B, Rotavirus
- Pneumococcal, Meningococcal

### Adult Vaccines
- Annual influenza vaccine
- Td/Tdap (every 10 years)
- Pneumococcal (65+)
- Shingles (50+)
- COVID-19 (as recommended)

### Travel Vaccines
- Hepatitis A and B
- Yellow fever (if traveling to endemic areas)
- Typhoid, Meningococcal
- Consult travel clinic for specific destinations

## Lifestyle Prevention

### Nutrition
- Balanced, varied diet
- Adequate fruits and vegetables
- Whole grains and lean proteins
- Limited processed foods and added sugars
- Proper portion sizes

### Physical Activity
- 150 minutes moderate exercise weekly
- Strength training 2-3 times weekly
- Flexibility and balance exercises
- Regular physical activity throughout life

### Weight Management
- Maintain healthy weight
- Focus on sustainable changes
- Regular monitoring
- Professional support when needed

### Stress Management
- Identify stress sources
- Develop healthy coping strategies
- Practice relaxation techniques
- Maintain work-life balance
- Seek professional help when needed

### Sleep Hygiene
- 7-9 hours quality sleep
- Consistent sleep schedule
- Restful sleep environment
- Avoid screens before bed
- Address sleep disorders

### Substance Use
- Avoid tobacco products
- Limit alcohol consumption
- Avoid recreational drugs
- Seek help for addiction

## Mental Health Prevention

### Regular Check-ins
- Monitor mood and emotions
- Practice self-reflection
- Maintain social connections
- Seek support when needed

### Stress Reduction
- Mindfulness and meditation
- Regular exercise
- Hobbies and interests
- Time management skills

### Professional Support
- Regular mental health check-ups
- Therapy when needed
- Medication management
- Crisis resources

## Environmental Health

### Home Safety
- Smoke and carbon monoxide detectors
- Safe storage of medications and chemicals
- Fall prevention measures
- Proper ventilation

### Workplace Health
- Ergonomic workstations
- Regular breaks and movement
- Stress management
- Safety protocols

### Community Health
- Access to healthcare
- Safe neighborhoods
- Clean air and water
- Recreational opportunities

## Building a Preventive Care Plan

### Choose a Primary Care Provider
- Regular check-ups
- Coordinated care
- Health history maintenance
- Referrals to specialists

### Create a Health Calendar
- Annual physical exams
- Recommended screenings
- Vaccination schedule
- Dental and vision appointments

### Maintain Health Records
- Keep copies of test results
- Track medications and allergies
- Document family history
- Update information regularly

### Family Health History
- Document conditions in relatives
- Share with healthcare providers
- Understand genetic risks
- Plan appropriate screenings

## Overcoming Barriers to Preventive Care

### Cost Concerns
- Health insurance coverage
- Community health programs
- Sliding scale fees
- Government assistance programs

### Time Constraints
- Schedule appointments in advance
- Combine multiple screenings
- Use telehealth when appropriate
- Prioritize health appointments

### Fear and Anxiety
- Open communication with providers
- Bring support person to appointments
- Ask questions and seek clarification
- Start with less invasive screenings

### Transportation and Access
- Public transportation options
- Community health centers
- Mobile health services
- Telehealth appointments

## Technology and Preventive Care

### Health Apps
- Medication reminders
- Exercise tracking
- Nutrition monitoring
- Symptom tracking

### Wearable Devices
- Activity monitoring
- Heart rate tracking
- Sleep quality assessment
- Health trend analysis

### Telehealth
- Virtual consultations
- Remote monitoring
- Prescription refills
- Health education

## Making Preventive Care a Priority

### Set Health Goals
- Specific, measurable objectives
- Realistic timelines
- Regular progress review
- Celebrate achievements

### Build Healthy Habits
- Start with small changes
- Consistency over perfection
- Gradual improvement
- Long-term commitment

### Involve Family and Friends
- Share health goals
- Exercise together
- Healthy meal preparation
- Mutual support and encouragement

### Stay Informed
- Reliable health information sources
- Latest medical guidelines
- New prevention strategies
- Community health resources

Remember, preventive care is an investment in your future health and well-being. The time and effort you put into prevention today can save you from serious health problems tomorrow. Work with your healthcare provider to develop a personalized preventive care plan that fits your needs and lifestyle.`,
      category: "Preventive Care",
      date: "2024-01-30",
      author: "Dr. Kabongo Salumu",
      readTime: "10 min read",
      tags: ["preventive care", "screenings", "vaccinations", "lifestyle"]
    }
  ]
}

// Generate blog categories
export function getBlogCategories(): BlogCategory[] {
  return [
    {
      id: "heart-health",
      title: "Heart Health",
      description: "Essential information about cardiovascular health, prevention, and management",
      icon: "favorite",
      href: "/blog/heart-health",
      articleCount: 1
    },
    {
      id: "mental-wellness",
      title: "Mental Wellness",
      description: "Strategies for maintaining mental health and emotional well-being",
      icon: "psychology",
      href: "/blog/mental-wellness",
      articleCount: 1
    },
    {
      id: "vaccinations",
      title: "Vaccinations",
      description: "Important information about immunizations and disease prevention",
      icon: "vaccines",
      href: "/blog/vaccination-facts",
      articleCount: 1
    },
    {
      id: "child-health",
      title: "Child Health",
      description: "Comprehensive guide to pediatric care and child development",
      icon: "child_care",
      href: "/blog/child-health",
      articleCount: 1
    },
    {
      id: "chronic-conditions",
      title: "Chronic Conditions",
      description: "Management strategies for long-term health conditions",
      icon: "monitor_heart",
      href: "/blog/chronic-conditions",
      articleCount: 1
    },
    {
      id: "preventive-care",
      title: "Preventive Care",
      description: "Proactive health measures and screening recommendations",
      icon: "health_and_safety",
      href: "/blog/preventive-care",
      articleCount: 1
    }
  ]
}

// Get article by ID
export function getArticleById(id: string): Promise<Article | undefined> {
  return generateMedicalArticles().then(articles => 
    articles.find(article => article.id === id)
  )
}

// Get articles by category
export function getArticlesByCategory(category: string): Promise<Article[]> {
  return generateMedicalArticles().then(articles =>
    articles.filter(article => article.category.toLowerCase() === category.toLowerCase())
  )
}

// Search articles
export function searchArticles(query: string): Promise<Article[]> {
  const searchTerm = query.toLowerCase()
  return generateMedicalArticles().then(articles =>
    articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm) ||
      article.summary.toLowerCase().includes(searchTerm) ||
      article.content.toLowerCase().includes(searchTerm) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    )
  )
}
