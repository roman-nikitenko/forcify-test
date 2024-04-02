import React from 'react';
import "./section.scss"

type Props = {
  children?: React.ReactNode
  number: string;
  title: string;
  subtitle: string;
  reverse?: boolean;
}

export const Section: React.FC<Props> = ({ children, number, title, subtitle, reverse }) => {
  return (
    <section className="section">
      <div className="section-header" style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
        <span className="number mx-xl-5">
          { number }
        </span>
        <div className="description">
          <h5 className="description-title">
            { title }
          </h5>
          <p className="description-subtitle">
            { subtitle }
          </p>
        </div>
      </div>
        { children }
    </section>
  );
};
