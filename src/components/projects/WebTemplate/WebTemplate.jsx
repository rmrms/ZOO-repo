import {useState, useEffect} from "react";
import MoodTracker from "./Components/MoodTracker";
import MindfulnessExercise from "./Components/MindfulnessExercise";

const WebTemplate = () => {


  return (
    <div>
      <MoodTracker/>
      <MindfulnessExercise/>
    </div>
  )
}

export default WebTemplate;