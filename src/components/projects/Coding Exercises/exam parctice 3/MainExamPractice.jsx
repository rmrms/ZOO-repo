import { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import ImageFetch from "./ImageFetch";
import ImageFetchRollDown from "./ImageFetchRollDown";
import ImageFetch3rd from "./ImageFetch3rd";
import RandomFetch from "./RandomFetch";
import RandomFetch2 from "./RandomFetch2";
import RandomFetchPlainBootstrap from "./RandomFetchPlainBootstrap";

const MainExamPractice = () => {
  const [expand, setExpand] = useState(false);
  const [expandbtn2, setExpandbtn2] = useState(false);
  const [expandbtn3, setExpandbtn3] = useState(false);
  const [expandbtn4, setExpandbtn4] = useState(false);
  const [expandbtn5, setExpandbtn5] = useState(false);
  const [expandbtn6, setExpandbtn6] = useState(false);

  const buttonToggler = () => setExpand(!expand);
  const buttonToggler2 = () => setExpandbtn2(!expandbtn2);
  const buttonToggler3 = () => setExpandbtn3(!expandbtn3);
  const buttonToggler4 = () => setExpandbtn4(!expandbtn4);
  const buttonToggler5 = () => setExpandbtn5(!expandbtn5);
  const buttonToggler6 = () => setExpandbtn6(!expandbtn6);

  return (
    <div>
      <div className="container mt-5">
        <div className="container mt-5 text-center">
          <h1>Main Exam Practice Page</h1>
          <ButtonGroup className="mb-3">
            <Button variant="primary" onClick={buttonToggler}>
              {expand ? "Close" : "Expand"} ImageFetch
            </Button>
            <Button variant="primary" onClick={buttonToggler2}>
              {expandbtn2 ? "Close" : "Expand"} ImageFetchRollDown
            </Button>
            <Button variant="primary" onClick={buttonToggler3}>
              {expandbtn3 ? "Close" : "Expand"} ImageFetch3rd
            </Button>
            <Button variant="primary" onClick={buttonToggler4}>
              {expandbtn4 ? "Close" : "Expand"} Random Quote Fetch
            </Button>
            <Button variant="primary" onClick={buttonToggler5}>
              {expandbtn5 ? "Close" : "Expand"} Random Quote++
            </Button>
            <Button variant="primary" onClick={buttonToggler6}>
              {expandbtn6 ? "Close" : "Expand"} Random Quote Plain Bootstrap
            </Button>
          </ButtonGroup>
          {expand && <ImageFetch />}
        </div>
        <div className="container mt-5 text-center">
          {expandbtn2 && <ImageFetchRollDown />}
        </div>
        <div className="container mt-5 text-center">
          {expandbtn3 && <ImageFetch3rd />}
        </div>
        <div className="container mt-5 text-center">
          {expandbtn4 && <RandomFetch />}
        </div>
        <div className="container mt-5 text-center">
          {expandbtn5 && <RandomFetch2 />}
        </div>
        <div className="container mt-5 text-center">
          {expandbtn6 && <RandomFetchPlainBootstrap />}
        </div>
      </div>
    </div>
  );
};

export default MainExamPractice;
