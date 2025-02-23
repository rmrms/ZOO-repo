import { useState } from "react";

const ToggleAlert = () => {
  const [hide, setHide] = useState(true);
  const [show, setShow] = useState(true);
  const [hideShow, setHideShow] = useState(true);

  const toggleShowHide = () => setHide(!hide);
  const toggleHidden = () => setShow(!show);
  const toggleHideShow = () => setHideShow(!hideShow);

  return (
    <div>
      <div className="dropdown mb-4">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          onClick={() =>
            document.getElementById("dropdownMenu").classList.toggle("show")
          }
        >
          Select Section
        </button>
        <ul className="dropdown-menu" id="dropdownMenu">
          <li>
            <button className="dropdown-item" onClick={toggleShowHide}>
              {hide ? "Hide Alert 1" : "Show Alert 1"}
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={toggleHidden}>
              {show ? "Hide Alert 2" : "Show Alert 2"}
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={toggleHideShow}>
              {hideShow ? "Hide Alert 3" : "Show Alert 3"}
            </button>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="container mt-5">
            {hide && (
              <div className="alert alert-primary mt-3" role="alert">
                This is a primary alert—check it out!
              </div>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="container mt-5">
            {show && (
              <div className="alert alert-primary mt-3" role="alert">
                This is a primary alert—check it out!
              </div>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="container mt-5">
            {hideShow && (
              <div className="alert alert-danger mb-5" role="alert">
                This is a danger alert—check it out!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleAlert;
