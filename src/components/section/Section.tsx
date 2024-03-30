import React from 'react';
import "./section.scss"

type Props = {
  children?: React.ReactNode
  number: string;
  title: string;
  subtitle: string;
  backgroundBody?: string;
}

export const Section: React.FC<Props> = ({ children, number, title, subtitle, backgroundBody }) => {
  return (
    <section className="section">
      <div className="section-header">
        <span className="number">
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
