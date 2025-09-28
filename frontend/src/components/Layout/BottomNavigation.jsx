import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Library, TrendingUp, Settings } from 'lucide-react';

const BottomNavigation = () => {
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/library', icon: Library, label: 'Library' },
    { to: '/progress', icon: TrendingUp, label: 'Progress' },
    { to: '/settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 z-50">
      <div className="flex justify-around items-center py-2 px-4">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'text-blue-400 bg-blue-400/10'
                  : 'text-gray-400 hover:text-gray-300'
              }`
            }
          >
            <Icon size={20} />
            <span className="text-xs mt-1 font-medium">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;