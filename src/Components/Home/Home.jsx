import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import FormButton from "../FormButton";
import SmallSizeFormButton from "../SmallSizeFormButton/SmallSizeFormButton";

const Home = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/courses');
  };
  const handleExploreClick = () => {
    navigate('/community');
  };
  return (
    <div>
      <section className="homeContainer">
        <div className='homeFirstContainer'>
          <div className='homeImageSection'>
            <img src="/VerticalLearning.png" alt="image section"/>
          </div>
          <div className='homeFirstContentSection'>
            <p>Join us at <span style={{color:"#226d2c"}}>AgroWize</span> to 
            <br />
              increase your Knowledge in 
              <br />
              <span style={{color:"#f29620"}}>Agriculture</span> and get certified.
            </p>
            <FormButton name="Learn More" onClick={handleLearnMoreClick}/>
          </div>
        </div>
        <div className='homeFirstContainer'>
          <div className='homeImageSection'>
            <img src="/Community.png" alt="image section"/>
          </div>
          <div className='homeFirstContentSection'>
            <p>Join your tailored <span style={{color:"#f29620"}}>community</span> 
              <br />
              at <span style={{color:"#226d2c"}}>AgroWize</span> to increase 
              <br />
              your Knowledge and get 
              <br />
              adequately informed.
            </p>
            <SmallSizeFormButton name="Explore" onClick={handleExploreClick}/>
          </div>
        </div>
      </section>
    </div>
    
  );
};

export default Home;
