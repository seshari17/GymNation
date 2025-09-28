import React from 'react';
import { Clock, Target, ChevronRight } from 'lucide-react';

const WorkoutCard = ({ workout, onClick, isActive = false }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-4 cursor-pointer transition-all duration-300 border ${
        isActive 
          ? 'border-blue-400 shadow-lg shadow-blue-400/20 scale-[1.02]' 
          : 'border-gray-700 hover:border-gray-600 hover:scale-[1.01]'
      }`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-blue-400" />
        </svg>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-1">{workout.name}</h3>
            <p className="text-sm text-gray-400">{workout.day}</p>
          </div>
          <ChevronRight size={20} className="text-gray-400 flex-shrink-0 ml-2" />
        </div>
        
        <div className="flex items-center space-x-4 mb-3">
          <div className="flex items-center space-x-1">
            <Clock size={16} className="text-blue-400" />
            <span className="text-sm text-gray-300">{workout.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Target size={16} className="text-purple-400" />
            <span className="text-sm text-gray-300">{workout.exercises?.length || 0} exercises</span>
          </div>
        </div>
        
        {/* Exercise preview */}
        {workout.exercises && workout.exercises.length > 0 && (
          <div className="space-y-1">
            {workout.exercises.slice(0, 2).map((exercise, index) => (
              <div key={index} className="flex justify-between items-center text-xs">
                <span className="text-gray-400">{exercise.name}</span>
                <span className="text-gray-500">{exercise.sets}×{exercise.reps}</span>
              </div>
            ))}
            {workout.exercises.length > 2 && (
              <div className="text-xs text-gray-500">
                +{workout.exercises.length - 2} more exercises
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Active indicator */}
      {isActive && (
        <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
      )}
    </div>
  );
};

export default WorkoutCard;