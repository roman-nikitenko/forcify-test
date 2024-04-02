import React from 'react';
import { Header } from './components/header/Header';
import { Section } from './components/section/Section';
import { CardSection } from './components/cardSection/CardSection';
import { ContactsSection } from './components/contactsSection/ContactsSection';
import { Footer } from './components/footer/Footer';
import CardStore from './store/cardStore';
import { AboutUsSection } from './components/aboutUsSection/AboutUsSection';

function App() {
  CardStore.getCards();

  return (
    <>
      <Header />
      <main>
        <Section
          number="01"
          title="Reykjavik Fashion Festival —"
          subtitle="Branding, Interactive"
        >
          <AboutUsSection />
        </Section>
        <Section
          number="02"
          title="Girls Globe —"
          subtitle="Brand Strategy, Visual Identity"
          reverse={true}
        >
          <CardSection />
        </Section>
        <Section
          number="03"
          title="B&O Plan —"
          subtitle="User Experience, User Interface"
        >
          <ContactsSection />
        </Section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
