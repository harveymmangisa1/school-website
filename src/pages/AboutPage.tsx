import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import { Users, BookOpen, Heart, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Hero
        title="About Our School"
        subtitle="Learn about our history, mission, and the values that guide everything we do."
        imageUrl="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg"
      />

      {/* History and Mission */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our History"
                subtitle="Serving Lilongwe families since 2005"
              />
              <p className="text-gray-700 mb-6">
                Access Christian Elementary School was founded in 2005 by a group of devoted 
                Christian educators who saw the need for an educational institution that would 
                provide academic excellence while nurturing children's spiritual growth.
              </p>
              <p className="text-gray-700 mb-6">
                What began as a small school with just 35 students has grown into a thriving 
                educational community serving over 300 students from diverse backgrounds across Lilongwe.
              </p>
              <p className="text-gray-700">
                Throughout our history, we have remained committed to our founding principles 
                of integrating faith with learning, promoting academic excellence, and developing 
                well-rounded students who will make a positive impact in their communities.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8617742/pexels-photo-8617742.jpeg"
                alt="School building"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-800 text-white p-6 rounded-lg shadow-lg max-w-xs">
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p>
                  To provide a Christ-centered education that equips students with academic 
                  excellence, biblical values, and servant leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-blue-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Core Values"
            subtitle="These principles guide everything we do at Access Christian Elementary"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md flex">
              <div className="mr-6">
                <div className="bg-blue-100 p-3 rounded-full text-blue-800">
                  <BookOpen size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Excellence</h3>
                <p className="text-gray-700">
                  We strive for the highest standards of academic achievement, encouraging curiosity, 
                  critical thinking, and a love for lifelong learning.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md flex">
              <div className="mr-6">
                <div className="bg-yellow-100 p-3 rounded-full text-yellow-700">
                  <Heart size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Christ-Centered</h3>
                <p className="text-gray-700">
                  We integrate biblical principles throughout our curriculum and daily activities, 
                  helping students develop a personal relationship with Jesus Christ.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md flex">
              <div className="mr-6">
                <div className="bg-green-100 p-3 rounded-full text-green-700">
                  <Users size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
                <p className="text-gray-700">
                  We foster a supportive community where students, families, and staff partner 
                  together to create a nurturing environment for all.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md flex">
              <div className="mr-6">
                <div className="bg-purple-100 p-3 rounded-full text-purple-700">
                  <Star size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Character Development</h3>
                <p className="text-gray-700">
                  We prioritize character formation, helping students develop integrity, compassion, 
                  responsibility, and servant leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Facilities"
            subtitle="Designed to create an optimal learning environment for students"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
                <img
                  src={facility.imageUrl}
                  alt={facility.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{facility.name}</h3>
                    <p className="text-white/90">{facility.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="section-padding bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Statement of Faith</h2>
            <div className="space-y-4 text-blue-100 text-lg">
              <p>
                We believe the Bible is the inspired and infallible Word of God, the sole authority for faith and life.
              </p>
              <p>
                We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.
              </p>
              <p>
                We believe in the deity of Jesus Christ, His virgin birth, sinless life, atoning death, bodily resurrection, 
                ascension to the right hand of the Father, and His personal return in power and glory.
              </p>
              <p>
                We believe that salvation comes through faith in Jesus Christ alone, by God's grace, and not by human effort.
              </p>
              <p>
                We believe in the present ministry of the Holy Spirit, by whose indwelling Christians are enabled to live godly lives.
              </p>
              <p>
                We believe in the spiritual unity of believers in our Lord Jesus Christ, and the resurrection of both saved and lost, 
                the saved to eternal life and the lost to eternal separation from God.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample facilities data
const facilities = [
  {
    name: "Modern Classrooms",
    description: "Spacious, well-lit classrooms equipped with interactive learning technology.",
    imageUrl: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg",
  },
  {
    name: "Computer Lab",
    description: "State-of-the-art computers with educational software and internet access.",
    imageUrl: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
  },
  {
    name: "Library",
    description: "Extensive collection of books and resources to foster a love of reading.",
    imageUrl: "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg",
  },
  {
    name: "Sports Facilities",
    description: "Playing fields and courts for physical education and team sports.",
    imageUrl: "https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg",
  },
  {
    name: "Science Lab",
    description: "Fully equipped laboratory for hands-on scientific exploration.",
    imageUrl: "https://images.pexels.com/photos/2280551/pexels-photo-2280551.jpeg",
  },
  {
    name: "Assembly Hall",
    description: "Gathering space for chapel services, performances, and school events.",
    imageUrl: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
  },
];

export default AboutPage;