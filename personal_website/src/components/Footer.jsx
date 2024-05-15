import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="section-title">
        <h4>Project Github:</h4>
        <h4>
          <a href="https://github.com/larsonscott89/Scott-Larson-Software-Engineer" target="_blank">
            Github
          </a>
        </h4>
      </div>
      <hr className="divider" />
      <div className="team-container">
        <h3 className="section-title">Page Created by:</h3>
        <div className="team-members-container">
          <div className="team-member">
            <h4>Scott Larson</h4>
            <h4>
              <a href="https://github.com/larsonscott89" target="_blank">
                Github
              </a>
            </h4>
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="social-links">
        <div className="section-title">
          <h3> Other Socials: </h3>
          <a href='https://www.linkedin.com/in/scottlarson9/' target='blank'>
          <img className='linkedin' src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png?20140125013055'/>
          </a>
        </div>
      </div>
    </footer>
  );
}