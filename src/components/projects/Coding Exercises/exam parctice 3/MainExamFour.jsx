import { useState } from "react";
import ImageFetch from "./ImageFetch";
import ImageFetchRollDown from "./ImageFetchRollDown";
import ImageFetch3rd from "./ImageFetch3rd";
import RandomFetch from "./RandomFetch";
import RandomFetch2 from "./RandomFetch2";
import RandomFetchPlainBootstrap from "./RandomFetchPlainBootstrap";

const ButtonGroupComponent = ({ expandStates, toggleExpand }) => {
  return (
    <div className="d-flex justify-content-center mb-3">
      <button
        className="btn btn-primary me-2"
        onClick={() => toggleExpand("expand")}
      >
        {expandStates.expand ? "Close" : "Expand"} ImageFetch
      </button>
      <button
        className="btn btn-primary me-2"
        onClick={() => toggleExpand("expandbtn2")}
      >
        {expandStates.expandbtn2 ? "Close" : "Expand"} ImageFetchRollDown
      </button>
      <button
        className="btn btn-primary me-2"
        onClick={() => toggleExpand("expandbtn3")}
      >
        {expandStates.expandbtn3 ? "Close" : "Expand"} ImageFetch3rd
      </button>
      <button
        className="btn btn-primary me-2"
        onClick={() => toggleExpand("expandbtn4")}
      >
        {expandStates.expandbtn4 ? "Close" : "Expand"} Random Quote Fetch
      </button>
      <button
        className="btn btn-primary me-2"
        onClick={() => toggleExpand("expandbtn5")}
      >
        {expandStates.expandbtn5 ? "Close" : "Expand"} Random Quote++
      </button>
      <button
        className="btn btn-primary"
        onClick={() => toggleExpand("expandbtn6")}
      >
        {expandStates.expandbtn6 ? "Close" : "Expand"} Random Quote Plain
        Bootstrap
      </button>
    </div>
  );
};

const MainExamFour = () => {
  const [expandStates, setExpandStates] = useState({
    expand: false,
    expandbtn2: false,
    expandbtn3: false,
    expandbtn4: false,
    expandbtn5: false,
    expandbtn6: false,
  });

  const toggleExpand = (key) => {
    setExpandStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="container mt-5 text-center">
          <h1>Main Exam Practice Page</h1>
          <ButtonGroupComponent
            expandStates={expandStates}
            toggleExpand={toggleExpand}
          />
          {expandStates.expand && <ImageFetch />}
        </div>
        <div className="container mt-5 text-center">
          {expandStates.expandbtn2 && <ImageFetchRollDown />}
        </div>
        <div className="container mt-5 text-center">
          {expandStates.expandbtn3 && <ImageFetch3rd />}
        </div>
        <div className="container mt-5 text-center">
          {expandStates.expandbtn4 && <RandomFetch />}
        </div>
        <div className="container mt-5 text-center">
          {expandStates.expandbtn5 && <RandomFetch2 />}
        </div>
        <div className="container mt-5 text-center">
          {expandStates.expandbtn6 && <RandomFetchPlainBootstrap />}
        </div>
      </div>
    </div>
  );
};

export default MainExamFour;
