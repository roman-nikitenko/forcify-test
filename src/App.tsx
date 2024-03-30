import React from 'react';
import { Header } from './components/header/Header';
import { Section } from './components/section/Section';
import { CardSection } from './components/cardSection/CardSection';
import coworkers from './img/coworkers.png'
import { ContactsSection } from './components/contactsSection/ContactsSection';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="">
      <Header />
      <main>
        <Section
          number="01"
          title="Reykjavik Fashion Festival —"
          subtitle="Branding, Interactive"
        >
          <div className="section-body">
            <div className="section-body-title">
              <h1 className="title">Why Serious Business?</h1>
              <p className="text-style text">
                Donec efficitur tristique nunc, vel volutpat lectus placerat eget. Aliquam id tincidunt nunc. Morbi commodo maximus commodo. Integer non massa cursus tortor euismod pretium vitae eu ante. Pellentesque non urna pellentesque, aliquet velit in.
              </p>
              <div className="decoration-border" />
            </div>
            <div className="section-body-description">
              <p className="text-style">
                Donec efficitur tristique nunc, vel volutpat lectus placerat eget. Aliquam id tincidunt nunc. Morbi commodo maximus commodo. Integer non massa cursus tortor euismod pretium vitae eu ante. Pellentesque non urna pellentesque, aliquet velit in, auctor massa. Nunc non fringilla justo. Etiam consequat auctor est ac dignissim. Integer accumsan aliquam vestibulum. Vestibulum ornare, metus eget scelerisque pulvinar, lectus tellus vestibulum est, et suscipit velit nunc quis turpis. Integer lacus libero, consectetur id pharetra sit amet, maximus eu tellus. Suspendisse potenti. In eget nibh iaculis, sagittis ante et, fringilla augue. Vestibulum dolor ligula, gravida at ante ac, sagittis viverra nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis sagittis viverra nibh egestas.
              </p>
            </div>
          </div>
        </Section>
        <Section
          number="02"
          title="Girls Globe —"
          subtitle="Brand Strategy, Visual Identity"
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
    </div>
  );
}

export default App;
