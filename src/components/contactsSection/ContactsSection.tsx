import React from 'react';
import './contactSection.scss'
import coworkers from '../../img/coworkers.png';

export const ContactsSection: React.FC = () => {
  return (
    <section className="contacts-section">
      <section className="contacts-section-wrapper">
        <img  src={coworkers} alt="Coworkers"/>
        <article className="contacts-section-wrapper-address">
          <h5 className="contacts-section-wrapper-address-name">Empire State Building</h5>
          <a href="https://www.google.com/maps/place/5th+Ave,+New+York,+NY,+USA/@40.7725266,-73.9708812,17z/data=!3m1!4b1!4m6!3m5!1s0x89c258a29d3847f5:0x564dfbba0141774a!8m2!3d40.7725266!4d-73.9683063!16zL20vMDF5NXF5?entry=ttu">350 5th Ave, New York, NY 10118</a>
          <a href="tel:1 212-736-3100">1 212-736-3100</a>
          <a className="underline" href="mailto:contacts@esbnyc.com">contacts@esbnyc.com</a>
        </article>
      </section>
    </section>
  );
};
