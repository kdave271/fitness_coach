import Navigation from '@/components/Navigation';

export default function Services() {
  const services = [
    {
      name: 'Personal Training',
      description: 'One-on-one training sessions tailored to your fitness goals',
      features: [
        'Customized workout plans',
        'Form correction and guidance',
        'Progress tracking',
        'Regular assessments'
      ]
    },
    {
      name: 'Nutrition Planning',
      description: 'Personalized meal plans and dietary guidance',
      features: [
        'Custom meal plans',
        'Nutrition education',
        'Supplement guidance',
        'Weekly meal prep tips'
      ]
    },
    {
      name: 'Transformation Programs',
      description: 'Comprehensive programs for body transformation',
      features: [
        'Before/after tracking',
        'Regular progress photos',
        'Body composition analysis',
        'Goal setting and monitoring'
      ]
    }
  ];

  const tiers = [
    {
      name: 'Silver',
      price: '₹2,999',
      period: 'month',
      description: 'Perfect for beginners starting their fitness journey',
      features: [
        '2 personal training sessions per week',
        'Basic nutrition guidance',
        'WhatsApp support',
        'Monthly progress assessment'
      ]
    },
    {
      name: 'Gold',
      price: '₹4,999',
      period: 'month',
      description: 'Ideal for those seeking more personalized attention',
      features: [
        '4 personal training sessions per week',
        'Customized nutrition plan',
        'Priority WhatsApp support',
        'Weekly progress assessment',
        'Supplement guidance'
      ]
    },
    {
      name: 'Platinum',
      price: '₹7,999',
      period: 'month',
      description: 'Complete transformation package with maximum support',
      features: [
        '6 personal training sessions per week',
        'Premium nutrition planning',
        '24/7 WhatsApp support',
        'Weekly progress assessment',
        'Supplement guidance',
        'Recovery sessions',
        'Monthly body composition analysis'
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <div className="pt-16">
        {/* Services Overview */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold mb-4">{service.name}</h2>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200 hover:border-blue-600 transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-center mb-4">{tier.name}</h3>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-gray-600">/{tier.period}</span>
                  </div>
                  <p className="text-gray-600 text-center mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full btn-primary">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 