import { useState } from "react";
import GameEngine from "./components/GameEngine";
import LoginPage from "./components/LoginPage";
import ModuleMap from "./components/ModuleMap";
import useLocalStorage from "./hooks/useLocalStorage";

/*
  App is the parent component.

  Think of it as the traffic controller:
  - no selected lesson means "show the dashboard"
  - selected lesson means "show the game"
*/
export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useLocalStorage(
    "math-app-progress",
    {}
  );

  function handleCompleteLesson(lessonId) {
    setCompletedLessons({
      ...completedLessons,
      [lessonId]: true,
    });

    setSelectedLesson(null);
  }

  if (!loggedInUser) {
    return <LoginPage onLogin={setLoggedInUser} />;
  }

  if (selectedLesson) {
    return (
      <GameEngine
        lesson={selectedLesson}
        onBack={() => setSelectedLesson(null)}
        onComplete={handleCompleteLesson}
      />
    );
  }

  return (
    <ModuleMap
      completedLessons={completedLessons}
      onStartLesson={setSelectedLesson}
    />
  );
}
