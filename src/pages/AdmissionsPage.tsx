import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { CheckCircle, Calendar, HelpCircle } from 'lucide-react';

const AdmissionsPage: React.FC = () => {
  return (
    <div>
      <Hero
        title="Join Our School Community"
        subtitle="Learn about our admissions process and how to apply for enrollment."
        imageUrl="https://images.pexels.com/photos/5212684/pexels-photo-5212684.jpeg"
      />

      {/* Admissions Overview */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Welcome to Access Christian Elementary"
              subtitle="We're delighted you're considering our school for your child's education"
              centered={true}
            />
            <p className="text-gray-700 mb-8">
              Access Christian Elementary School welcomes applications from families who desire 
              a Christ-centered education for their children. We admit students of any race, color, 
              nationality, and ethnic origin to all rights, privileges, programs, and activities 
              generally accorded or made available to students at the school.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Schedule a School Tour
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Process */}
      <section className="section-padding bg-blue-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Admissions Process"
            subtitle="Follow these steps to apply for admission to our school"
            centered={true}
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute h-full w-0.5 bg-blue-200 left-8 top-0 hidden md:block"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {admissionsSteps.map((step, index) => (
                  <div key={index} className="relative md:pl-24">
                    {/* Timeline circle */}
                    <div className="absolute left-0 top-0 bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-md hidden md:flex">
                      <span className="text-xl font-bold">{index + 1}</span>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                      <div className="flex items-center mb-4">
                        <div className="md:hidden bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">
                          <span className="text-lg font-bold">{index + 1}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-700 mb-4">{step.description}</p>
                      {step.notes && (
                        <div className="bg-blue-50 p-4 rounded-md">
                          <p className="text-blue-800 text-sm">{step.notes}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Admission Requirements"
                subtitle="Documents and information needed for the application process"
              />
              <ul className="space-y-4">
                {requirementsList.map((requirement, index) => (
                  <li key={index} className="flex">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5088179/pexels-photo-5088179.jpeg"
                alt="Parent and child"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tuition and Fees */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Tuition and Fees"
            subtitle="Investment in your child's future"
            centered={true}
          />

          <div className="max-w-4xl mx-auto">
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <div className="border-b border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-blue-50">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Grade Level</th>
                      <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Annual Tuition</th>
                      <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Registration Fee</th>
                      <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Materials Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {tuitionData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.level}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{item.tuition}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{item.registration}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{item.materials}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 bg-blue-50">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> A 5% discount is available for families with multiple children enrolled. 
                  Payment plans are available in three installments per term.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Important Dates"
            subtitle="Mark your calendar for the upcoming academic year"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {importantDates.map((date, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">{date.title}</h3>
                </div>
                <p className="text-gray-700 mb-2">{date.date}</p>
                {date.description && <p className="text-sm text-gray-600">{date.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-blue-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Answers to common questions about our admissions process"
            centered={true}
          />

          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start mb-3">
                    <HelpCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                  </div>
                  <p className="text-gray-700 pl-9">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              Have more questions about admissions? We're here to help!
            </p>
            <Link to="/contact">
              <Button variant="primary">Contact Our Admissions Office</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Admissions process steps data
const admissionsSteps = [
  {
    title: "Inquiry",
    description: "Contact our admissions office to express interest and request information about our school. You can call, email, or complete the inquiry form on our website.",
    notes: "We encourage families to start the admissions process at least 3-6 months before the desired enrollment date.",
  },
  {
    title: "School Tour",
    description: "Schedule a visit to tour our campus, observe classes, and meet with administrators. This is a great opportunity to see our programs in action and ask questions.",
  },
  {
    title: "Submit Application",
    description: "Complete and submit the application form along with all required documents and the application fee. Applications can be submitted online or in person at our office.",
  },
  {
    title: "Assessment",
    description: "Students applying for grades 1-6 will complete an academic assessment to help us understand their learning needs and determine appropriate placement.",
    notes: "Kindergarten applicants participate in a readiness screening rather than an academic assessment.",
  },
  {
    title: "Family Interview",
    description: "Parents and the prospective student meet with the school principal to discuss educational goals, expectations, and how our school can partner with your family.",
  },
  {
    title: "Admission Decision",
    description: "After reviewing all application materials, assessment results, and the family interview, an admission decision will be communicated, typically within 2 weeks.",
  },
  {
    title: "Enrollment",
    description: "Upon acceptance, complete the enrollment process by signing the enrollment contract and paying the registration fee to secure your child's place.",
  },
];

// Admission requirements data
const requirementsList = [
  "Completed application form",
  "Birth certificate or passport copy",
  "Previous school records (for grades 1-6)",
  "Immunization records",
  "Recent passport-sized photographs",
  "Completed health form signed by a physician",
  "Application fee (non-refundable)",
  "Parent/guardian national ID or passport copy",
];

// Tuition data
const tuitionData = [
  {
    level: "Kindergarten",
    tuition: "MK 950,000",
    registration: "MK 35,000",
    materials: "MK 25,000",
  },
  {
    level: "Grades 1-3",
    tuition: "MK 1,050,000",
    registration: "MK 35,000",
    materials: "MK 30,000",
  },
  {
    level: "Grades 4-6",
    tuition: "MK 1,150,000",
    registration: "MK 35,000",
    materials: "MK 35,000",
  },
];

// Important dates data
const importantDates = [
  {
    title: "Application Deadline",
    date: "March 31, 2025",
    description: "For Fall 2025 enrollment",
  },
  {
    title: "Admission Notifications",
    date: "April 30, 2025",
    description: "Decisions communicated to families",
  },
  {
    title: "Registration Deadline",
    date: "May 31, 2025",
    description: "For accepted students",
  },
  {
    title: "New Parent Orientation",
    date: "August 20, 2025",
    description: "Information session for new families",
  },
  {
    title: "First Day of School",
    date: "September 6, 2025",
    description: "2025-2026 Academic Year begins",
  },
  {
    title: "School Tours",
    date: "Every Tuesday, 9:00 AM",
    description: "By appointment only",
  },
];

// FAQ data
const faqItems = [
  {
    question: "How old must my child be to enter Kindergarten?",
    answer: "Children must be 4 years old by June 1st of the year they begin Kindergarten.",
  },
  {
    question: "Do you offer financial aid or scholarships?",
    answer: "Yes, we offer limited need-based financial assistance to qualifying families. Please contact our admissions office for more information about the application process.",
  },
  {
    question: "Is there a waiting list for any grades?",
    answer: "Some grades may have waiting lists, particularly in Kindergarten and lower primary. We encourage families to apply early. If a grade is full, qualified applicants will be placed on a waiting list.",
  },
  {
    question: "Do you accept mid-year admissions?",
    answer: "Yes, we consider mid-year applications when space is available. The same application process applies.",
  },
  {
    question: "What is your class size?",
    answer: "We maintain small class sizes to ensure individual attention. Kindergarten classes have a maximum of 18 students, while Grades 1-6 have a maximum of 22 students per class.",
  },
];

export default AdmissionsPage;