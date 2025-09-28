import React from 'react';
import { Bell, User } from 'lucide-react';

const Header = ({ title, subtitle, showNotifications = true }) => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-800">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GV</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">GYMVERSE</h1>
                {subtitle && (
                  <p className="text-xs text-gray-400">{subtitle}</p>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            {showNotifications && (
              <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <Bell size={20} className="text-gray-300" />
              </button>
            )}
            <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
              <User size={20} className="text-gray-300" />
            </button>
          </div>
        </div>
        
        {title && (
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;