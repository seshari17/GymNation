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
    weeks: [
      {
        weekNumber: 1,
        title: "WEEK 1 - FOUNDATION",
        workouts: [
          {
            id: 4,
            day: "Day 1",
            name: "Push Day",
            duration: "60-75 min",
            exercises: [
              { name: "Bench Press", sets: 4, reps: "6-8", equipment: "Barbell" },
              { name: "Overhead Press", sets: 4, reps: "6-8", equipment: "Barbell" },
              { name: "Incline Dumbbell Press", sets: 3, reps: "8-10", equipment: "Dumbbells" },
              { name: "Dips", sets: 3, reps: "8-12", equipment: "Bodyweight" },
              { name: "Lateral Raises", sets: 3, reps: "12-15", equipment: "Dumbbells" },
              { name: "Tricep Pushdowns", sets: 3, reps: "10-12", equipment: "Cable" }
            ]
          },
          {
            id: 5,
            day: "Day 2",
            name: "Pull Day",
            duration: "60-75 min",
            exercises: [
              { name: "Deadlift", sets: 4, reps: "5-6", equipment: "Barbell" },
              { name: "Pull-ups", sets: 4, reps: "6-10", equipment: "Bodyweight" },
              { name: "Barbell Rows", sets: 4, reps: "8-10", equipment: "Barbell" },
              { name: "Face Pulls", sets: 3, reps: "12-15", equipment: "Cable" },
              { name: "Barbell Curls", sets: 3, reps: "10-12", equipment: "Barbell" },
              { name: "Hammer Curls", sets: 3, reps: "10-12", equipment: "Dumbbells" }
            ]
          },
          {
            id: 6,
            day: "Day 3",
            name: "Leg Day",
            duration: "60-75 min",
            exercises: [
              { name: "Squats", sets: 4, reps: "6-8", equipment: "Barbell" },
              { name: "Romanian Deadlift", sets: 4, reps: "8-10", equipment: "Barbell" },
              { name: "Leg Press", sets: 3, reps: "12-15", equipment: "Machine" },
              { name: "Walking Lunges", sets: 3, reps: "10 each leg", equipment: "Dumbbells" },
              { name: "Calf Raises", sets: 4, reps: "15-20", equipment: "Machine" },
              { name: "Leg Curls", sets: 3, reps: "12-15", equipment: "Machine" }
            ]
          }
        ]
      },
      {
        weekNumber: 2,
        title: "WEEK 2 - PROGRESSION",
        workouts: [
          {
            id: 7,
            day: "Day 1",
            name: "Push Day",
            duration: "65-80 min",
            exercises: [
              { name: "Bench Press", sets: 5, reps: "5-6", equipment: "Barbell" },
              { name: "Overhead Press", sets: 4, reps: "6-8", equipment: "Barbell" },
              { name: "Incline Dumbbell Press", sets: 4, reps: "8-10", equipment: "Dumbbells" },
              { name: "Dips", sets: 3, reps: "10-15", equipment: "Bodyweight" },
              { name: "Lateral Raises", sets: 4, reps: "12-15", equipment: "Dumbbells" },
              { name: "Close-Grip Bench Press", sets: 3, reps: "8-10", equipment: "Barbell" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Fat Loss",
    description: "High Intensity Circuit Training",
    duration: "6 weeks",
    difficulty: "Beginner",
    daysPerWeek: 5,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    weeks: [
      {
        weekNumber: 1,
        title: "WEEK 1 - STARTER",
        workouts: [
          {
            id: 8,
            day: "Day 1",
            name: "Full Body HIIT",
            duration: "30-40 min",
            exercises: [
              { name: "Jumping Jacks", sets: 3, reps: "30 seconds", equipment: "Bodyweight" },
              { name: "Push-ups", sets: 3, reps: "10-15", equipment: "Bodyweight" },
              { name: "Bodyweight Squats", sets: 3, reps: "15-20", equipment: "Bodyweight" },
              { name: "Mountain Climbers", sets: 3, reps: "20 each leg", equipment: "Bodyweight" },
              { name: "Burpees", sets: 3, reps: "5-10", equipment: "Bodyweight" },
              { name: "Plank", sets: 3, reps: "30-45 seconds", equipment: "Bodyweight" }
            ]
          },
          {
            id: 9,
            day: "Day 2",
            name: "Cardio Circuit",
            duration: "25-35 min",
            exercises: [
              { name: "High Knees", sets: 4, reps: "30 seconds", equipment: "Bodyweight" },
              { name: "Butt Kicks", sets: 4, reps: "30 seconds", equipment: "Bodyweight" },
              { name: "Jump Squats", sets: 3, reps: "15-20", equipment: "Bodyweight" },
              { name: "Lateral Lunges", sets: 3, reps: "10 each side", equipment: "Bodyweight" },
              { name: "Russian Twists", sets: 3, reps: "20 each side", equipment: "Bodyweight" },
              { name: "Wall Sit", sets: 3, reps: "30-60 seconds", equipment: "Bodyweight" }
            ]
          },
          {
            id: 10,
            day: "Day 3",
            name: "Upper Body Burn",
            duration: "30-40 min",
            exercises: [
              { name: "Push-ups", sets: 4, reps: "8-12", equipment: "Bodyweight" },
              { name: "Pike Push-ups", sets: 3, reps: "5-10", equipment: "Bodyweight" },
              { name: "Tricep Dips", sets: 3, reps: "8-12", equipment: "Bodyweight" },
              { name: "Arm Circles", sets: 3, reps: "15 each direction", equipment: "Bodyweight" },
              { name: "Superman", sets: 3, reps: "10-15", equipment: "Bodyweight" },
              { name: "Dead Bug", sets: 3, reps: "10 each side", equipment: "Bodyweight" }
            ]
          }
        ]
      },
      {
        weekNumber: 2,
        title: "WEEK 2 - INTENSITY",
        workouts: [
          {
            id: 11,
            day: "Day 1",
            name: "Advanced HIIT",
            duration: "35-45 min",
            exercises: [
              { name: "Burpee with Jump", sets: 4, reps: "8-12", equipment: "Bodyweight" },
              { name: "Jump Squats", sets: 4, reps: "15-20", equipment: "Bodyweight" },
              { name: "Push-up to T", sets: 3, reps: "6-10", equipment: "Bodyweight" },
              { name: "Mountain Climbers", sets: 4, reps: "30 seconds", equipment: "Bodyweight" },
              { name: "Plank Jacks", sets: 3, reps: "15-20", equipment: "Bodyweight" },
              { name: "Single Leg Glute Bridge", sets: 3, reps: "10 each leg", equipment: "Bodyweight" }
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