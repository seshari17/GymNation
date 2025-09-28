import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Layout/Header';
import GeometricBackground from '../components/Common/GeometricBackground';
import { Play, Pause, Check, Clock, Target, ArrowLeft } from 'lucide-react';

const WorkoutDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { workout } = location.state || {};
  
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [exerciseData, setExerciseData] = useState(
    workout?.exercises?.map(ex => ({
      ...ex,
      completedSets: [],
      isCompleted: false
    })) || []
  );
  const [isWorkoutStarted, setIsWorkoutStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [workoutTime, setWorkoutTime] = useState(0);
  const [timer, setTimer] = useState(null);
  
  if (!workout) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-white mb-4">Workout not found</h2>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }
  
  const currentExercise = exerciseData[currentExerciseIndex];
  const completedExercises = exerciseData.filter(ex => ex.isCompleted).length;
  const totalExercises = exerciseData.length;
  const progressPercentage = (completedExercises / totalExercises) * 100;
  
  const startWorkout = () => {
    setIsWorkoutStarted(true);
    const interval = setInterval(() => {
      setWorkoutTime(prev => prev + 1);
    }, 1000);
    setTimer(interval);
  };
  
  const pauseWorkout = () => {
    setIsPaused(!isPaused);
    if (isPaused && timer) {
      const interval = setInterval(() => {
        setWorkoutTime(prev => prev + 1);
      }, 1000);
      setTimer(interval);
    } else {
      clearInterval(timer);
    }
  };
  
  const completeSet = (setIndex) => {
    const updatedData = [...exerciseData];
    const exercise = updatedData[currentExerciseIndex];
    
    if (!exercise.completedSets.includes(setIndex)) {
      exercise.completedSets.push(setIndex);
      
      // Check if all sets are completed
      if (exercise.completedSets.length === exercise.sets) {
        exercise.isCompleted = true;
      }
    }
    
    setExerciseData(updatedData);
  };
  
  const nextExercise = () => {
    if (currentExerciseIndex < exerciseData.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
    }
  };
  
  const prevExercise = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(prev => prev - 1);
    }
  };
  
  const finishWorkout = () => {
    clearInterval(timer);
    // Save workout data here
    navigate('/workout-complete', { 
      state: { 
        workout, 
        duration: workoutTime, 
        completedExercises 
      } 
    });
  };
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative">
      <GeometricBackground />
      
      <div className="relative z-10">
        <Header 
          title={workout.name}
          subtitle={`${workout.day} • ${workout.duration}`}
        />
        
        <div className="px-4 py-6 pb-24">
          {!isWorkoutStarted ? (
            /* Pre-workout overview */
            <div className="space-y-6">
              {/* Workout Stats */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Clock size={24} className="text-blue-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">{workout.duration}</div>
                    <div className="text-xs text-gray-400">Duration</div>
                  </div>
                  <div>
                    <Target size={24} className="text-purple-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">{workout.exercises.length}</div>
                    <div className="text-xs text-gray-400">Exercises</div>
                  </div>
                  <div>
                    <div className="text-2xl mb-2">💪</div>
                    <div className="text-lg font-bold text-white">Ready</div>
                    <div className="text-xs text-gray-400">Let's go!</div>
                  </div>
                </div>
              </div>
              
              {/* Exercise List */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white mb-4">Exercises in this workout:</h3>
                {workout.exercises.map((exercise, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-white">{exercise.name}</h4>
                        <p className="text-sm text-gray-400">{exercise.equipment}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-white">{exercise.sets} sets</div>
                        <div className="text-xs text-gray-400">{exercise.reps} reps</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Start Button */}
              <button
                onClick={startWorkout}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              >
                <Play size={24} className="fill-current" />
                <span>Start Workout</span>
              </button>
            </div>
          ) : (
            /* Active workout */
            <div className="space-y-6">
              {/* Progress Bar */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Progress</span>
                  <span className="text-sm text-gray-400">{formatTime(workoutTime)}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{completedExercises} of {totalExercises} exercises</span>
                  <span>{Math.round(progressPercentage)}%</span>
                </div>
              </div>
              
              {/* Current Exercise */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-white">{currentExercise.name}</h2>
                    <p className="text-sm text-gray-400">{currentExercise.equipment}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-white">{currentExercise.sets} Sets</div>
                    <div className="text-sm text-gray-400">{currentExercise.reps} Reps</div>
                  </div>
                </div>
                
                {/* Sets */}
                <div className="space-y-2 mb-6">
                  {Array.from({ length: currentExercise.sets }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => completeSet(index)}
                      className={`w-full p-3 rounded-lg border transition-all duration-200 ${
                        currentExercise.completedSets.includes(index)
                          ? 'bg-green-500/20 border-green-500 text-green-400'
                          : 'bg-gray-700/50 border-gray-600 text-white hover:border-gray-500'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>Set {index + 1}</span>
                        <div className="flex items-center space-x-2">
                          <span>{currentExercise.reps} reps</span>
                          {currentExercise.completedSets.includes(index) && (
                            <Check size={16} className="text-green-400" />
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                
                {/* Exercise Navigation */}
                <div className="flex space-x-3">
                  <button
                    onClick={prevExercise}
                    disabled={currentExerciseIndex === 0}
                    className="flex-1 bg-gray-700 text-white py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
                  >
                    Previous
                  </button>
                  {currentExerciseIndex === exerciseData.length - 1 ? (
                    <button
                      onClick={finishWorkout}
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200"
                    >
                      Finish Workout
                    </button>
                  ) : (
                    <button
                      onClick={nextExercise}
                      className="flex-1 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                    >
                      Next Exercise
                    </button>
                  )}
                </div>
              </div>
              
              {/* Control Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={pauseWorkout}
                  className="flex-1 bg-yellow-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-yellow-600 transition-colors"
                >
                  {isPaused ? <Play size={20} /> : <Pause size={20} />}
                  <span>{isPaused ? 'Resume' : 'Pause'}</span>
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="flex-1 bg-red-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-red-600 transition-colors"
                >
                  <ArrowLeft size={20} />
                  <span>Exit</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetail;