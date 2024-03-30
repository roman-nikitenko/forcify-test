import React from 'react';
import "./cardSection.scss"
import { Card } from './Card';
import { AddNewCard } from './AddNewCard';

export const CardSection: React.FC = () => {
  return (
    <section className="cards">
      <h1 className="cards-title">My Cards</h1>
      <section className="cards-list">
        <Card />
        <Card />
        <Card />
        <Card />
        <AddNewCard />
      </section>
    </section>
  );
};
