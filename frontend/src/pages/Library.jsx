import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Layout/Header';
import GeometricBackground from '../components/Common/GeometricBackground';
import { workoutPlans, exerciseLibrary } from '../data/mockData';
import { Search, Filter, Play, Clock, Target, Dumbbell } from 'lucide-react';

const Library = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('plans'); // 'plans' or 'exercises'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredPlans = workoutPlans.filter(plan => 
    plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plan.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredExercises = exerciseLibrary.filter(exercise => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         exercise.primaryMuscle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || 
                         exercise.primaryMuscle.toLowerCase() === selectedFilter.toLowerCase() ||
                         exercise.equipment.toLowerCase() === selectedFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const muscleGroups = ['all', 'chest', 'back', 'shoulders', 'arms', 'legs', 'core'];
  const equipmentTypes = ['all', 'barbell', 'dumbbells', 'bodyweight', 'machine'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative">
      <GeometricBackground />
      
      <div className="relative z-10">
        <Header title="Library" />
        
        <div className="px-4 py-6 pb-24">
          {/* Tab Navigation */}
          <div className="flex mb-6">
            <div className="bg-gray-800/50 rounded-xl p-1 flex">
              <button
                onClick={() => setActiveTab('plans')}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'plans'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Workout Plans
              </button>
              <button
                onClick={() => setActiveTab('exercises')}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'exercises'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Exercises
              </button>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
            />
          </div>
          
          {/* Filter Bar */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <Filter size={16} className="text-gray-400" />
              <span className="text-sm text-gray-400">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {(activeTab === 'exercises' ? muscleGroups : ['all', 'beginner', 'intermediate', 'advanced']).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedFilter === filter
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-800/50 text-gray-400 hover:text-gray-300 border border-gray-700'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Content */}
          {activeTab === 'plans' ? (
            <div className="space-y-4">
              {filteredPlans.map((plan) => (
                <div 
                  key={plan.id}
                  onClick={() => navigate('/plan', { state: { plan } })}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:border-gray-600 transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Dumbbell size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{plan.name}</h3>
                      <p className="text-sm text-gray-400 mb-3">{plan.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock size={12} />
                          <span>{plan.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Target size={12} />
                          <span>{plan.daysPerWeek} days/week</span>
                        </div>
                        <div className="px-2 py-1 bg-gray-700 rounded text-xs font-medium">
                          {plan.difficulty}
                        </div>
                      </div>
                    </div>
                    <Play size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredExercises.map((exercise) => (
                <div 
                  key={exercise.id}
                  onClick={() => navigate('/exercise', { state: { exercise } })}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:border-gray-600 transition-all duration-200 cursor-pointer group"
                >
                  <div className="aspect-video bg-gray-700 rounded-lg mb-3 overflow-hidden">
                    <img 
                      src={exercise.image} 
                      alt={exercise.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">{exercise.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{exercise.primaryMuscle}</p>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 bg-gray-700 rounded text-gray-300">{exercise.equipment}</span>
                      <span className={`px-2 py-1 rounded ${
                        exercise.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        exercise.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {exercise.difficulty}
                      </span>
                    </div>
                    <Play size={14} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Empty State */}
          {((activeTab === 'plans' && filteredPlans.length === 0) || 
            (activeTab === 'exercises' && filteredExercises.length === 0)) && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-white mb-2">No results found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Library;