import React from "react";
import "./HomeMainbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import QuestionsList from "./QuestionsList";
import { useSelector } from "react-redux";

function HomeMainbar() {
  const user = 1;
  const navigate=useNavigate();
  // const Redirect = () => {
  //   alert("Login or signup to ask a Question");
  //   useNavigate('/Auth');
  // };
  const questionsList = useSelector((state)=>state.questionsReducer)


  // var questionsList = [
  //   {
  //     _id: 1,
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "node js", "react js"],
  //     userPosted: "mano",
  //     userId:1,
  //     askedOn: "jan 1",
  //     answer:[{
  //       answerBody:"Answer",
  //       userAnswered:'kumar',
  //       answeredOn:"jan",
  //       userId: 2,
  //     }]
  //   },
  //   {
  //     _id: 2,
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 6,
  //     questionTitle: "What is a Array?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "mano",
  //     userId:1,
  //     askedOn: "jan 1",
  //     answer:[{
  //       answerBody:"Answer",
  //       userAnswered:'kumar',
  //       answeredOn:"jan",
  //       userId: 2,
  //     }]
  //   },
  //   {
  //     _id: 3,
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 6,
  //     questionTitle: "What is a StackOver-flow?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "mano",
  //     userId:1,
  //     askedOn: "jan 1",
  //     answer:[{
  //       answerBody:"Answer",
  //       userAnswered:'kumar',
  //       answeredOn:"jan",
  //       userId: 2,
  //     }]
  //   },
  // ];
  const location = useLocation();

  const checkAuth=()=>{
    if(user===null){
      alert("Login or signup to ask a Question");
      navigate('/Auth');
    }else{
      navigate('/AskQuestion')
    }
  }

  return (
    <div className="main-bar" style={{ paddingTop: "25px" }}>
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h2>Top Questions</h2>
        ) : (
          <h2>All Questions</h2>
        )}
        <button
          onClick={checkAuth}
          className="ask-btn"
          style={{border:"none"}}
        >
          Ask Question
        </button>
      </div>
      <div>
        {questionsList.data === null ? (
          <p>Loading...</p>
        ) : (
          <>
            {<p>{questionsList.data.length} questions</p>}
            <QuestionsList questionsList={questionsList.data} />{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default HomeMainbar;
