import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Layout/Header';
import GeometricBackground from '../components/Common/GeometricBackground';
import WorkoutCard from '../components/Common/WorkoutCard';
import { ArrowLeft, Calendar, Target, Clock, Dumbbell, Play } from 'lucide-react';

const PlanDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan } = location.state || {};
  const [selectedWeek, setSelectedWeek] = useState(1);

  if (!plan) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center">
        <GeometricBackground />
        <div className="relative z-10 text-center">
          <h2 className="text-xl font-bold text-white mb-4">Plan not found</h2>
          <button 
            onClick={() => navigate('/library')}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Library
          </button>
        </div>
      </div>
    );
  }

  const currentWeek = plan.weeks.find(w => w.weekNumber === selectedWeek);
  const availableWeeks = plan.weeks.filter(w => w.workouts && w.workouts.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative">
      <GeometricBackground />
      
      <div className="relative z-10">
        <Header 
          title={plan.name}
          subtitle={plan.description}
        />
        
        <div className="px-4 py-6 pb-24">
          {/* Back Button */}
          <button
            onClick={() => navigate('/library')}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span>Back to Library</span>
          </button>

          {/* Plan Overview */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-6">
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Dumbbell size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-white mb-2">{plan.name}</h1>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Clock size={20} className="text-blue-400 mx-auto mb-1" />
                    <div className="text-sm font-bold text-white">{plan.duration}</div>
                    <div className="text-xs text-gray-400">Duration</div>
                  </div>
                  <div>
                    <Calendar size={20} className="text-purple-400 mx-auto mb-1" />
                    <div className="text-sm font-bold text-white">{plan.daysPerWeek} days</div>
                    <div className="text-xs text-gray-400">Per week</div>
                  </div>
                  <div>
                    <Target size={20} className="text-green-400 mx-auto mb-1" />
                    <div className="text-sm font-bold text-white">{plan.difficulty}</div>
                    <div className="text-xs text-gray-400">Level</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Start Plan Button */}
            <button 
              onClick={() => {
                // Navigate to first workout of first week
                if (availableWeeks.length > 0 && availableWeeks[0].workouts.length > 0) {
                  navigate('/workout', { state: { workout: availableWeeks[0].workouts[0] } });
                }
              }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-bold flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            >
              <Play size={20} className="fill-current" />
              <span>Start This Plan</span>
            </button>
          </div>

          {/* Week Selection */}
          {availableWeeks.length > 1 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white mb-4">Select Week</h3>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {availableWeeks.map((week) => (
                  <button
                    key={week.weekNumber}
                    onClick={() => setSelectedWeek(week.weekNumber)}
                    className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedWeek === week.weekNumber
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-800/50 text-gray-400 hover:text-gray-300 border border-gray-700'
                    }`}
                  >
                    Week {week.weekNumber}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Week Details */}
          {currentWeek ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">{currentWeek.title}</h3>
                <span className="text-sm text-gray-400">
                  {currentWeek.workouts.length} workout{currentWeek.workouts.length !== 1 ? 's' : ''}
                </span>
              </div>
              
              {/* Workouts List */}
              <div className="space-y-3">
                {currentWeek.workouts.map((workout, index) => (
                  <WorkoutCard
                    key={index}
                    workout={workout}
                    onClick={() => navigate('/workout', { state: { workout } })}
                  />
                ))}
              </div>
            </div>
          ) : (
            /* No workouts available for selected week */
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🚧</div>
              <h3 className="text-lg font-semibold text-white mb-2">Week {selectedWeek} Coming Soon</h3>
              <p className="text-gray-400 mb-4">This week's workouts are being prepared.</p>
              {availableWeeks.length > 0 && (
                <button
                  onClick={() => setSelectedWeek(availableWeeks[0].weekNumber)}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  View Week {availableWeeks[0].weekNumber}
                </button>
              )}
            </div>
          )}

          {/* Plan Progress (if user has started this plan) */}
          <div className="mt-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
            <h4 className="text-md font-bold text-white mb-3">Plan Progress</h4>
            <div className="space-y-2">
              {plan.weeks.map((week) => {
                const hasWorkouts = week.workouts && week.workouts.length > 0;
                return (
                  <div
                    key={week.weekNumber}
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                      hasWorkouts 
                        ? 'bg-gray-700/50 hover:bg-gray-700/70 cursor-pointer' 
                        : 'bg-gray-800/30 opacity-50'
                    }`}
                    onClick={() => hasWorkouts && setSelectedWeek(week.weekNumber)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        hasWorkouts 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-600 text-gray-400'
                      }`}>
                        {week.weekNumber}
                      </div>
                      <span className={`text-sm ${hasWorkouts ? 'text-white' : 'text-gray-500'}`}>
                        {week.title}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {hasWorkouts ? `${week.workouts.length} workouts` : 'Coming soon'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetail;