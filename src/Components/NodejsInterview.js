import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { Accordion, Card, Button } from 'react-bootstrap';

import './nodejsinterview.css'
const baseUrl = 'http://localhost:5000';

const NodejsInterview = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [questionsAndAnswers,setQuestionsAndAnswers] =useState([])
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get(`${baseUrl}/user/getQuestion`)
      .then((res) => {
        if (res.data) {
          console.log("res.data",res.data.data);
          setQuestionsAndAnswers(res.data.data);
        } else {
          toast.error(res.data.error, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredQuestions = questionsAndAnswers.filter((question) =>
    question.questionAdd.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="search-container col-6 mx-auto">
        <span className="search-icon"><i className="fas fa-search"></i></span>
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          onChange={handleInputChange}
        />
      </div>

      <div className="accordion" id="accordionExample">
        {filteredQuestions.map((e, i) => {
          return (
            <div key={i}>
              <div className="accordion-item">
                <h2 className="accordion-header" id={"heading" + i}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#collapse" + i}
                    aria-expanded="true"
                    aria-controls={"collapse" + i}
                  >
                    {e.questionAdd}
                  </button>
                </h2>
                <div
                  id={"collapse" + i}
                  className="accordion-collapse collapse"
                  aria-labelledby={"heading" + i}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>{e.answerAdd}</strong>{" "}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NodejsInterview;
