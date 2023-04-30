import React,{useState,} from "react";
import '../Components/Main.css'
import { NavLink,Link, Outlet } from "react-router-dom";

const Main=()=>{
  
  const [showNodeContent, setShowNodeContent] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [showJSContent, setShowJSContent] = useState(false);
    const [placeholder, setPlaceholder] = useState('Search...');
    function handleFocus() {
        setPlaceholder('');
      }
    // SEARCH 
    const handleInputChange=()=>{
      
    }
  function handleNodeButtonClick() {
    setShowNodeContent(!showNodeContent);
    setShowJSContent(false);
  }

  function handleJSButtonClick() {
    setShowJSContent(!showJSContent);
    setShowNodeContent(false);
  }
      function handleBlur() {
        setPlaceholder('Search...');
      }
    return(
        <>
{/* <div className='inner'>
<div className="search-container col-6 mx-auto">
  <span class="search-icon"><i class="fas fa-search"></i></span>
  <input
      type="text"
      className="search-input"
      placeholder={placeholder}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleInputChange}
    />


</div>
</div> */}

<div className='interview_question'> <h6 >INTERVIEW QUESTION</h6>
</div>

<div className="container-fluid main-div">
    <div className="row">
       <div className="col-12 col-sm-10 col-md-9 col-lg-5 button_container">
<NavLink to="/nodejs/question" className="btns btn-dark">Top Interview Question</NavLink>
{/* <NavLink to="/javascript/question" className="btns btn-dark">JavaScript Interview</NavLink> */}

       </div>
       <div className="text-center">
      <Outlet/>
      <div class="container">
  <div class="row">
    <div class="col-12">
      <div class="conclusion">
        <h5>Conclusion</h5>
        <p>
          I believe that these  interview questions would help you
          understand what kind of questions may be asked to you in an interview,
          and by going through these interview questions, you can prepare
          and crack your next interview in one go.
        </p>
        <p>
        Furthermore, we encourage you  to contribute by submitting their own interview questions and sharing their expertise with the community. This not only helps others learn but also allows for the exchange of knowledge and ideas.We strive to make our website user-friendly and accessible to everyone, regardless of their background or experience level. Our goal is to provide a platform that empowers individuals to succeed in their careers and reach their full potential.


        </p>
        <p>
          Best of luck with your upcoming job interview! 
        </p>
      </div>
    </div>
  </div>
</div>





       {/* {showNodeContent && (
        <div>
          <h2>Nodejs Interview Content</h2>
          <p>This is the content for Nodejs Interview.</p>
        </div>
      )}
      {showJSContent && (
        <div>
          <h2>JavaScript Interview Content</h2>
          <p>This is the content for JavaScript Interview.</p>
        </div>
      )} */}


       </div>
    </div>

</div>
<footer>
<div class="footer-icons">
    <a href="mailto:in.nigarfatma02@gmail.com" target="_blank" rel="noopener noreferrer">
      <i class="far fa-envelope"></i>
    </a>
    <a href="https://www.linkedin.com/in/nigar-fatma-aa77891b9/" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-linkedin"></i>
    </a>
  </div>
</footer>
        </>
    )
}
export default Main