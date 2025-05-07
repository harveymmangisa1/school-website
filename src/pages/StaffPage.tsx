import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import StaffCard from '../components/StaffCard';

const StaffPage: React.FC = () => {
  return (
    <div>
      <Hero
        title="Our Staff"
        subtitle="Meet the dedicated team of educators who inspire and guide our students every day."
        imageUrl="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg"
      />

      {/* Administration */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Administration"
            subtitle="Leadership team dedicated to our school's mission and vision"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {administrationStaff.map((staff, index) => (
              <StaffCard
                key={index}
                name={staff.name}
                position={staff.position}
                imageUrl={staff.imageUrl}
                description={staff.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="section-padding bg-blue-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Faculty"
            subtitle="Our experienced and passionate teachers"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyStaff.map((staff, index) => (
              <StaffCard
                key={index}
                name={staff.name}
                position={staff.position}
                imageUrl={staff.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Support Staff"
            subtitle="The team that keeps our school running smoothly"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportStaff.map((staff, index) => (
              <StaffCard
                key={index}
                name={staff.name}
                position={staff.position}
                imageUrl={staff.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="section-padding bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-blue-100 mb-6">
              We're always looking for dedicated educators and staff who are passionate about 
              Christ-centered education and making a difference in the lives of children.
            </p>
            <p className="text-blue-100 mb-8">
              If you're interested in employment opportunities at Access Christian Elementary School, 
              please visit our Contact page to submit your application or inquiry.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-white font-medium px-6 py-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-blue-800"
            >
              View Current Openings
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample administration staff data
const administrationStaff = [
  {
    name: "Dr. Michael Banda",
    position: "Principal",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    description: "Dr. Banda has led our school for 8 years, bringing over 20 years of experience in education. He holds a Ph.D. in Educational Leadership from the University of Malawi.",
  },
  {
    name: "Mrs. Grace Mwanza",
    position: "Vice Principal",
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    description: "Mrs. Mwanza oversees curriculum development and teacher support. She has been with Access Christian for 10 years and has a Master's in Curriculum Design.",
  },
  {
    name: "Mr. James Chirwa",
    position: "Business Manager",
    imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    description: "Mr. Chirwa manages the school's finances and operations. He brings 15 years of business experience and holds an MBA from Malawi University of Business.",
  },
];

// Sample faculty staff data
const facultyStaff = [
  {
    name: "Mrs. Sarah Phiri",
    position: "Kindergarten Teacher",
    imageUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
  },
  {
    name: "Mr. Thomas Gondwe",
    position: "Grade 1 Teacher",
    imageUrl: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
  },
  {
    name: "Ms. Martha Nyirenda",
    position: "Grade 2 Teacher",
    imageUrl: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
  },
  {
    name: "Mr. David Njovu",
    position: "Grade 3 Teacher",
    imageUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
  },
  {
    name: "Ms. Elizabeth Tembo",
    position: "Grade 4 Teacher",
    imageUrl: "https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg",
  },
  {
    name: "Mr. John Mbewe",
    position: "Grade 5 Teacher",
    imageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
  },
  {
    name: "Mrs. Ruth Kamanga",
    position: "Grade 6 Teacher",
    imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  },
  {
    name: "Mr. Daniel Ngoma",
    position: "Music Teacher",
    imageUrl: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
  },
];

// Sample support staff data
const supportStaff = [
  {
    name: "Ms. Christine Manda",
    position: "School Secretary",
    imageUrl: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
  },
  {
    name: "Mr. Peter Chulu",
    position: "IT Coordinator",
    imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  },
  {
    name: "Mrs. Mary Zulu",
    position: "Librarian",
    imageUrl: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
  },
  {
    name: "Mr. Samuel Mtonga",
    position: "Maintenance Supervisor",
    imageUrl: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg",
  },
];

export default StaffPage;