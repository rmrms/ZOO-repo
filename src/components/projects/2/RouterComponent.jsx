import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NumberOne from "../1/NumberOne";
import NumberTwo from "../3/NumberTwo";
import NavbarComponent from "../Navbar/NavbarComponent";
import PracticeProblem1 from "../../practiceProblems/PracticeProblem1";
import RegNewMember from "../register new member/RegNewMember";
import PracticeProject2 from "../PracticeAgain/PracticeProject2";
import Exercise1 from "../Coding Exercises/Exercise1";
import ComplexMain from "../bitMoreComplex/ComplexMain";
import BlogApp from "../Coding Exercises/ExamPractice/BlogApp";
import MainExamPractice from "../Coding Exercises/exam parctice 3/MainExamPractice";
import MainExamFour from "../Coding Exercises/exam parctice 3/MainExamFour";
import BlizzardClone from "../Coding Exercises/Clone Pages/BlizzardClone";
import BlizzardClone2 from "../Coding Exercises/Clone Pages/BlizzardClone2";
import FormFirst from "../part4/arr1/FormFirst";
import WebTemplate from "../WebTemplate/WebTemplate";

const RouterComponent = () => {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/numberone" element={<NumberOne />} />
        <Route path="/numbertwo" element={<NumberTwo />} />
        <Route path="/regnewmember" element={<RegNewMember />} />
        <Route path="/practiceproblem1" element={<PracticeProblem1 />} />
        <Route path="complexmain" element={<ComplexMain />} />
        <Route path="/exercise1" element={<Exercise1 />} />
        <Route path="/practiceproject2" element={<PracticeProject2 />} />
        <Route path="/blogapp" element={<BlogApp />} />
        <Route path="mainexampractice" element={<MainExamPractice />} />
        <Route path="mainexamfour" element={<MainExamFour />} />
        <Route path="blizzardclone" element={<BlizzardClone />} />
        <Route path="blizzardclone2" element={<BlizzardClone2 />} />
        <Route path="formfirst" element={<FormFirst />} />
        <Route path="webtemplate" element={<WebTemplate/>} />
      </Routes>
    </>
  );
};

export default RouterComponent;
