import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import BottomNavigation from "./components/Layout/BottomNavigation";

// Pages
import Home from "./pages/Home";
import Library from "./pages/Library";
import Progress from "./pages/Progress";
import WorkoutDetail from "./pages/WorkoutDetail";

function App() {
  return (
    <div className="App bg-gray-900 min-h-screen">
      <BrowserRouter>
        <div className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/workout" element={<WorkoutDetail />} />
            <Route path="/settings" element={<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center"><div className="text-white text-xl">Settings - Coming Soon</div></div>} />
          </Routes>
          <BottomNavigation />
        </div>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
