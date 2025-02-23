import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import ToggleAlert from "./components/ToggleAlert";
import FormValidationExercise1 from "./components/FormValidationExercise1";
import TodoWithLocalStorage from "./Segment2 components/TodoWithLocalStorage";
import ImprovedTodo from "./Segment2 components/ImprovedTodo";
import ApiDataTable from "./Segment2 components/ApiDataTable";
import ApiDataTable2 from "./Segment2 components/ApiDataTable2";
import TodoList2 from "./ExamPractice/TodoList";

const Exercise1 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toggleSegment, setTogglesegment] = useState(true);
  const [toggleSegment2, setTogglesegment2] = useState(true);

  const toggleSegmentActive2 = () => setTogglesegment2(!toggleSegment2);

  const toggleSegmentActive = () => setTogglesegment(!toggleSegment);
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div className="Numero Uno">
      <div className="Segment2 container mt-5">
        <button className="btn btn-primary mb-5" onClick={toggleSegmentActive2}>
          {toggleSegment2 ? "Show Practice Page #2" : "Hide Practice Page #2"}
        </button>
        {toggleSegment2 && (
          <>
            <h1>Practice part 2</h1>
            <div className="container mt-5">
              <TodoList2 />
            </div>
            <div className="container mt-5">
              <ApiDataTable2 />
            </div>
            <div className="container mt-5">
              <TodoWithLocalStorage />
            </div>
            <div className="container mt-5">
              <ImprovedTodo />
            </div>
            <div className="container mt-5">
              <ApiDataTable />
            </div>
          </>
        )}
      </div>
      <div className="Segment1 container mt-5">
        <button onClick={toggleSegmentActive} className="btn btn-primary mb-5">
          {toggleSegment ? "Hide Practice Page #1" : "Show Practice Page #1"}
        </button>
        {toggleSegment && (
          <>
            <div className="container mt-5">
              <FormValidationExercise1 />
            </div>
            <div className="container mt-5">
              <h1>Todo List</h1>
              <TodoList />
            </div>
            <div className="Toggle-div container mt-5">
              <h1>Toggle / Hide</h1>
              <ToggleAlert />
            </div>
            <div className="container mt-5">
              <h1>Conditional Rendering</h1>
              <button className="btn btn-primary mb-3" onClick={toggleLogin}>
                {isLoggedIn ? "Logout" : "Login"}
              </button>
              {isLoggedIn ? (
                <p>Welcome, user! You are logged in.</p>
              ) : (
                <p>Please log in to continue.</p>
              )}
            </div>
            <div className="container mt-5">
              <Counter />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Exercise1;
