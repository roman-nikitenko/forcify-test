import React from 'react';
import './header.scss'

export const Header: React.FC = () => {
  return (
    <header className="header-wrapper">
      <article className="header">
        <div className="header-content">
          <span className="header-content-subtitle">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.</span>
          <h1 className="header-content-title">Neque porro quisquam<br/> est qui dolorem ipsum quia dolor sit amet, consectetur...</h1>
        </div>
      </article>
    </header>
  );
};
