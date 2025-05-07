import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import { BookOpen, Puzzle, Music, Trophy, Palette, Globe, Heart  } from 'lucide-react';

const AcademicsPage: React.FC = () => {
  return (
    <div>
      <Hero
        title="Academic Excellence"
        subtitle="Our comprehensive curriculum integrates faith and learning to develop well-rounded students."
        imageUrl="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg"
      />

      {/* Curriculum Overview */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Curriculum"
                subtitle="Comprehensive education that meets and exceeds national standards"
              />
              <p className="text-gray-700 mb-6">
                At Access Christian Elementary, our curriculum is carefully designed to provide a strong academic 
                foundation while integrating biblical principles. We follow and exceed the Malawi national curriculum 
                standards, ensuring our students are well-prepared for future academic success.
              </p>
              <p className="text-gray-700 mb-6">
                Our approach to education is holistic, addressing the intellectual, physical, social, emotional, 
                and spiritual development of each child. We emphasize critical thinking, problem-solving, creativity, 
                and effective communication – skills that will serve students throughout their lives.
              </p>
              <p className="text-gray-700">
                Small class sizes allow our dedicated teachers to provide personalized attention and adapt 
                teaching strategies to meet the diverse learning needs of all students.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5905471/pexels-photo-5905471.jpeg"
                alt="Students in classroom"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grade Levels */}
      <section className="section-padding bg-blue-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Grade Levels"
            subtitle="Educational programs tailored to each developmental stage"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="Kindergarten (Ages 4-5)"
              className="h-full"
            >
              <p className="text-gray-700 mb-4">
                Our kindergarten program focuses on developing foundational skills through play-based learning, 
                structured activities, and exploration. Students learn basic literacy, numeracy, and social skills 
                in a nurturing environment.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Early literacy and phonics</li>
                <li>Number concepts and counting</li>
                <li>Social skills development</li>
                <li>Creative expression</li>
                <li>Introduction to Bible stories</li>
              </ul>
            </Card>

            <Card
              title="Lower Primary (Grades 1-3)"
              className="h-full"
            >
              <p className="text-gray-700 mb-4">
                Lower primary students continue building strong foundations in core academic areas while 
                developing independence and responsibility. Emphasis is placed on reading fluency, 
                comprehension, and mathematical concepts.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Reading and writing development</li>
                <li>Mathematics and problem-solving</li>
                <li>Science and social studies</li>
                <li>Bible studies and character education</li>
                <li>Introduction to Chichewa</li>
              </ul>
            </Card>

            <Card
              title="Upper Primary (Grades 4-6)"
              className="h-full"
            >
              <p className="text-gray-700 mb-4">
                Upper primary students engage in more advanced academic content and develop critical thinking skills. 
                The curriculum expands to include deeper exploration of science, history, and the arts.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Advanced literacy and literature</li>
                <li>Mathematical operations and concepts</li>
                <li>Science experiments and research</li>
                <li>History and social studies</li>
                <li>Christian worldview integration</li>
                <li>Leadership development</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Subjects */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Core Subjects"
            subtitle="A well-rounded academic foundation"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreSubjects.map((subject, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-800 mr-4">
                    {subject.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{subject.name}</h3>
                </div>
                <p className="text-gray-700">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Extracurricular Activities"
            subtitle="Developing well-rounded students through diverse experiences"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extracurriculars.map((activity, index) => (
              <div key={index} className="relative overflow-hidden group">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={activity.imageUrl}
                    alt={activity.name}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end">
                  <div className="p-6">
                    <div className="bg-white/90 text-blue-800 p-2 inline-block rounded-full mb-3">
                      {activity.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{activity.name}</h3>
                    <p className="text-white/90">{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Approach */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Educational Approach"
            subtitle="Creating an environment where students can thrive"
            centered={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Christ-Centered Learning</h3>
              <p className="text-gray-700 mb-4">
                Biblical principles are integrated throughout our curriculum. Students learn to view 
                all subjects through the lens of faith, understanding how God's truth applies to every 
                area of knowledge.
              </p>
              <p className="text-gray-700">
                Regular chapel services, Bible classes, and prayer are essential components of our 
                educational approach, nurturing students' spiritual growth alongside their academic development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Differentiated Instruction</h3>
              <p className="text-gray-700 mb-4">
                We recognize that each child learns differently. Our teachers employ diverse teaching 
                strategies to accommodate various learning styles, ensuring that every student can succeed.
              </p>
              <p className="text-gray-700">
                Support services are available for students who need additional assistance, and challenging 
                extension activities are provided for those who are ready for more advanced work.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Character Development</h3>
              <p className="text-gray-700 mb-4">
                We place strong emphasis on character formation, helping students develop traits such as integrity, compassion, responsibility, and perseverance.
              </p>
              <p className="text-gray-700">
                Service learning projects and community outreach opportunities teach students to apply 
                Christian values in practical ways and develop a heart for serving others.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Core subjects data
const coreSubjects = [
  {
    name: "Language Arts",
    description: "Developing strong reading, writing, speaking, and listening skills through literature, composition, grammar, and vocabulary instruction.",
    icon: <BookOpen size={24} />,
  },
  {
    name: "Mathematics",
    description: "Building problem-solving abilities through number sense, operations, measurement, geometry, data analysis, and mathematical reasoning.",
    icon: <Puzzle size={24} />,
  },
  {
    name: "Science",
    description: "Exploring God's creation through life, earth, and physical sciences with hands-on experiments and inquiry-based learning.",
    icon: <Globe size={24} />,
  },
  {
    name: "Social Studies",
    description: "Learning about history, geography, economics, and civics with a focus on Malawi, Africa, and global perspectives.",
    icon: <Globe size={24} />,
  },
  {
    name: "Bible",
    description: "Developing biblical literacy, understanding of Christian doctrine, and application of faith principles to daily life.",
    icon: <BookOpen size={24} />,
  },
  {
    name: "Chichewa",
    description: "Learning Malawi's national language to build cultural understanding and maintain connection to local heritage.",
    icon: <Globe size={24} />,
  },
];

// Extracurricular activities data
const extracurriculars = [
  {
    name: "Sports",
    description: "Soccer, netball, athletics, and more to develop teamwork, discipline, and physical fitness.",
    imageUrl: "https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg",
    icon: <Trophy size={20} />,
  },
  {
    name: "Music",
    description: "Choir, instrumental instruction, and music appreciation to nurture artistic expression.",
    imageUrl: "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg",
    icon: <Music size={20} />,
  },
  {
    name: "Art",
    description: "Drawing, painting, crafts, and other visual arts to encourage creativity and self-expression.",
    imageUrl: "https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg",
    icon: <Palette size={20} />,
  },
  {
    name: "Christian Service",
    description: "Community outreach projects that put faith into action and develop servant leadership.",
    imageUrl: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
    icon: <Heart size={20} />,
  },
];

export default AcademicsPage;