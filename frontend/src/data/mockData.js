// Comprehensive Gymnation fitness database based on professional programming

export const userProfile = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  fitnessLevel: "Intermediate",
  goal: "Muscle Building",
  workoutDaysPerWeek: 4,
  availableEquipment: ["Dumbbells", "Barbell", "Bench", "Pull-up Bar", "Cable Machine"],
  bmi: 24.2,
  weight: 75,
  height: 175,
  currentWeek: 3,
  joinDate: "2024-01-15",
  totalWorkouts: 42
};

export const workoutPlans = [
  {
    id: 1,
    name: "Push Pull Legs",
    description: "3-6 Day Split, Muscle Building Focus",
    duration: "12 weeks",
    difficulty: "Intermediate",
    daysPerWeek: 6,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    weeks: [
      {
        weekNumber: 1,
        title: "WEEK 1 - FOUNDATION",
        workouts: [
          {
            id: 1,
            day: "Day 1",
            name: "Push (Chest, Shoulders, Triceps)",
            duration: "60-75 min",
            exercises: [
              { name: "Barbell Bench Press", sets: 4, reps: "8-10", equipment: "Barbell", weight: "70-80% 1RM", restTime: "2-3 min" },
              { name: "Overhead Press", sets: 4, reps: "8-10", equipment: "Barbell", weight: "65-75% 1RM", restTime: "2-3 min" },
              { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", equipment: "Dumbbells", weight: "Moderate", restTime: "90 sec" },
              { name: "Lateral Raises", sets: 3, reps: "12-15", equipment: "Dumbbells", weight: "Light-Moderate", restTime: "60 sec" },
              { name: "Tricep Dips", sets: 3, reps: "10-15", equipment: "Bodyweight", weight: "Bodyweight", restTime: "60 sec" },
              { name: "Overhead Tricep Extension", sets: 3, reps: "10-12", equipment: "Dumbbells", weight: "Moderate", restTime: "60 sec" }
            ]
          },
          {
            id: 2,
            day: "Day 2",
            name: "Pull (Back, Biceps)",
            duration: "60-75 min",
            exercises: [
              { name: "Deadlift", sets: 4, reps: "6-8", equipment: "Barbell", weight: "75-85% 1RM", restTime: "3-4 min" },
              { name: "Pull-ups/Chin-ups", sets: 4, reps: "6-10", equipment: "Bodyweight", weight: "Bodyweight/Assisted", restTime: "2-3 min" },
              { name: "Barbell Rows", sets: 4, reps: "8-10", equipment: "Barbell", weight: "Moderate-Heavy", restTime: "2 min" },
              { name: "Lat Pulldown", sets: 3, reps: "10-12", equipment: "Cable", weight: "Moderate", restTime: "90 sec" },
              { name: "Barbell Curls", sets: 4, reps: "10-12", equipment: "Barbell", weight: "Moderate", restTime: "60 sec" },
              { name: "Hammer Curls", sets: 3, reps: "10-12", equipment: "Dumbbells", weight: "Moderate", restTime: "60 sec" }
            ]
          },
          {
            id: 3,
            day: "Day 3",
            name: "Legs (Quads, Hamstrings, Glutes, Calves)",
            duration: "75-90 min",
            exercises: [
              { name: "Back Squats", sets: 4, reps: "8-10", equipment: "Barbell", weight: "75-85% 1RM", restTime: "3-4 min" },
              { name: "Romanian Deadlift", sets: 4, reps: "8-10", equipment: "Barbell", weight: "Moderate-Heavy", restTime: "2-3 min" },
              { name: "Bulgarian Split Squats", sets: 3, reps: "10-12 each leg", equipment: "Dumbbells", weight: "Moderate", restTime: "90 sec" },
              { name: "Leg Press", sets: 3, reps: "12-15", equipment: "Machine", weight: "Heavy", restTime: "90 sec" },
              { name: "Walking Lunges", sets: 3, reps: "12-15 each leg", equipment: "Dumbbells", weight: "Light-Moderate", restTime: "60 sec" },
              { name: "Calf Raises", sets: 4, reps: "15-20", equipment: "Machine/Dumbbells", weight: "Heavy", restTime: "60 sec" },
              { name: "Leg Curls", sets: 3, reps: "12-15", equipment: "Machine", weight: "Moderate", restTime: "60 sec" }
            ]
          }
        ]
      },
      {
        weekNumber: 2,
        title: "WEEK 2 - PROGRESSIVE OVERLOAD",
        workouts: [
          {
            id: 4,
            day: "Day 1",
            name: "Push (Chest, Shoulders, Triceps)",
            duration: "65-80 min",
            exercises: [
              { name: "Barbell Bench Press", sets: 4, reps: "6-8", equipment: "Barbell", weight: "75-85% 1RM", restTime: "3-4 min" },
              { name: "Overhead Press", sets: 4, reps: "6-8", equipment: "Barbell", weight: "70-80% 1RM", restTime: "3 min" },
              { name: "Incline Dumbbell Press", sets: 4, reps: "8-10", equipment: "Dumbbells", weight: "Moderate-Heavy", restTime: "2 min" },
              { name: "Dumbbell Flyes", sets: 3, reps: "10-12", equipment: "Dumbbells", weight: "Light-Moderate", restTime: "90 sec" },
              { name: "Lateral Raises", sets: 4, reps: "12-15", equipment: "Dumbbells", weight: "Light-Moderate", restTime: "60 sec" },
              { name: "Close-Grip Bench Press", sets: 3, reps: "8-10", equipment: "Barbell", weight: "Moderate", restTime: "90 sec" },
              { name: "Tricep Pushdowns", sets: 3, reps: "10-12", equipment: "Cable", weight: "Moderate", restTime: "60 sec" }
            ]
          },
          {
            id: 5,
            day: "Day 2",
            name: "Pull (Back, Biceps)",
            duration: "65-80 min",
            exercises: [
              { name: "Deadlift", sets: 4, reps: "5-6", equipment: "Barbell", weight: "80-90% 1RM", restTime: "4-5 min" },
              { name: "Weighted Pull-ups", sets: 4, reps: "6-8", equipment: "Bodyweight + Weight", weight: "Added Weight", restTime: "3 min" },
              { name: "T-Bar Rows", sets: 4, reps: "8-10", equipment: "T-Bar/Landmine", weight: "Heavy", restTime: "2 min" },
              { name: "Cable Rows", sets: 3, reps: "10-12", equipment: "Cable", weight: "Moderate-Heavy", restTime: "90 sec" },
              { name: "Face Pulls", sets: 3, reps: "15-20", equipment: "Cable", weight: "Light-Moderate", restTime: "60 sec" },
              { name: "Preacher Curls", sets: 4, reps: "8-10", equipment: "Barbell/EZ-Bar", weight: "Moderate", restTime: "90 sec" },
              { name: "Cable Hammer Curls", sets: 3, reps: "10-12", equipment: "Cable", weight: "Moderate", restTime: "60 sec" }
            ]
          },
          {
            id: 6,
            day: "Day 3",
            name: "Legs (Quads, Hamstrings, Glutes, Calves)",
            duration: "80-95 min",
            exercises: [
              { name: "Front Squats", sets: 4, reps: "6-8", equipment: "Barbell", weight: "70-80% 1RM", restTime: "3-4 min" },
              { name: "Stiff Leg Deadlift", sets: 4, reps: "8-10", equipment: "Barbell", weight: "Moderate-Heavy", restTime: "2-3 min" },
              { name: "Leg Press", sets: 4, reps: "12-15", equipment: "Machine", weight: "Heavy", restTime: "2 min" },
              { name: "Step-ups", sets: 3, reps: "10-12 each leg", equipment: "Dumbbells", weight: "Moderate", restTime: "90 sec" },
              { name: "Hip Thrusts", sets: 4, reps: "10-12", equipment: "Barbell", weight: "Heavy", restTime: "90 sec" },
              { name: "Standing Calf Raises", sets: 4, reps: "12-15", equipment: "Machine", weight: "Heavy", restTime: "60 sec" },
              { name: "Seated Calf Raises", sets: 3, reps: "15-20", equipment: "Machine", weight: "Moderate", restTime: "60 sec" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Upper Lower Split",
    description: "4 Day Split, Balanced Development",
    duration: "10 weeks",
    difficulty: "Beginner-Intermediate",
    daysPerWeek: 4,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop",
    weeks: [
      {
        weekNumber: 1,
        title: "WEEK 1 - ADAPTATION",
        workouts: [
          {
            id: 7,
            day: "Day 1",
            name: "Upper Body Power",
            duration: "50-65 min",
            exercises: [
              { name: "Bench Press", sets: 4, reps: "6-8", equipment: "Barbell", weight: "75-85% 1RM", restTime: "3 min" },
              { name: "Barbell Rows", sets: 4, reps: "6-8", equipment: "Barbell", weight: "75-85% 1RM", restTime: "3 min" },
              { name: "Overhead Press", sets: 3, reps: "8-10", equipment: "Dumbbells", weight: "Moderate", restTime: "2 min" },
              { name: "Pull-ups/Lat Pulldown", sets: 3, reps: "8-12", equipment: "Bodyweight/Cable", weight: "Bodyweight/Moderate", restTime: "2 min" },
              { name: "Dips", sets: 3, reps: "10-15", equipment: "Bodyweight", weight: "Bodyweight", restTime: "90 sec" },
              { name: "Barbell Curls", sets: 3, reps: "10-12", equipment: "Barbell", weight: "Moderate", restTime: "60 sec" }
            ]
          },
          {
            id: 8,
            day: "Day 2",
            name: "Lower Body Power",
            duration: "55-70 min",
            exercises: [
              { name: "Back Squats", sets: 4, reps: "6-8", equipment: "Barbell", weight: "80-90% 1RM", restTime: "3-4 min" },
              { name: "Romanian Deadlift", sets: 4, reps: "6-8", equipment: "Barbell", weight: "75-85% 1RM", restTime: "3 min" },
              { name: "Bulgarian Split Squats", sets: 3, reps: "8-10 each leg", equipment: "Dumbbells", weight: "Moderate", restTime: "2 min" },
              { name: "Hip Thrusts", sets: 3, reps: "10-12", equipment: "Barbell", weight: "Heavy", restTime: "90 sec" },
              { name: "Calf Raises", sets: 4, reps: "12-15", equipment: "Machine", weight: "Heavy", restTime: "60 sec" },
              { name: "Plank", sets: 3, reps: "30-60 sec", equipment: "Bodyweight", weight: "Bodyweight", restTime: "60 sec" }
            ]
          },
          {
            id: 9,
            day: "Day 3",
            name: "Upper Body Hypertrophy",
            duration: "55-70 min",
            exercises: [
              { name: "Incline Dumbbell Press", sets: 4, reps: "10-12", equipment: "Dumbbells", weight: "Moderate", restTime: "90 sec" },
              { name: "Cable Rows", sets: 4, reps: "10-12", equipment: "Cable", weight: "Moderate", restTime: "90 sec" },
              { name: "Lateral Raises", sets: 4, reps: "12-15", equipment: "Dumbbells", weight: "Light-Moderate", restTime: "60 sec" },
              { name: "Face Pulls", sets: 3, reps: "15-20", equipment: "Cable", weight: "Light", restTime: "60 sec" },
              { name: "Tricep Pushdowns", sets: 3, reps: "12-15", equipment: "Cable", weight: "Moderate", restTime: "60 sec" },
              { name: "Hammer Curls", sets: 3, reps: "12-15", equipment: "Dumbbells", weight: "Moderate", restTime: "60 sec" }
            ]
          },
          {
            id: 10,
            day: "Day 4",
            name: "Lower Body Hypertrophy",
            duration: "60-75 min",
            exercises: [
              { name: "Leg Press", sets: 4, reps: "12-15", equipment: "Machine", weight: "Heavy", restTime: "2 min" },
              { name: "Stiff Leg Deadlift", sets: 4, reps: "10-12", equipment: "Dumbbells", weight: "Moderate", restTime: "90 sec" },
              { name: "Walking Lunges", sets: 3, reps: "12-15 each leg", equipment: "Dumbbells", weight: "Light-Moderate", restTime: "90 sec" },
              { name: "Leg Curls", sets: 4, reps: "12-15", equipment: "Machine", weight: "Moderate", restTime: "60 sec" },
              { name: "Leg Extensions", sets: 3, reps: "15-20", equipment: "Machine", weight: "Moderate", restTime: "60 sec" },
              { name: "Seated Calf Raises", sets: 4, reps: "15-20", equipment: "Machine", weight: "Moderate-Heavy", restTime: "60 sec" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Strength Focus",
    description: "Powerlifting Style, 3 Days a Week",
    duration: "16 weeks",
    difficulty: "Advanced",
    daysPerWeek: 3,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    weeks: [
      {
        weekNumber: 1,
        title: "WEEK 1 - BASE BUILDING",
        workouts: [
          {
            id: 11,
            day: "Day 1",
            name: "Squat Focus",
            duration: "75-90 min",
            exercises: [
              { name: "Back Squats", sets: 5, reps: "5", equipment: "Barbell", weight: "80-85% 1RM", restTime: "4-5 min" },
              { name: "Romanian Deadlift", sets: 4, reps: "6-8", equipment: "Barbell", weight: "70-80% 1RM", restTime: "3 min" },
              { name: "Bulgarian Split Squats", sets: 3, reps: "8-10 each leg", equipment: "Dumbbells", weight: "Moderate", restTime: "2 min" },
              { name: "Leg Press", sets: 3, reps: "12-15", equipment: "Machine", weight: "Heavy", restTime: "2 min" },
              { name: "Walking Lunges", sets: 3, reps: "10-12 each leg", equipment: "Dumbbells", weight: "Light-Moderate", restTime: "90 sec" },
              { name: "Plank", sets: 3, reps: "45-60 sec", equipment: "Bodyweight", weight: "Bodyweight", restTime: "60 sec" }
            ]
          },
          {
            id: 12,
            day: "Day 2",
            name: "Bench Focus",
            duration: "70-85 min",
            exercises: [
              { name: "Barbell Bench Press", sets: 5, reps: "5", equipment: "Barbell", weight: "80-85% 1RM", restTime: "4-5 min" },
              { name: "Barbell Rows", sets: 4, reps: "6-8", equipment: "Barbell", weight: "75-85% 1RM", restTime: "3 min" },
              { name: "Overhead Press", sets: 4, reps: "6-8", equipment: "Barbell", weight: "70-80% 1RM", restTime: "3 min" },
              { name: "Close-Grip Bench Press", sets: 3, reps: "8-10", equipment: "Barbell", weight: "65-75% 1RM", restTime: "2-3 min" },
              { name: "Pull-ups", sets: 3, reps: "8-12", equipment: "Bodyweight", weight: "Bodyweight/Weighted", restTime: "2 min" },
              { name: "Barbell Curls", sets: 3, reps: "10-12", equipment: "Barbell", weight: "Moderate", restTime: "90 sec" }
            ]
          },
          {
            id: 13,
            day: "Day 3",
            name: "Deadlift Focus",
            duration: "80-95 min",
            exercises: [
              { name: "Conventional Deadlift", sets: 5, reps: "5", equipment: "Barbell", weight: "80-85% 1RM", restTime: "5-6 min" },
              { name: "Front Squats", sets: 4, reps: "6-8", equipment: "Barbell", weight: "70-80% 1RM", restTime: "3-4 min" },
              { name: "Sumo Deadlift", sets: 3, reps: "8-10", equipment: "Barbell", weight: "65-75% 1RM", restTime: "3 min" },
              { name: "Good Mornings", sets: 3, reps: "10-12", equipment: "Barbell", weight: "Light-Moderate", restTime: "2 min" },
              { name: "Hip Thrusts", sets: 4, reps: "10-12", equipment: "Barbell", weight: "Heavy", restTime: "2 min" },
              { name: "Farmer's Walk", sets: 3, reps: "40-60 steps", equipment: "Dumbbells", weight: "Heavy", restTime: "2 min" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Full Body Beginner",
    description: "3 Days a Week, Perfect Start",
    duration: "8 weeks",
    difficulty: "Beginner",
    daysPerWeek: 3,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    weeks: [
      {
        weekNumber: 1,
        title: "WEEK 1 - LEARNING BASICS",
        workouts: [
          {
            id: 14,
            day: "Day 1",
            name: "Full Body A",
            duration: "40-50 min",
            exercises: [
              { name: "Goblet Squats", sets: 3, reps: "10-12", equipment: "Dumbbells", weight: "Light-Moderate", restTime: "90 sec" },
              { name: "Push-ups (Modified if needed)", sets: 3, reps: "8-12", equipment: "Bodyweight", weight: "Bodyweight", restTime: "90 sec" },
              { name: "Dumbbell Rows", sets: 3, reps: "10-12", equipment: "Dumbbells", weight: "Light-Moderate", restTime: "90 sec" },
              { name: "Overhead Press", sets: 3, reps: "8-10", equipment: "Dumbbells", weight: "Light", restTime: "90 sec" },
              { name: "Glute Bridges", sets: 3, reps: "12-15", equipment: "Bodyweight", weight: "Bodyweight", restTime: "60 sec" },
              { name: "Plank", sets: 3, reps: "20-30 sec", equipment: "Bodyweight", weight: "Bodyweight", restTime: "60 sec" }
            ]
          },
          {
            id: 15,
            day: "Day 2",
            name: "Full Body B",
            duration: "40-50 min",
            exercises: [
              { name: "Lunges", sets: 3, reps: "8-10 each leg", equipment: "Bodyweight", weight: "Bodyweight", restTime: "90 sec" },
              { name: "Incline Push-ups", sets: 3, reps: "8-12", equipment: "Bodyweight", weight: "Bodyweight", restTime: "90 sec" },
              { name: "Lat Pulldown", sets: 3, reps: "10-12", equipment: "Cable/Resistance Band", weight: "Light-Moderate", restTime: "90 sec" },
              { name: "Dumbbell Chest Press", sets: 3, reps: "10-12", equipment: "Dumbbells", weight: "Light-Moderate", restTime: "90 sec" },
              { name: "Step-ups", sets: 3, reps: "8-10 each leg", equipment: "Bodyweight", weight: "Bodyweight", restTime: "60 sec" },
              { name: "Dead Bug", sets: 3, reps: "8-10 each side", equipment: "Bodyweight", weight: "Bodyweight", restTime: "60 sec" }
            ]
          },
          {
            id: 16,
            day: "Day 3",
            name: "Full Body C",
            duration: "40-50 min",
            exercises: [
              { name: "Wall Sit", sets: 3, reps: "20-30 sec", equipment: "Bodyweight", weight: "Bodyweight", restTime: "90 sec" },
              { name: "Knee Push-ups", sets: 3, reps: "8-12", equipment: "Bodyweight", weight: "Bodyweight", restTime: "90 sec" },
              { name: "Resistance Band Rows", sets: 3, reps: "12-15", equipment: "Resistance Band", weight: "Light", restTime: "90 sec" },
              { name: "Dumbbell Bicep Curls", sets: 3, reps: "10-12", equipment: "Dumbbells", weight: "Light", restTime: "60 sec" },
              { name: "Tricep Dips (Assisted)", sets: 3, reps: "6-10", equipment: "Bodyweight", weight: "Bodyweight", restTime: "90 sec" },
              { name: "Mountain Climbers", sets: 3, reps: "15-20", equipment: "Bodyweight", weight: "Bodyweight", restTime: "60 sec" }
            ]
          }
        ]
      }
    ]
  }
];

export const exerciseLibrary = [
  {
    id: 1,
    name: "Bench Press",
    primaryMuscle: "Chest",
    secondaryMuscles: ["Triceps", "Shoulders"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    instructions: [
      "Lie flat on bench with feet firmly on the ground",
      "Grip the bar with hands slightly wider than shoulder-width",
      "Lower the bar to your chest with control",
      "Press the bar back to starting position"
    ],
    videoUrl: "https://www.youtube.com/watch?v=4Y2ZdHCOXok",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Squats",
    primaryMuscle: "Quadriceps",
    secondaryMuscles: ["Glutes", "Hamstrings", "Core"],
    equipment: "Barbell",
    difficulty: "Beginner",
    instructions: [
      "Stand with feet shoulder-width apart",
      "Lower your body as if sitting back into a chair",
      "Keep your chest up and knees tracking over toes",
      "Drive through heels to return to starting position"
    ],
    videoUrl: "https://www.youtube.com/watch?v=ultWZbUMPL8",
    image: "https://images.unsplash.com/photo-1566241134019-04730b0a6efe?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Deadlift",
    primaryMuscle: "Hamstrings",
    secondaryMuscles: ["Glutes", "Lower Back", "Traps"],
    equipment: "Barbell",
    difficulty: "Intermediate",
    instructions: [
      "Stand with feet hip-width apart, bar over mid-foot",
      "Bend at hips and knees to grip the bar",
      "Keep chest up and back straight",
      "Drive through heels to lift the bar"
    ],
    videoUrl: "https://www.youtube.com/watch?v=op9kVnSso6Q",
    image: "https://images.unsplash.com/photo-1583500178690-83b4e4b9af9e?w=400&h=300&fit=crop"
  }
];

export const progressData = {
  workoutsCompleted: [
    { date: "2024-01-15", workoutName: "Upper Body Push", duration: 45 },
    { date: "2024-01-17", workoutName: "Lower Body", duration: 50 },
    { date: "2024-01-19", workoutName: "Upper Body Pull", duration: 40 },
    { date: "2024-01-22", workoutName: "Lower Body", duration: 55 }
  ],
  weightProgress: [
    { exercise: "Bench Press", date: "2024-01-15", weight: 70, reps: 8 },
    { exercise: "Bench Press", date: "2024-01-22", weight: 72.5, reps: 8 },
    { exercise: "Squats", date: "2024-01-17", weight: 80, reps: 10 },
    { exercise: "Squats", date: "2024-01-24", weight: 85, reps: 10 }
  ],
  bodyStats: [
    { date: "2024-01-15", weight: 75, bodyFat: 15 },
    { date: "2024-02-01", weight: 74.5, bodyFat: 14.5 },
    { date: "2024-02-15", weight: 74, bodyFat: 14 }
  ]
};

export const equipmentOptions = [
  "Dumbbells",
  "Barbell",
  "Bench",
  "Pull-up Bar",
  "Resistance Bands",
  "Kettlebells",
  "Cable Machine",
  "Smith Machine",
  "Leg Press",
  "Treadmill",
  "Stationary Bike",
  "Rowing Machine"
];

export const fitnessGoals = [
  "Lose Weight",
  "Build Muscle",
  "Gain Strength",
  "Overall Fitness",
  "Improve Endurance",
  "Athletic Performance"
];

export const fitnessLevels = [
  "Beginner",
  "Intermediate",
  "Advanced"
];