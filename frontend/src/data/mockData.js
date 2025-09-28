// Mock data for Gymnation fitness app

export const userProfile = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  fitnessLevel: "Intermediate",
  goal: "Overall Fitness",
  workoutDaysPerWeek: 4,
  availableEquipment: ["Dumbbells", "Barbell", "Bench", "Pull-up Bar", "Resistance Bands"],
  bmi: 24.2,
  weight: 75,
  height: 175,
  currentWeek: 2,
  joinDate: "2024-01-15",
  totalWorkouts: 28
};

export const workoutPlans = [
  {
    id: 1,
    name: "Overall Fitness",
    description: "Upper/Lower Split, 4 Days a Week",
    duration: "8 weeks",
    difficulty: "Intermediate",
    daysPerWeek: 4,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    weeks: [
      {
        weekNumber: 1,
        title: "WEEK 1 - FOUNDATIONS",
        workouts: [
          {
            id: 1,
            day: "Day 1",
            name: "Upper Body Push",
            duration: "45-60 min",
            exercises: [
              { name: "Bench Press", sets: 3, reps: "8-10", equipment: "Barbell" },
              { name: "Overhead Press", sets: 3, reps: "8-10", equipment: "Dumbbells" },
              { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", equipment: "Dumbbells" },
              { name: "Tricep Dips", sets: 3, reps: "8-12", equipment: "Bodyweight" }
            ]
          },
          {
            id: 2,
            day: "Day 2",
            name: "Lower Body",
            duration: "45-60 min",
            exercises: [
              { name: "Squats", sets: 4, reps: "8-10", equipment: "Barbell" },
              { name: "Romanian Deadlift", sets: 3, reps: "8-10", equipment: "Barbell" },
              { name: "Bulgarian Split Squats", sets: 3, reps: "10 each leg", equipment: "Dumbbells" },
              { name: "Calf Raises", sets: 3, reps: "15-20", equipment: "Dumbbells" }
            ]
          }
        ]
      },
      {
        weekNumber: 2,
        title: "WEEK 2 - LOAD",
        workouts: [
          {
            id: 3,
            day: "Day 1",
            name: "Upper Body Push",
            duration: "50-65 min",
            exercises: [
              { name: "Bench Press", sets: 4, reps: "6-8", equipment: "Barbell" },
              { name: "Overhead Press", sets: 4, reps: "6-8", equipment: "Dumbbells" },
              { name: "Incline Dumbbell Press", sets: 3, reps: "8-10", equipment: "Dumbbells" },
              { name: "Tricep Dips", sets: 3, reps: "10-15", equipment: "Bodyweight" }
            ]
          }
        ]
      },
      {
        weekNumber: 3,
        title: "WEEK 3 - LOAD+",
        workouts: []
      },
      {
        weekNumber: 4,
        title: "WEEK 4 - PRE PEAK",
        workouts: []
      },
      {
        weekNumber: 5,
        title: "WEEK 5 - PEAK",
        workouts: []
      }
    ]
  },
  {
    id: 2,
    name: "Strength Building",
    description: "Push/Pull/Legs, 6 Days a Week",
    duration: "12 weeks",
    difficulty: "Advanced",
    daysPerWeek: 6,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop",
    weeks: []
  },
  {
    id: 3,
    name: "Fat Loss",
    description: "High Intensity Circuit Training",
    duration: "6 weeks",
    difficulty: "Beginner",
    daysPerWeek: 5,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    weeks: []
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