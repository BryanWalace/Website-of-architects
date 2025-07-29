import React from 'react';
import './MissionSection.css';

const missionItems = [
  {
    number: '1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.'
  },
  {
    number: '2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.'
  }
];

function MissionSection() {
  return (
    <section className="mission-section">
      <div className="container">
        <h2 className="mission-main-title">Main Focus/Mission Statement</h2>
        
        <div className="mission-content">
          {missionItems.map((item) => (
            <div className="mission-item" key={item.number}>
              <span className="background-number">{item.number}</span>
              <p className="mission-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionSection;