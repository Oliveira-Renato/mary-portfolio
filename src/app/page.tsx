import Header from "../components/Header";
import About from "../sections/About/page";
import Contact from "../sections/Contact/page";
import Hero from "../sections/Hero/page";
import Works from "../sections/Works/page";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero /> 
      <About />
      <Works />
      <Contact />
    </main>
  );
}