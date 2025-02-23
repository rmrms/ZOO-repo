import { useState } from "react";

const exercises = [
  {
    title: "Breathing Exercise",
    description:
      "Take a deep breath in through your nose, hold it for a few seconds, and then slowly exhale through your mouth. Repeat this process for 5 minutes.",
  },
  {
    title: "Body Scan",
    description:
      "Close your eyes and bring your attention to your body. Start from your toes and slowly move up to your head, noticing any sensations or tension. Take deep breaths and relax each part of your body as you go.",
  },
  {
    title: "Mindful Walking",
    description:
      "Go for a walk and pay attention to the sensations in your body as you move. Notice the feeling of your feet touching the ground, the movement of your legs, and the rhythm of your breath. Be present in the moment.",
  },
  {
    title: "Gratitude Exercise",
    description:
      "Take a few minutes to think about three things you are grateful for. Write them down and reflect on why you are grateful for them. This exercise can help shift your focus to positive aspects of your life.",
  },
];

const MindfulnessExercise = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleSelectExercise = (index) => {
    setSelectedExercise(exercises[index]);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Mindfulness Exercises</h1>
      <div className="list-group">
        {exercises.map((exercise, index) => (
          <button
            key={index}
            className="list-group-item list-group-item-action"
            onClick={() => handleSelectExercise(index)}
          >
            {exercise.title}
          </button>
        ))}
      </div>
      {selectedExercise && (
        <div className="mt-5">
          <h2 className="text-center mb-4">{selectedExercise.title}</h2>
          <p>{selectedExercise.description}</p>
        </div>
      )}
    </div>
  );
};

export default MindfulnessExercise;
