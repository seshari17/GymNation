import React, { useState } from 'react';
import Header from '../components/Layout/Header';
import GeometricBackground from '../components/Common/GeometricBackground';
import { progressData, userProfile } from '../data/mockData';
import { TrendingUp, Calendar, Weight, Target, Award } from 'lucide-react';

const Progress = () => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'workouts', 'stats'

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'workouts', label: 'Workouts', icon: Calendar },
    { id: 'stats', label: 'Body Stats', icon: Weight }
  ];

  const achievements = [
    { title: 'First Workout', description: 'Completed your first workout', achieved: true },
    { title: 'Week Warrior', description: 'Completed a full week', achieved: true },
    { title: 'Strong Start', description: 'Completed 10 workouts', achieved: true },
    { title: 'Consistency King', description: 'Completed 25 workouts', achieved: true },
    { title: 'Dedication Master', description: 'Complete 50 workouts', achieved: false },
    { title: 'Century Club', description: 'Complete 100 workouts', achieved: false }
  ];

  const recentWorkouts = progressData.workoutsCompleted.slice(-5).reverse();
  const latestBodyStats = progressData.bodyStats[progressData.bodyStats.length - 1];
  const previousBodyStats = progressData.bodyStats[progressData.bodyStats.length - 2];

  const weightChange = latestBodyStats && previousBodyStats 
    ? (latestBodyStats.weight - previousBodyStats.weight).toFixed(1)
    : 0;
  const bodyFatChange = latestBodyStats && previousBodyStats
    ? (latestBodyStats.bodyFat - previousBodyStats.bodyFat).toFixed(1)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative">
      <GeometricBackground />
      
      <div className="relative z-10">
        <Header title="Progress" />
        
        <div className="px-4 py-6 pb-24">
          {/* Tab Navigation */}
          <div className="flex mb-6 overflow-x-auto">
            <div className="bg-gray-800/50 rounded-xl p-1 flex space-x-1 min-w-full">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex-1 justify-center ${
                      activeTab === tab.id
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar size={20} className="text-blue-400" />
                    <span className="text-sm text-gray-400">Total Workouts</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{userProfile.totalWorkouts}</div>
                  <div className="text-xs text-green-400">+4 this week</div>
                </div>
                
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Target size={20} className="text-purple-400" />
                    <span className="text-sm text-gray-400">Current Week</span>
                  </div>
                  <div className="text-2xl font-bold text-white">Week {userProfile.currentWeek}</div>
                  <div className="text-xs text-blue-400">On track</div>
                </div>
              </div>
              
              {/* Body Stats Summary */}
              {latestBodyStats && (
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                    <Weight size={20} className="text-green-400" />
                    <span>Body Stats</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Weight</div>
                      <div className="text-xl font-bold text-white">{latestBodyStats.weight} kg</div>
                      <div className={`text-xs ${
                        parseFloat(weightChange) < 0 ? 'text-green-400' : 
                        parseFloat(weightChange) > 0 ? 'text-red-400' : 'text-gray-400'
                      }`}>
                        {parseFloat(weightChange) !== 0 ? `${weightChange > 0 ? '+' : ''}${weightChange} kg` : 'No change'}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Body Fat</div>
                      <div className="text-xl font-bold text-white">{latestBodyStats.bodyFat}%</div>
                      <div className={`text-xs ${
                        parseFloat(bodyFatChange) < 0 ? 'text-green-400' : 
                        parseFloat(bodyFatChange) > 0 ? 'text-red-400' : 'text-gray-400'
                      }`}>
                        {parseFloat(bodyFatChange) !== 0 ? `${bodyFatChange > 0 ? '+' : ''}${bodyFatChange}%` : 'No change'}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Achievements */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                  <Award size={20} className="text-yellow-400" />
                  <span>Achievements</span>
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg ${
                        achievement.achieved 
                          ? 'bg-yellow-400/10 border border-yellow-400/20' 
                          : 'bg-gray-700/30 border border-gray-600'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        achievement.achieved ? 'bg-yellow-400 text-gray-900' : 'bg-gray-600 text-gray-400'
                      }`}>
                        <Award size={16} />
                      </div>
                      <div className="flex-1">
                        <div className={`font-semibold ${
                          achievement.achieved ? 'text-white' : 'text-gray-400'
                        }`}>
                          {achievement.title}
                        </div>
                        <div className="text-sm text-gray-500">{achievement.description}</div>
                      </div>
                      {achievement.achieved && (
                        <div className="text-yellow-400 text-xl">✓</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Workouts Tab */}
          {activeTab === 'workouts' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">Recent Workouts</h3>
              {recentWorkouts.map((workout, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white">{workout.workoutName}</h4>
                    <span className="text-sm text-gray-400">{workout.date}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{workout.duration} min</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Target size={14} />
                      <span>Completed</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Body Stats Tab */}
          {activeTab === 'stats' && (
            <div className="space-y-6">
              {/* Current Stats */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                <h3 className="text-lg font-bold text-white mb-4">Current Measurements</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{userProfile.weight}</div>
                    <div className="text-sm text-gray-400">Weight (kg)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{userProfile.height}</div>
                    <div className="text-sm text-gray-400">Height (cm)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{userProfile.bmi}</div>
                    <div className="text-sm text-gray-400">BMI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">{latestBodyStats?.bodyFat}%</div>
                    <div className="text-sm text-gray-400">Body Fat</div>
                  </div>
                </div>
              </div>
              
              {/* Progress History */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                <h3 className="text-lg font-bold text-white mb-4">Progress History</h3>
                <div className="space-y-3">
                  {progressData.bodyStats.slice().reverse().map((stat, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                      <div className="text-sm text-gray-400">{stat.date}</div>
                      <div className="flex space-x-4 text-sm">
                        <span className="text-white">{stat.weight} kg</span>
                        <span className="text-gray-400">{stat.bodyFat}% BF</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Progress;