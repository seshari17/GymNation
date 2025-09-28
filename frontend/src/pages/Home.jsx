import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Layout/Header';
import GeometricBackground from '../components/Common/GeometricBackground';
import WorkoutCard from '../components/Common/WorkoutCard';
import { userProfile, workoutPlans } from '../data/mockData';
import { Play, Calendar, Trophy, Zap } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [currentPlan] = useState(workoutPlans[0]); // Overall Fitness plan
  const currentWeek = currentPlan.weeks.find(w => w.weekNumber === userProfile.currentWeek);
  const nextWorkout = currentWeek?.workouts?.[0];

  const stats = [
    { label: 'Current Week', value: `Week ${userProfile.currentWeek}`, icon: Calendar },
    { label: 'Total Workouts', value: userProfile.totalWorkouts, icon: Trophy },
    { label: 'Fitness Level', value: userProfile.fitnessLevel, icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative">
      <GeometricBackground />
      
      <div className="relative z-10">
        <Header 
          subtitle={`Welcome back, ${userProfile.name}`}
        />
        
        <div className="px-4 py-6 pb-24">
          {/* Current Plan Hero */}
          <div className="mb-6">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-6">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">{currentPlan.name.toUpperCase()}</h2>
                    <p className="text-blue-100">{currentPlan.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-white">BMI</div>
                    <div className="text-xl font-bold text-blue-100">{userProfile.bmi}</div>
                  </div>
                </div>
                
                {/* Progress indicator */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-blue-100 mb-2">
                    <span>Week {userProfile.currentWeek} of {currentPlan.weeks.length}</span>
                    <span>{Math.round((userProfile.currentWeek / currentPlan.weeks.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-white rounded-full h-2 transition-all duration-300"
                      style={{ width: `${(userProfile.currentWeek / currentPlan.weeks.length) * 100}%` }}
                    />
                  </div>
                </div>
                
                {nextWorkout && (
                  <button 
                    onClick={() => navigate('/workout', { state: { workout: nextWorkout } })}
                    className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-white hover:bg-white/30 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Play size={20} className="fill-current" />
                    <span className="font-semibold">Start Today's Workout</span>
                  </button>
                )}
              </div>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-3 text-center">
                  <Icon size={20} className="text-blue-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
          
          {/* Weekly Progress */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-4">Weekly Progress</h3>
            <div className="space-y-3">
              {currentPlan.weeks.map((week, index) => {
                const isActive = week.weekNumber === userProfile.currentWeek;
                const isCompleted = week.weekNumber < userProfile.currentWeek;
                const isLocked = week.weekNumber > userProfile.currentWeek;
                
                return (
                  <div 
                    key={week.weekNumber}
                    className={`relative rounded-xl p-4 border transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? 'bg-blue-500/20 border-blue-400 shadow-lg shadow-blue-400/20' 
                        : isCompleted
                        ? 'bg-green-500/10 border-green-500/30'
                        : isLocked
                        ? 'bg-gray-800/30 border-gray-700 opacity-50'
                        : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                    }`}
                    onClick={() => {
                      if (!isLocked && week.workouts.length > 0) {
                        navigate('/week', { state: { week } });
                      }
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          isActive 
                            ? 'bg-blue-500 text-white' 
                            : isCompleted
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-600 text-gray-300'
                        }`}>
                          {week.weekNumber}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{week.title}</h4>
                          <p className="text-sm text-gray-400">
                            {week.workouts.length} workout{week.workouts.length !== 1 ? 's' : ''}
                          </p>
                        </div>
                      </div>
                      
                      {isActive && (
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                      )}
                      {isCompleted && (
                        <div className="text-green-400">
                          <Trophy size={16} />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => navigate('/library')}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center hover:border-gray-600 transition-all duration-200"
            >
              <div className="text-2xl mb-2">📚</div>
              <div className="text-sm font-semibold text-white">Exercise Library</div>
              <div className="text-xs text-gray-400">Browse all exercises</div>
            </button>
            
            <button 
              onClick={() => navigate('/progress')}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center hover:border-gray-600 transition-all duration-200"
            >
              <div className="text-2xl mb-2">📊</div>
              <div className="text-sm font-semibold text-white">View Progress</div>
              <div className="text-xs text-gray-400">Track your gains</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;