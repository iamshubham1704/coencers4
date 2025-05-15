import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-page">
      <h1 className="main-heading">
        About <span className="highlight">Us</span>
      </h1>

      <div className="card">
        <h2>Vision & Mission</h2>
        <p>
          Our vision is to make the influencer market seamless and collaborations smooth.
          We aim to build trust between companies and influencers by creating a supportive
          environment – from training influencers to managing their collaborations –
          it's all our responsibility!
        </p>
      </div>

      <div className="team">
        <h2>Meet the Brains Behind Conecers!!</h2>

        {/* Founder Row */}
        <div className="team-row center">
          <div className="team-member">
            <img src="/shubham.jpg" alt="Shubham Solanki" className="member-photo" />
            <h3>Shubham Solanki</h3>
            <p>Founder</p>
          </div>
        </div>

        {/* Co-founder & Mentor Row */}
        <div className="team-row">
          <div className="team-member">
            <img src="/krish.jpg" alt="Krish Vishwakarma" className="member-photo" />
            <h3>Krish Vishwakarma</h3>
            <p>Co-founder & COO</p>
          </div>
          <div className="team-member">
            <img src="/shubhamraj.jpg" alt="Shubham Raj" className="member-photo" />
            <h3>Shubham Raj</h3>
            <p>Mentor & CEO</p>
          </div>
        </div>

        {/* CTO & CMO Row */}
        <div className="team-row">
          <div className="team-member">
            <img src="/hridey.jpg" alt="Hridey Puri" className="member-photo" />
            <h3>Hridey Puri</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img src="/veer.jpg" alt="Veer Dabas" className="member-photo" />
            <h3>Veer Dabas</h3>
            <p>CMO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
