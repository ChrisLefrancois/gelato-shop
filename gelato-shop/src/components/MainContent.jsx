import Navbar from './Navbar';
import Hero from './HeroBanner';
import About from './About';
import LocationHours from './LocationHours';
import Contact from './ContactUs';
import Footer from './Footer';

function MainContent({ t,language, onLanguageChange  }) {
  return (
    <div className="font-sans text-gray-800">
      <Navbar t={t.navbar}
       currentLanguage={language}
       onLanguageChange={onLanguageChange} />
      <main>
        <section id="home">
          <Hero t={t.hero} />
        </section>
        <section id="about">
          <About t={t.about} />
        </section>
        <section id="location">
          <LocationHours t={t.location} />
        </section>
        <section id="contact">
          <Contact t={t.contact} />
        </section>
      </main>
      <Footer t={t.contact} />
    </div>
  );
}

export default MainContent;
