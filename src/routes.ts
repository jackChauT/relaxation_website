import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import BreathingExercise from "./pages/BreathingExercise";
import MeditationTimer from "./pages/MeditationTimer";
import CalmingSounds from "./pages/CalmingSounds";
import NatureScenes from "./pages/NatureScenes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/breathing",
    Component: BreathingExercise,
  },
  {
    path: "/meditation",
    Component: MeditationTimer,
  },
  {
    path: "/sounds",
    Component: CalmingSounds,
  },
  {
    path: "/nature",
    Component: NatureScenes,
  },
]);
