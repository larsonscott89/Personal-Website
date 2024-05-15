import React from 'react';

export default function ContactMe() {
  return (
    <div className="contact-page">
      <h1>Welcome to my Contact Page!</h1>
      <div className="meeting-options">
        <p>If you'd like to schedule a meeting with me, please use the following link:</p>
        <a href="https://calendly.com/scottlarson0305/30min" target="_blank" rel="noopener noreferrer">
          Schedule a Meeting
        </a>
        <p>If you prefer to email me directly, please feel free to reach out to:</p>
        <p>Email: <div href="mailto:scottlarson0305@gmail.com?subject=Meeting%20Request">scottlarson0305@gmail.com</div></p>
      </div>
    </div>
  );
}