import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamMembers: [
        {
          id: 1,
          name: "Ilea Bogdan-Vasile",
          link: "https://www.linkedin.com/in/bogdan-ilea-3473b9367/",
          role: "Yes"
        },
        {
          id: 2,
          name: "Matei Tudor Pop",
          link: "https://www.linkedin.com/in/matei-pop-a309602b2/",
          role: "Yes"
        },
        {
          id: 3,
          name: "Râpă-Bălan Tudor-Florin",
          link: "https://www.linkedin.com/in/tudor-florin-balan/",
          role: "Backshots master"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {/* Main Header */}
        <h1 className="main-title">
          Unbreakable Romania Team: <span className="team-name">sudo help</span>
        </h1>
        
        {/* Team Description */}
        <div className="team-description">
          <p>Meet our dedicated team members who make the impossible possible!</p>
        </div>
        
        {/* Team Members Section */}
        <div className="team-container">
          <h2 className="team-subtitle">Our Core Team</h2>
          
          <div className="team-members">
            {this.state.teamMembers.map((member) => (
              <div key={member.id} className="team-member-card">
                <div className="member-avatar">
                  <span className="avatar-text">{member.name.charAt(0)}</span>
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <a 
                  href={member.link} 
                  className="member-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Profile →
                </a>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <footer className="footer">
          <p>© Bottom Text to make us look cool. All rights reserved.</p>
          <p className="footer-note">
            sudo help - Making Romania unbreakable, one line of code at a time (the code is broken).
          </p>
        </footer>
      </div>
    );
  }
}

export default App;