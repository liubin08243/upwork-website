import React from 'react';
import { Shield, Home, Car, Heart } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Comprehensive Coverage', description: 'Protect yourself against a wide range of risks' },
  { icon: Home, title: 'Home Insurance', description: 'Safeguard your home and personal property' },
  { icon: Car, title: 'Auto Insurance', description: 'Get the best rates for your vehicle insurance' },
  { icon: Heart, title: 'Life Insurance', description: 'Ensure your family\'s financial security' },
];

const Features = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <feature.icon className="mx-auto mb-4 text-blue-500" size={48} />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;