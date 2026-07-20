import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { Registration } from "./components/registration";
import { Benefits } from "./components/benefits";
import { FAQ } from "./components/faq";
import { CTA } from "./components/cta";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Registration />
        <Benefits />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
