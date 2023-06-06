// THIS IS THE TSX USED!!!!!!!!!!!!!! f

import React from 'react';
import './App.css';




const Header = () => {
  return (
    <header id="header">
      <h1>What We Do</h1>
      <p>
        <span className="core-partnership">We partner with our customers across three</span>
        <span className="core-discipline">core disciplines</span>
        {'\u0020'.repeat(14)}
        ㅤ
      </p>
    </header>
  );
};

interface BoxProps {
  jpgFile: string;
  title: string;
  description: string;
}

const Box: React.FC<BoxProps> = ({ jpgFile, title, description }) => {
  return (
    <div className="box">
      <img src={jpgFile} alt={title} />
      <p>{title}</p>
      {'\u0020'.repeat(14)}
      <span>{description}</span>
    </div>
  );
};


function App() {
  return (
    <div>
      <Header />
      <div className="box-container">
        <Box
          jpgFile="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a7a12c7cb1e59f7ee4d34d_noun_Brain_2998851.svg"
      
          title="Thinking"
          description="Unique perspectives to deliver unique outcomes. Rich perspectives and thinking which operate in new ways. Leveraging experience, research, data and insight to unlock opportunities."
        />
        <Box
          jpgFile="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a7a12c7687e256955b5d90_noun_Technology_2626059%20(4).svg"
          title="Design"
          description="Designing and creating solutions that are intuitive, effective and delightful. Understanding the user and what they need, to create the best possible experience."
        />
        <Box
          jpgFile="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a7a12c2e49a6801005e409_noun_supply_4133986%20(2).svg"
          title="Delivery"
          description="Delivering quality outcomes, on time and on budget. Ensuring that our solutions are reliable, scalable and easy to maintain. Continuously improving and innovating to deliver the best possible outcomes."
        />
      </div>
    </div>
  );
}

export default App;
