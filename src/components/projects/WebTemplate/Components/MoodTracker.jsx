import { useState } from "react";

const MoodTracker = () => {
  const [mood, setMood] = useState("");
  const [moodHistory, setMoodHistory] = useState([]);

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  const handleMoodSubmit = (e) => {
    e.preventDefault();
    if (mood) {
      setMoodHistory([
        ...moodHistory,
        { mood, date: new Date().toLocaleDateString() },
      ]);
      setMood("");
    }
  };

  const handleDelete = (index) => {
    setMoodHistory(moodHistory.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Mood Tracker</h1>
      <form onSubmit={handleMoodSubmit}>
        <div className="mb-3">
          <label htmlFor="mood" className="form-label">
            How are you feeling today?
          </label>
          <select
            className="form-select"
            value={mood}
            id="mood"
            onChange={handleMoodChange}
          >
            <option value="">Select your mood</option>
            <option value="Happy">Happy</option>
            <option value="Sad">Anxious</option>
            <option value="Angry">Angry</option>
            <option value="Neutral">Neutral</option>
          </select>
        </div>
        <div className="text-center">
          <button className="btn btn-primary" type="submit">
            Log Mood
          </button>
        </div>
      </form>
      <div className="mt-5">
        <h2 className="text-center mb-4">Mood History</h2>
        <ul className="list-group">
          {moodHistory.map((entry, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {entry.date}: {entry.mood}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoodTracker;
