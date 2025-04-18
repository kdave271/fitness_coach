import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function About() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Weight Loss Client',
      text: 'Deepak\'s expertise and dedication helped me achieve my fitness goals. His personalized approach and constant support made all the difference.',
      image: '/images/testimonial-1.jpg'
    },
    {
      name: 'Mike Chen',
      role: 'Strength Training Client',
      text: 'Working with Deepak has been transformative. His knowledge of fitness and nutrition is exceptional, and he truly cares about his clients\' success.',
      image: '/images/testimonial-2.jpg'
    },
    {
      name: 'Emma Davis',
      role: 'Wellness Client',
      text: 'Deepak\'s holistic approach to fitness and wellness helped me develop sustainable habits that have improved my overall quality of life.',
      image: '/images/testimonial-3.jpg'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="pt-16">
        {/* Biography Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/about-deepak.jpg"
                  alt="Deepak Tiwari"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-6">About Deepak Tiwari</h1>
                <p className="text-gray-600 mb-4">
                  With over 10 years of experience in the fitness industry, I have dedicated my life to helping people achieve their fitness goals and transform their lives through proper training and nutrition.
                </p>
                <p className="text-gray-600 mb-4">
                  My journey in fitness began with my own transformation, which inspired me to become a certified fitness coach. I hold multiple certifications in personal training, nutrition, and sports science, allowing me to provide comprehensive fitness solutions to my clients.
                </p>
                <div className="mt-8">
                  <h2 className="text-2xl font-semibold mb-4">Certifications & Achievements</h2>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Certified Personal Trainer (CPT)</li>
                    <li>• Nutrition Specialist Certification</li>
                    <li>• Sports Science Degree</li>
                    <li>• Yoga Instructor Certification</li>
                    <li>• Multiple National Level Competitions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 