import { FaLightbulb, FaUsers, FaMapMarkedAlt } from 'react-icons/fa'; // Example icons, you may need to install react-icons

const Features = () => {
  const featureItems = [
    {
      icon: FaLightbulb,
      title: 'Smart Nudges',
      description: 'Using AI, Roamio learns what you care about and nudges you in real time toward the right events at the right time—no spam, no FOMO, just real opportunities to connect.',
    },
    {
      icon: FaUsers,
      title: 'Student-Hosted Events',
      description: 'Whether it\'s a movie night, culture club mixer, or study group, students can host and join themed events built around shared interests, not forced small talk.',
    },
    {
      icon: FaMapMarkedAlt,
      title: 'Indoor Navigation (Coming Soon)',
      description: 'Never get lost again. Roamio will guide you through every hallway and hidden corner—from first-year welcome fairs to tucked-away office hours—so you can show up confidently.',
    },
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4 text-primary">
                <feature.icon size={40} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 