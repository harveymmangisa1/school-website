import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import NewsCard from '../components/NewsCard';

const NewsPage: React.FC = () => {
  return (
    <div>
      <Hero
        title="News & Events"
        subtitle="Stay up-to-date with the latest happenings at Access Christian Elementary School."
        imageUrl="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg"
      />

      {/* Featured News */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="School News"
            subtitle="The latest updates from our community"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news) => (
              <NewsCard
                key={news.id}
                id={news.id}
                title={news.title}
                excerpt={news.excerpt}
                date={news.date}
                imageUrl={news.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-blue-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Mark your calendar for these important dates"
            centered={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="sm:flex">
                      <div className="bg-blue-800 text-white p-4 flex flex-col items-center justify-center sm:w-32 flex-shrink-0">
                        <span className="text-xl font-bold">{event.day}</span>
                        <span className="text-sm">{event.month}</span>
                        <span className="text-sm mt-1">{event.year}</span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{event.description}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <svg 
                            className="h-4 w-4 mr-1" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                            />
                          </svg>
                          <span>{event.time}</span>
                          {event.location && (
                            <>
                              <span className="mx-2">•</span>
                              <svg 
                                className="h-4 w-4 mr-1" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} 
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                                />
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} 
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                                />
                              </svg>
                              <span>{event.location}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-4 bg-blue-800 text-white">
                  <h3 className="text-xl font-semibold">Academic Calendar</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {calendarItems.map((item, index) => (
                      <li key={index} className="pb-4 border-b border-gray-200 last:border-0">
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.date}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-4 bg-gray-50">
                  <a 
                    href="#" 
                    className="text-blue-700 font-medium hover:text-blue-800 inline-flex items-center"
                  >
                    Download Full Calendar
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="section-padding bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-blue-100 mb-8">
              Subscribe to our newsletter to receive school updates, event notifications, 
              and important announcements directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800"
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-400 text-white font-medium px-6 py-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-blue-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample news data
const newsItems = [
  {
    id: "1",
    title: "Annual Science Fair Showcases Student Innovation",
    date: "May 15, 2025",
    excerpt: "Students presented impressive projects demonstrating their understanding of scientific principles through creative experiments and research.",
    imageUrl: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg",
  },
  {
    id: "2",
    title: "School Choir Wins Regional Competition",
    date: "April 28, 2025",
    excerpt: "Our talented choir students brought home the first-place trophy at the Central Region School Choir Championships held at Lilongwe Community Center.",
    imageUrl: "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg",
  },
  {
    id: "3",
    title: "New Computer Lab Opening Ceremony",
    date: "April 10, 2025",
    excerpt: "Thanks to generous donations from our school community and local businesses, we're excited to announce the opening of our new state-of-the-art computer lab.",
    imageUrl: "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg",
  },
  {
    id: "4",
    title: "Students Participate in Math Olympics",
    date: "March 22, 2025",
    excerpt: "Ten of our students represented Access Christian Elementary in the national Math Olympics, with two bringing home medals in their respective categories.",
    imageUrl: "https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg",
  },
  {
    id: "5",
    title: "Cultural Day Celebrates Diversity",
    date: "March 5, 2025",
    excerpt: "Our annual Cultural Day celebration featured traditional music, dance, food, and clothing from the diverse backgrounds represented in our school community.",
    imageUrl: "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg",
  },
  {
    id: "6",
    title: "Parent-Teacher Association Fundraiser Success",
    date: "February 18, 2025",
    excerpt: "The PTA's annual fundraiser exceeded expectations, raising funds for new playground equipment and classroom resources. Thank you to all who contributed!",
    imageUrl: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg",
  },
];

// Sample upcoming events data
const upcomingEvents = [
  {
    title: "Parent-Teacher Conferences",
    description: "Individual meetings to discuss student progress and goals.",
    day: "15",
    month: "Jun",
    year: "2025",
    time: "1:00 PM - 7:00 PM",
    location: "School Classrooms",
  },
  {
    title: "End-of-Year Concert",
    description: "Students showcase their musical talents in our annual performance.",
    day: "22",
    month: "Jun",
    year: "2025",
    time: "6:00 PM",
    location: "School Auditorium",
  },
  {
    title: "Sports Day",
    description: "A day of athletic competitions for all grade levels.",
    day: "28",
    month: "Jun",
    year: "2025",
    time: "9:00 AM - 3:00 PM",
    location: "School Playing Fields",
  },
  {
    title: "Graduation Ceremony",
    description: "Celebrating our Grade 6 students as they complete their elementary education.",
    day: "05",
    month: "Jul",
    year: "2025",
    time: "10:00 AM",
    location: "School Auditorium",
  },
];

// Sample calendar items
const calendarItems = [
  {
    title: "First Day of Term 3",
    date: "April 12, 2025",
  },
  {
    title: "Mid-Term Break",
    date: "May 24-30, 2025",
  },
  {
    title: "Final Exams",
    date: "June 28 - July 2, 2025",
  },
  {
    title: "Last Day of School",
    date: "July 5, 2025",
  },
  {
    title: "Teacher Professional Development",
    date: "July 6-10, 2025",
  },
  {
    title: "School Office Summer Hours",
    date: "July 11 - August 20, 2025",
  },
  {
    title: "First Day of 2025-2026 School Year",
    date: "September 6, 2025",
  },
];

export default NewsPage;