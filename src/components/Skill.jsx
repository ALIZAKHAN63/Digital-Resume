import React from 'react';

const Skill = () => {
  const skills = [
    "JavaScript",
    "React",
    "Problem-solving",
    "Debugging",
    "DOM Manipulation",
    "Responsive Design",
    "Clean Code Practices",
    "Attention to Detail"
  ];

  return (
    <div className="skill-section">
      <h1>Skills</h1>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill">{skill}</div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
