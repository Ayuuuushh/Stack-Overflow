import React, { useState } from "react";
import "./AskQuestion.css";
import { useDispatch, useSelector } from "react-redux";
import askquestion from "../../actions/question.js";
import { useNavigate } from "react-router-dom";

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionBody, setQuestionBody] = useState('');
  const [questionTags, setQuestionTags] = useState('');

  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ questionTitle, questionBody, questionTags });
    dispatch(
      askquestion(
        {
          questionTitle,
          questionBody,
          questionTags,
          userPosted: User.result?.name,
          userId: User?.result?._id
        },
        navigate
      )
    );
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "\n");
    }
  };

  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a public Question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>
                Be specific and imagine you're asking a question to a person
              </p>
              <input
                type="text"
                name="questionTitle"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                placeholder="e.g. is there an R function for finding the index of an element in an array"
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>
                Be specific and imagine you're asking a question to a person
              </p>
              <textarea
                name=""
                id="ask-ques-body"
                cols="30"
                rows="10"
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                onKeyDown={handleEnter}
              ></textarea>
            </label>
            <label htmlFor="ask-ques-Tags">
              <h4>Tags</h4>
              <p>Add upto 5 Tags to describe the question</p>
              <input
                type="text"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
                placeholder="e.g. is there an R function for finding the index of an element in an array"
              />
            </label>
          </div>
          <input
            type="submit"
            className="review-btn"
            value="Review your question "
          />
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
