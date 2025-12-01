import React from 'react';

const About: React.FC = () => {
  const team = [
    { name: "Sarah Jenkins", role: "CEO & Founder", img: "https://picsum.photos/400/400?random=10" },
    { name: "Michael Chen", role: "Head of Strategy", img: "https://picsum.photos/400/400?random=11" },
    { name: "Jessica Ross", role: "Creative Director", img: "https://picsum.photos/400/400?random=12" },
    { name: "David Kim", role: "Lead Developer", img: "https://picsum.photos/400/400?random=13" },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-slate-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">We Are Lumina</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A diverse team of creators, strategists, and technologists tailored to help you thrive in the digital age.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <img src="https://picsum.photos/800/600?random=15" alt="Office culture" className="rounded-3xl shadow-2xl" />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At Lumina, we believe that every brand has a unique story waiting to be told. Our mission is to amplify that story through innovative digital marketing solutions that connect, engage, and convert.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded in 2018, we've grown from a small creative duo to a powerhouse agency trusted by Fortune 500 companies and agile startups alike.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l-4 border-primary-500 pl-4">
                  <span className="block text-3xl font-bold text-slate-900">5+</span>
                  <span className="text-sm text-slate-500">Years Experience</span>
                </div>
                <div className="border-l-4 border-secondary-500 pl-4">
                  <span className="block text-3xl font-bold text-slate-900">500+</span>
                  <span className="text-sm text-slate-500">Successful Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet The Experts</h2>
            <p className="text-slate-600">The brilliant minds behind your success.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                <div className="h-80 overflow-hidden relative">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm font-medium">"Passionate about driving results and innovation."</p>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-primary-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;