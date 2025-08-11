import Header from "../components/Header";
import About from "../sections/About/page";
import Contact from "../sections/Contact/page";
import Hero from "../sections/Hero/page";
import FashionFilms from "../sections/FashionFilms/page";
import Interactives from "../sections/Interactives/page";
import MoreServices from "../sections/MoreServices/page";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <FashionFilms />
      <Interactives />
      <MoreServices />
      <Contact />
    </main>
  );
}
