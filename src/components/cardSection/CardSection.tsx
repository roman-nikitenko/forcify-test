import React from 'react';
import "./cardSection.scss"
import { Card } from './Card';
import { AddNewCard } from './AddNewCard';
import card from '../../store/cardStore';
import { observer } from 'mobx-react-lite';


export const CardSection: React.FC = observer(() => {
  return (
    <section className="cards">
      <h1 className="cards-title">My Cards</h1>
      <section className="cards-list">
        {card.cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
        <AddNewCard />
      </section>
    </section>
  );
});
