import React from 'react';
import "../styles/mission.css"
import Icon1 from "../images/Vector.png"
import Icon2 from "../images/Vector (1).png"
const MissionVision = () => {
    return (
      <div className="mission-vision-container">
        <div className="carded">
          <img src={Icon1} alt="Mission Icon" className="icon" />
          <div>
            <h3 className='cardh3'>Our Mission</h3>
            <p className='cardp'>
              To facilitate the creation of vibrant and thriving communities by connecting 
              people with the right properties, fostering lasting relationships, and contributing 
              to the growth of the neighborhoods we serve.
            </p>
          </div>
        </div>
        <div className="carded">
          <img src={Icon2} alt="Vision Icon" className="icon" />
          <div>
            <h3 className='cardh3'>Our Vision</h3>
            <p className='cardp'>
              To set new standards in property management excellence, recognized for 
              environmental responsibility and tenant satisfaction, while expanding our 
              managed portfolio across multiple states.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default MissionVision;
  