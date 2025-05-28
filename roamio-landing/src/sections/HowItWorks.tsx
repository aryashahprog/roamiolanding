const HowItWorks = () => {
  const steps = [
    'Download & sign up',
    'Select your campus',
    'Sync your class schedule',
    'Start navigating',
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-secondary">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image Carousel Placeholder */}
          <div className="w-full md:w-1/2 bg-gray-300 aspect-video flex items-center justify-center rounded-lg">
            <p className="text-gray-600">Screenshot Carousel (requires a library like react-slick)</p>
          </div>
          {/* Numbered Steps */}
          <div className="w-full md:w-1/2">
            <ol className="list-decimal list-inside space-y-4 text-lg">
              {steps.map((step, index) => (
                <li key={index} className="font-bold">
                  <span className="font-normal text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 