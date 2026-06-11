import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import SectionOne from "../Components/SectionOne";

export default function Home() {
  return (
    <main className="min-h-screen bg-black-90 text-black-10">
      <Navbar />
        <Hero />
          <SectionOne />
    </main>
  );
}
