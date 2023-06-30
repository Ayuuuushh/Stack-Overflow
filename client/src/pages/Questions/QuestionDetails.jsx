// import { quiet } from 'nodemon/lib/utils';
import React from "react";
import {
  useParams,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import moment from "moment";
import { useState } from "react";
import copy from "copy-to-clipboard";

import upVotes from "../../assests/sort-up-solid.svg";
import downVotes from "../../assests/sort-down-solid.svg";
import "./Questions.css";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";
import { useDispatch, useSelector } from "react-redux";
import { postAnswer, deleteQuestion, voteQuestion } from "../../actions/question.js";

const QuestionDetails = () => {
  const { id } = useParams();

  const questionsList = useSelector((state) => state.questionsReducer);

  // var questionsList = [
  //   {
  //     _id: "1",
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "node js", "react js"],
  //     userPosted: "Ayush",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan",
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     _id: "2",
  //     upVotes: 6,
  //     downVotes: 2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a Array?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "Babita",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan",
  //         userId: 2,
  //       },
  //       {
  //         answerBody: "Answer 2",
  //         userAnswered: "Avinash",
  //         answeredOn: "Feb",
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     _id: "3",
  //     upVotes: 35,
  //     downVotes: 2,
  //     noOfAnswers: 6,
  //     questionTitle: "What is a StackOver-flow?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "Chirag",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "kumar",
  //         answeredOn: "jan",
  //         userId: 2,
  //       },
  //     ],
  //   },
  // ];
  const [Answer, setAnswer] = useState("");
  const User = useSelector((state) => state.currentUserReducer);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  // const url = "https://stack-overflowclone-kpph.onrender.com";
  const url = "https://stack-overflowclone-kpph.onrender.com"
  const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      alert("Login or SignUp to answer a question");
      Navigate("/Auth");
    } else {
      if (Answer === " ") {
        alert("Enter an answer before Submitting");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: Answer,
            userAnswered: User.result.name,
            userId: User?.result._id
          })
        );
      }
    }
  };
  const handleShare = () => {
    copy(url + location.pathname);
    alert('Copied url : ' + url + location.pathname)
  };
  const handleDelete=()=>{
    dispatch(deleteQuestion(id,Navigate))
  }

 const handleUpVote = () =>{
  dispatch(voteQuestion(id,'upVote',User?.result?.id ))
}
const handleDownVote = ()=>{
   dispatch(voteQuestion(id,'downVote',User?.result?.id ))

 }

  return (
    <div className="question-details-page">
      {questionsList.data == null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionsList.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key="question._id">
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img
                        src={upVotes}
                        alt=""
                        width="18px"
                        className="votes-icon"
                        onClick={handleUpVote}
                      />
                      <p>{question.upVote.length - question.downVote.length}</p>
                      <img
                        src={downVotes}
                        alt=""
                        width="18px"
                        className="votes-icon"
                        onClick={handleDownVote}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type="button" onClick={handleShare}>
                            Share
                          </button>
                          {
                            User?.result?._id === question?.userId && (

                              <button type="button" onClick={handleDelete}>Delete</button>
                            )
                          }
                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            to={`/Users/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar
                              backgroundColor="orange"
                              px="5px"
                              py="10px"
                              borderRadius="50%"
                            >
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} Answers</h3>
                    <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form
                    onSubmit={(e) => {
                      handlePostAns(e, question.answer.length);
                    }}
                  >
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      onChange={(e) => {
                        setAnswer(e.target.value);
                      }}
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      name="post-ans-btn"
                      id=""
                      value="Post Your Answer"
                    />
                  </form>
                  <p>
                    Browse other Question Tags
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {tag}
                      </Link>
                    ))}{" "}
                    or
                    {
                      <Link
                        to="./AskQuestion"
                        style={{ textDecoration: "none", color: "#009df" }}
                      >
                        {" "}
                        ask Your Answer here.
                      </Link>
                    }
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionDetails;
