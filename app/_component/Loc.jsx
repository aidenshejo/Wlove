import React from 'react';

export default function Loc() {
  return (
    <div className="w-full h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.1234567890123!2d31.578123456789!3d4.851234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1234567890abcdef%3A0x1234567890abcdef!2sJuba%20Market%2C%20South%20Sudan!5e0!3m2!1sen!2sus!4v1633078471234!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
