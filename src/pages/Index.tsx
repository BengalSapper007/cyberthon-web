import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Tracks from "../components/Tracks";
import Timeline from "../components/Timeline";
import Sponsors from "../components/Sponsors";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";

const Index = () => {
  return (
    <main className="bg-background">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Timeline />
      <Sponsors />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
