/* App — Landing page composition + render */

const App = () => {
  const Header = window.Header;
  const Hero = window.Hero;
  const Services = window.Services;
  const WhyUs = window.WhyUs;
  const HowItWorks = window.HowItWorks;
  const Results = window.Results;
  const Testimonials = window.Testimonials;
  const CTASection = window.CTASection;
  const Footer = window.Footer;
  const CalendlyPopup = window.CalendlyPopup;

  return (
    <>
      <CalendlyPopup />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Results />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
