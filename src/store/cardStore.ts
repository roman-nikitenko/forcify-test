import { makeAutoObservable } from "mobx"
import { CardType } from '../type/CardType';

class CardStore {
  cards: CardType[] = [
    {id: 1, title: "Shop at support your local farmers market", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur doloremque eligendi eos explicabo in minus molestias. A adipisci assumenda at beatae consectetur consequatur cupiditate dolorem doloremque dolorum earum eligendi enim eos excepturi explicabo impedit incidunt magni nam natus nisi nulla officiis pariatur perferendis perspiciatis placeat provident quasi ratione, rem sequi sint soluta sunt temporibus tenetur totam veniam veritatis vero voluptate. Accusantium ad adipisci aliquid asperiores blanditiis deserunt dignissimos eligendi enim eos et fuga fugiat fugit harum hic illum, in inventore libero magnam molestias necessitatibus nemo odio provident quas quidem quisquam quo ratione recusandae sapiente sed tempore ullam ut veniam?"},
    {id: 2, title: "Take a spontaneous road trip with some friends", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur doloremque eligendi eos explicabo in minus molestias. A adipisci assumenda at beatae consectetur consequatur cupiditate dolorem doloremque dolorum earum eligendi enim eos excepturi explicabo impedit incidunt magni nam natus nisi nulla officiis pariatur perferendis perspiciatis placeat provident quasi ratione, rem sequi sint soluta sunt temporibus tenetur totam veniam veritatis vero voluptate. Accusantium ad adipisci aliquid asperiores blanditiis deserunt dignissimos eligendi enim eos et fuga fugiat fugit harum hic illum, in inventore libero magnam molestias necessitatibus nemo odio provident quas quidem quisquam quo ratione recusandae sapiente sed tempore ullam ut veniam?"},
    {id: 3, title: "Start a family tree", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur doloremque eligendi eos explicabo in minus molestias. A adipisci assumenda at beatae consectetur consequatur cupiditate dolorem doloremque dolorum earum eligendi enim eos excepturi explicabo impedit incidunt magni nam natus nisi nulla officiis pariatur perferendis perspiciatis placeat provident quasi ratione, rem sequi sint soluta sunt temporibus tenetur totam veniam veritatis vero voluptate. Accusantium ad adipisci aliquid asperiores blanditiis deserunt dignissimos eligendi enim eos et fuga fugiat fugit harum hic illum, in inventore libero magnam molestias necessitatibus nemo odio provident quas quidem quisquam quo ratione recusandae sapiente sed tempore ullam ut veniam?"},
  ]
  constructor() {
    makeAutoObservable(this);
  }
  
  updateLocalStorage() {
    localStorage.setItem('cards', JSON.stringify(this.cards));
  }
  
  addCard(card: CardType) {
    this.cards.push(card);
    this.updateLocalStorage();
  }
  
  removeCard(id: number) {
    this.cards = this.cards.filter(card => card.id !== id);
    this.updateLocalStorage();
  }
  
  editTextCard(id: number, text: string) {
    this.cards = this.cards.map(card => card.id === id ? {...card, description: text} : card);
    this.updateLocalStorage();
  }
  
  getCards() {
    const cards = localStorage.getItem('cards');
    if (cards) {
      const parsCards = JSON.parse(cards);

      this.cards = [...parsCards];
    } else {
      this.updateLocalStorage();
    }
  }
}

export default new CardStore();