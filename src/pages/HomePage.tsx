import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Button from '../components/Button';
import { BookOpen, Award, Users, Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero
        title="Nurturing Hearts and Minds Through Christ-Centered Education"
        subtitle="Access Christian Elementary School provides academic excellence within a caring, Christian environment in Lilongwe."
        imageUrl="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
        primaryButtonText="Apply Now"
        primaryButtonLink="/admissions"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
      />

      {/* Mission Statement */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We exist to provide a Christ-centered education that equips students with academic 
              excellence, biblical values, and servant leadership to impact their community and the world.
            </p>
            <Link to="/about">
              <Button variant="primary">
                Learn About Our School
                <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Choose Access Christian Elementary"
            subtitle="We provide a nurturing environment where children can grow academically, spiritually, and socially."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card
              icon={<BookOpen size={24} />}
              title="Academic Excellence"
            >
              <p className="text-gray-600">
                Our curriculum exceeds national standards while integrating biblical principles across all subjects.
              </p>
            </Card>

            <Card
              icon={<Users size={24} />}
              title="Small Class Sizes"
            >
              <p className="text-gray-600">
                With low student-to-teacher ratios, we ensure personalized attention for each child's unique needs.
              </p>
            </Card>

            <Card
              icon={<Award size={24} />}
              title="Christian Values"
            >
              <p className="text-gray-600">
                We foster character development through biblical teachings and Christ-like examples.
              </p>
            </Card>

            <Card
              icon={<Calendar size={24} />}
              title="Enrichment Activities"
            >
              <p className="text-gray-600">
                Students enjoy sports, music, art, and service opportunities to develop well-rounded skills.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA - Admissions */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold mb-4">Join Our School Family</h2>
              <p className="text-blue-100 text-lg max-w-2xl">
                Applications for the upcoming academic year are now open. Schedule a tour to see our 
                facilities and meet our dedicated teachers.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions">
                <Button variant="secondary" size="lg">
                  Apply Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Schedule a Tour
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Parents Say"
            subtitle="Hear from families who are part of our school community."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">Parent</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News/Events Preview */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <SectionHeading
              title="Latest News & Events"
              subtitle="Stay updated with what's happening at our school."
              className="mb-0"
            />
            <Link
              to="/news"
              className="text-blue-700 font-medium inline-flex items-center hover:text-blue-800 mt-4 md:mt-0"
            >
              View All News
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map((news) => (
              <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar size={16} className="mr-1" />
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <Link
                    to={`/news/${news.id}`}
                    className="text-blue-700 font-medium inline-flex items-center hover:text-blue-800"
                  >
                    Read More
                    <svg
                      className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample testimonial data
const testimonials = [
  {
    name: "Sarah Johnson",
    quote: "Access Christian provides an excellent balance of academic rigor and Christian values. My children are thriving both academically and spiritually.",
    imageUrl: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg",
  },
  {
    name: "David Banda",
    quote: "The teachers truly care about each student. They go above and beyond to ensure every child succeeds and feels valued.",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    name: "Grace Mwanza",
    quote: "Choosing Access Christian was the best decision for our family. The community is welcoming, and the education is outstanding.",
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
];

// Sample recent news data
const recentNews = [
  {
    id: "1",
    title: "Annual Science Fair Showcases Student Innovation",
    date: "May 15, 2025",
    excerpt: "Students presented impressive projects demonstrating their understanding of scientific principles through creative experiments.",
    imageUrl: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg",
  },
  {
    id: "2",
    title: "School Choir Wins Regional Competition",
    date: "April 28, 2025",
    excerpt: "Our talented choir students brought home the first-place trophy at the Central Region School Choir Championships.",
    imageUrl: "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg",
  },
  {
    id: "3",
    title: "New Computer Lab Opening Ceremony",
    date: "April 10, 2025",
    excerpt: "Thanks to generous donations, we're excited to announce the opening of our new state-of-the-art computer lab.",
    imageUrl: "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg",
  },
];

export default HomePage;