"use client"
import Link from "next/link"
import { useTheme } from "@/context/theme-provider"
import Header from "@/components/header"

export default function PreventiveCarePage() {
  const { getHeadingClass, getBodyClass } = useTheme()
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        <Link href="/blog" className="text-primary text-xs font-medium mb-4 inline-block text-left">← Back to Blog</Link>
        
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className={`text-2xl md:text-4xl font-bold text-black mb-4 text-left ${getHeadingClass()}`}>
              Preventive Care: Your Health Investment
            </h1>
            <p className={`text-sm md:text-lg text-gray-600 mb-6 max-w-3xl text-left ${getBodyClass()}`}>
              Learn about the importance of preventive healthcare, recommended screenings by age, and how regular check-ups can prevent serious health issues.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>By Dr. Kabongo Salumu</span>
              <span>•</span>
              <span>January 30, 2024</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </header>

          <div className={`prose max-w-none text-gray-800 leading-relaxed ${getBodyClass()}`}>
            <p className="text-lg mb-6">
              Preventive care is the foundation of good health. By taking proactive steps to maintain your health and catch potential problems early, you can avoid serious illnesses and enjoy a better quality of life.
            </p>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>What is Preventive Care?</h2>
            <p className="mb-6">
              Preventive care includes health services that help prevent illness, disease, and other health problems. It's about staying healthy rather than just treating illness when it occurs.
            </p>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Benefits of Preventive Care</h2>
            
            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Early Detection</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Catch health problems before they become serious</li>
              <li>More treatment options available</li>
              <li>Better outcomes and recovery rates</li>
              <li>Lower healthcare costs</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Disease Prevention</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Reduce risk of chronic conditions</li>
              <li>Prevent complications from existing conditions</li>
              <li>Maintain optimal health and function</li>
              <li>Improve quality of life</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Cost Savings</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Avoid expensive treatments for advanced disease</li>
              <li>Reduce hospitalizations and emergency visits</li>
              <li>Lower medication costs</li>
              <li>Maintain productivity and work capacity</li>
            </ul>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Recommended Screenings by Age</h2>
            
            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Children (0-18 years)</h3>
            <div className="space-y-4 mb-6">
              <div>
                <p className="font-semibold">Newborn to 2 years</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Regular well-child visits</li>
                  <li>Growth and development monitoring</li>
                  <li>Vaccination schedule</li>
                  <li>Vision and hearing screening</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">3-5 years</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Annual check-ups</li>
                  <li>Vision and hearing tests</li>
                  <li>Dental check-ups</li>
                  <li>Developmental screening</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">6-12 years</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Annual physical exams</li>
                  <li>Vision screening</li>
                  <li>Dental care</li>
                  <li>Sports physicals as needed</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">13-18 years</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Annual check-ups</li>
                  <li>Mental health screening</li>
                  <li>Sexual health education</li>
                  <li>Substance use screening</li>
                </ul>
              </div>
            </div>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Adults (18-64 years)</h3>
            <div className="space-y-4 mb-6">
              <div>
                <p className="font-semibold">18-39 years</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Annual physical exam</li>
                  <li>Blood pressure screening</li>
                  <li>Cholesterol screening (every 5 years)</li>
                  <li>Diabetes screening (if at risk)</li>
                  <li>Cervical cancer screening (women)</li>
                  <li>Testicular exam (men)</li>
                  <li>Skin cancer screening</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">40-64 years</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Annual physical exam</li>
                  <li>Blood pressure monitoring</li>
                  <li>Cholesterol screening</li>
                  <li>Diabetes screening</li>
                  <li>Colorectal cancer screening (starting at 45)</li>
                  <li>Breast cancer screening (women)</li>
                  <li>Prostate cancer screening (men)</li>
                  <li>Bone density testing (women 50+)</li>
                </ul>
              </div>
            </div>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Seniors (65+ years)</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Annual comprehensive exam</li>
              <li>Blood pressure monitoring</li>
              <li>Cholesterol screening</li>
              <li>Diabetes screening</li>
              <li>Cancer screenings as recommended</li>
              <li>Bone density testing</li>
              <li>Vision and hearing tests</li>
              <li>Cognitive screening</li>
              <li>Fall risk assessment</li>
            </ul>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Vaccinations Throughout Life</h2>
            
            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Childhood Vaccines</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>BCG, DPT, MMR, Polio</li>
              <li>Hepatitis B, Rotavirus</li>
              <li>Pneumococcal, Meningococcal</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Adult Vaccines</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Annual influenza vaccine</li>
              <li>Td/Tdap (every 10 years)</li>
              <li>Pneumococcal (65+)</li>
              <li>Shingles (50+)</li>
              <li>COVID-19 (as recommended)</li>
            </ul>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Lifestyle Prevention</h2>
            
            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Nutrition</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Balanced, varied diet</li>
              <li>Adequate fruits and vegetables</li>
              <li>Whole grains and lean proteins</li>
              <li>Limited processed foods and added sugars</li>
              <li>Proper portion sizes</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Physical Activity</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>150 minutes moderate exercise weekly</li>
              <li>Strength training 2-3 times weekly</li>
              <li>Flexibility and balance exercises</li>
              <li>Regular physical activity throughout life</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Stress Management</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Identify stress sources</li>
              <li>Develop healthy coping strategies</li>
              <li>Practice relaxation techniques</li>
              <li>Maintain work-life balance</li>
              <li>Seek professional help when needed</li>
            </ul>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Building a Preventive Care Plan</h2>
            
            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Choose a Primary Care Provider</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Regular check-ups</li>
              <li>Coordinated care</li>
              <li>Health history maintenance</li>
              <li>Referrals to specialists</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Create a Health Calendar</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Annual physical exams</li>
              <li>Recommended screenings</li>
              <li>Vaccination schedule</li>
              <li>Dental and vision appointments</li>
            </ul>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Overcoming Barriers to Preventive Care</h2>
            
            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Cost Concerns</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Health insurance coverage</li>
              <li>Community health programs</li>
              <li>Sliding scale fees</li>
              <li>Government assistance programs</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Time Constraints</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Schedule appointments in advance</li>
              <li>Combine multiple screenings</li>
              <li>Use telehealth when appropriate</li>
              <li>Prioritize health appointments</li>
            </ul>

            <div className="bg-gray-50 rounded-xl p-6 mt-8">
              <p className={`text-lg font-medium text-black mb-2 ${getHeadingClass()}`}>
                Remember
              </p>
              <p className={`text-gray-700 ${getBodyClass()}`}>
                Preventive care is an investment in your future health and well-being. The time and effort you put into prevention today can save you from serious health problems tomorrow. Work with your healthcare provider to develop a personalized preventive care plan that fits your needs and lifestyle.
              </p>
            </div>
          </div>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/blog" className="text-primary text-sm font-medium hover:underline">← Back to Blog</Link>
          </footer>
        </article>
      </div>
    </div>
  )
} 