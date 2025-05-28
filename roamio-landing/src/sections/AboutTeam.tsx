import Image from 'next/image';

const teamMembers = [
  {
    name: 'Arya Shah',
    title: 'COO',
    image: '/placeholder-headshot.jpg', // Replace with actual image path
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Jean Liu',
    title: 'CTO',
    image: '/placeholder-headshot.jpg', // Replace with actual image path
    bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  // Add more team members as needed
];

const AboutTeam = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-secondary">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-4">
                 <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary mb-3">{member.title}</p>
              <p className="text-gray-700 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam; 