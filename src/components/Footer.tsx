
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/logo.png" 
                alt="ავტიზმის ცენტრი"
                className="h-8 w-8 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-sm font-bold">AC</span>
              </div>
              <span className="text-xl font-bold">ავტიზმის ცენტრი</span>
            </div>
            <p className="text-gray-300 mb-4">
              ჩვენი მისიაა ავტიზმის სპექტრის მქონე ბავშვებისა და მათი ოჯახების მხარდაჭერა 
              პროფესიონალური მომსახურებისა და განათლების მეშვეობით.
            </p>
            <div className="flex items-center space-x-2 text-red-400">
              <Heart className="h-4 w-4" />
              <span className="text-sm">გაკეთებულია სიყვარულით ბავშვებისთვის</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">სწრაფი ბმულები</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">სერვისები</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">ჩვენს შესახებ</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors">გუნდი</Link></li>
              <li><Link to="/donation" className="text-gray-300 hover:text-white transition-colors">დონაცია</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">კონტაქტი</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">რაფაელ აღლაძის ქუჩა 30 ა, თბილისი, საქართველო</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">032 271 44 08</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">info@autismcenter.ge</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 ავტიზმის ცენტრი. ყველა უფლება დაცულია.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
