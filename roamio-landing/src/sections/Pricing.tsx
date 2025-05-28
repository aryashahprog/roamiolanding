const Pricing = () => {
  const pricingTiers = [
    {
      name: 'Free',
      price: '$0',
      features: [
        'Basic indoor navigation',
        'Limited event access',
        'Community support',
      ],
      popular: false,
    },
    {
      name: 'Premium',
      price: '$4.99/mo',
      features: [
        'Advanced indoor navigation',
        'Full event access',
        'Schedule sync',
        'Real-time nudges',
        'Priority support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'All Premium features',
        'Campus-wide analytics',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 support',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-secondary">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-gray-100 p-6 rounded-lg shadow-md relative ${tier.popular ? 'border-2 border-primary' : ''}`}
            >
              {tier.popular && (
                <span className="absolute top-0 right-0 -mt-3 mr-4 bg-accent text-secondary text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
              )}
              <h3 className="text-2xl font-bold text-secondary mb-3">{tier.name}</h3>
              <p className="text-3xl font-bold mb-4 text-primary">{tier.price}</p>
              <ul className="text-gray-700 text-left space-y-2 mb-6">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2 px-4 rounded-full font-bold ${tier.popular ? 'bg-primary text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-700 cursor-not-allowed'}`}>
                {tier.popular ? 'Sign Up' : 'Coming Soon'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 