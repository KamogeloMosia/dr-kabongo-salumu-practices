"use client"
import Link from "next/link"
import { useTheme } from "@/context/theme-provider"
import Header from "@/components/header"

export default function ChronicConditionsPage() {
  const { getHeadingClass, getBodyClass } = useTheme()
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        <Link href="/blog" className="text-primary text-xs font-medium mb-4 inline-block text-left">← Back to Blog</Link>
        
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className={`text-2xl md:text-4xl font-bold text-black mb-4 text-left ${getHeadingClass()}`}>
              Diabetes Management: Living Well with Diabetes
            </h1>
            <p className={`text-sm md:text-lg text-gray-600 mb-6 max-w-3xl text-left ${getBodyClass()}`}>
              Comprehensive guide to managing diabetes through diet, exercise, medication, and lifestyle changes. Learn about prevention and treatment options.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>By Dr. Kabongo Salumu</span>
              <span>•</span>
              <span>January 25, 2024</span>
              <span>•</span>
              <span>9 min read</span>
            </div>
          </header>

          <div className={`prose max-w-none text-gray-800 leading-relaxed ${getBodyClass()}`}>
            <p className="text-lg mb-6">
              Diabetes is a chronic condition that affects how your body processes glucose (sugar). With proper management, people with diabetes can live healthy, active lives.
            </p>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Understanding Diabetes</h2>
            
            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Types of Diabetes</h3>
            <div className="space-y-4 mb-6">
              <div>
                <p className="font-semibold">Type 1 Diabetes</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Autoimmune condition where body doesn't produce insulin</li>
                  <li>Usually diagnosed in children and young adults</li>
                  <li>Requires insulin therapy</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">Type 2 Diabetes</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Body becomes resistant to insulin or doesn't produce enough</li>
                  <li>Most common type, often related to lifestyle factors</li>
                  <li>Can be managed with diet, exercise, and medication</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">Gestational Diabetes</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Develops during pregnancy</li>
                  <li>Usually resolves after childbirth</li>
                  <li>Increases risk of Type 2 diabetes later</li>
                </ul>
              </div>
            </div>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Symptoms and Diagnosis</h2>
            
            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Common Symptoms</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Increased thirst and frequent urination</li>
              <li>Extreme hunger</li>
              <li>Unexplained weight loss</li>
              <li>Fatigue and irritability</li>
              <li>Blurred vision</li>
              <li>Slow-healing sores</li>
              <li>Frequent infections</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Diagnosis</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Fasting blood glucose test</li>
              <li>Oral glucose tolerance test</li>
              <li>A1C test (average blood sugar over 3 months)</li>
              <li>Random blood glucose test</li>
            </ul>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Blood Sugar Management</h2>
            
            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Target Ranges</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Before meals:</strong> 80-130 mg/dL (4.4-7.2 mmol/L)</li>
              <li><strong>2 hours after meals:</strong> Less than 180 mg/dL (10.0 mmol/L)</li>
              <li><strong>A1C:</strong> Less than 7% (individualized)</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Monitoring</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Regular blood glucose testing</li>
              <li>Continuous glucose monitoring (CGM)</li>
              <li>Keeping a log of readings</li>
              <li>Understanding patterns and trends</li>
            </ul>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Nutrition and Diabetes</h2>
            
            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Carbohydrate Management</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Count carbohydrates in meals</li>
              <li>Choose complex carbs over simple sugars</li>
              <li>Distribute carbs throughout the day</li>
              <li>Consider glycemic index of foods</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Healthy Eating Principles</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Vegetables:</strong> Fill half your plate</li>
              <li><strong>Proteins:</strong> Lean meats, fish, legumes</li>
              <li><strong>Grains:</strong> Whole grains in moderation</li>
              <li><strong>Fruits:</strong> In controlled portions</li>
              <li><strong>Fats:</strong> Healthy fats in moderation</li>
            </ul>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Physical Activity</h2>
            
            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Benefits of Exercise</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Improves insulin sensitivity</li>
              <li>Helps control blood sugar</li>
              <li>Aids weight management</li>
              <li>Reduces cardiovascular risk</li>
              <li>Boosts mood and energy</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Exercise Guidelines</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Aerobic exercise:</strong> 150 minutes weekly</li>
              <li><strong>Strength training:</strong> 2-3 times weekly</li>
              <li><strong>Flexibility:</strong> Regular stretching</li>
              <li><strong>Start slowly:</strong> Gradually increase intensity</li>
            </ul>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Medication Management</h2>
            
            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Oral Medications</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Metformin:</strong> First-line treatment for Type 2</li>
              <li><strong>Sulfonylureas:</strong> Stimulate insulin production</li>
              <li><strong>DPP-4 inhibitors:</strong> Help control blood sugar</li>
              <li><strong>SGLT2 inhibitors:</strong> Remove glucose through urine</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Insulin Therapy</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Rapid-acting:</strong> Mealtime coverage</li>
              <li><strong>Long-acting:</strong> Basal insulin needs</li>
              <li><strong>Premixed:</strong> Combination products</li>
              <li><strong>Insulin pumps:</strong> Continuous delivery</li>
            </ul>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Preventing Complications</h2>
            
            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Regular Check-ups</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>A1C:</strong> Every 3-6 months</li>
              <li><strong>Blood pressure:</strong> Every visit</li>
              <li><strong>Cholesterol:</strong> Annually</li>
              <li><strong>Kidney function:</strong> Annually</li>
              <li><strong>Eye exam:</strong> Annually</li>
              <li><strong>Foot exam:</strong> Every visit</li>
            </ul>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Foot Care</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Daily foot inspection</li>
              <li>Proper footwear</li>
              <li>Regular podiatry visits</li>
              <li>Immediate attention to sores</li>
              <li>Good hygiene</li>
            </ul>

            <h2 className={`text-xl md:text-2xl font-bold text-black mt-8 mb-4 ${getHeadingClass()}`}>Emergency Preparedness</h2>
            
            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Hypoglycemia (Low Blood Sugar)</h3>
            <p className="mb-3"><strong>Symptoms:</strong> Shakiness, sweating, confusion, hunger</p>
            <p className="mb-3"><strong>Treatment:</strong> Fast-acting carbohydrates (glucose tablets, juice)</p>
            <p className="mb-4"><strong>Prevention:</strong> Regular meals, medication timing, exercise planning</p>

            <h3 className={`text-lg md:text-xl font-semibold text-black mt-6 mb-3 ${getHeadingClass()}`}>Hyperglycemia (High Blood Sugar)</h3>
            <p className="mb-3"><strong>Symptoms:</strong> Thirst, frequent urination, fatigue</p>
            <p className="mb-3"><strong>Treatment:</strong> Check blood sugar, take medication as prescribed</p>
            <p className="mb-6"><strong>Prevention:</strong> Diet, exercise, medication compliance</p>

            <div className="bg-gray-50 rounded-xl p-6 mt-8">
              <p className={`text-lg font-medium text-black mb-2 ${getHeadingClass()}`}>
                Remember
              </p>
              <p className={`text-gray-700 ${getBodyClass()}`}>
                Diabetes management is a journey, not a destination. With proper care, education, and support, you can live a full, healthy life with diabetes. Work closely with your healthcare team and don't hesitate to ask questions or seek help when needed.
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