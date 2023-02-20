import React from "react";
import "../style/project.css"

function Projects() {
  return (
    <div className="project-main">
      <h1 className="project-headline">Projects</h1>
      <div className="project-container">
        <div className="project-box">
          <div className="project-content">
            <h3>Trading website</h3>
            <a href="https://github.com/Mohan1203/trade_kro">Trading website </a>
            <p>American stock market trading live data website using finhub.com API </p>
          </div>
        </div>
        <div className="project-box">
          <div className="project-content">
            <h3>Chat gpt clone</h3>
            <a href="https://github.com/Mohan1203/CodeGuide">Chat GPT clone</a>
            <p>I make clone of chat gpt website obviously not same because the lack of resource's but similer like chat GPT </p>
          </div>
        </div>
        <div className="project-box">
          <div className="project-content">
            <h3>password generator</h3>
            <a href="https://github.com/Mohan1203/randomPassword_generator">Random password generator</a>
            <p>Generate random and strong password which can help you secure data in any website or application</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;