import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import FeelingCheck from "./pages/FeelingCheck";
import BreathingExercise from "./pages/BreathingExercise";
import MeditationTimer from "./pages/MeditationTimer";
import CalmingSounds from "./pages/CalmingSounds";
import NatureScenes from "./pages/NatureScenes";
import Journal from "./pages/Journal";
import Quotes from "./pages/Quotes";
import QuoteDetail from "./pages/QuoteDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/feeling",
    Component: FeelingCheck,
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
  {
    path: "/journal",
    Component: Journal,
  },
  {
    path: "/quotes",
    Component: Quotes,
  },
  {
    path: "/quotes/:id",
    Component: QuoteDetail,
  },
  {
    path: "*",
    Component: Home,
  },
]);