import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import WaysOfWorking from '../components/WaysOfWorking';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="selection:bg-white selection:text-black min-h-screen bg-[var(--bg-black)] text-[var(--text-white)] font-sans">
      <Navbar />
      <main className="w-full max-w-[1440px] mx-auto px-6 md:px-12 relative overflow-hidden">
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute -top-[20%] -left-[20%] w-[110vw] h-[110vh] bg-[var(--gradient-teal)] rounded-full mix-blend-screen filter blur-[280px] animate-float-slow"></div>
          <div className="absolute top-[5%] right-[-10%] w-[90vw] h-[90vh] bg-[var(--gradient-lime)] rounded-full mix-blend-screen filter blur-[320px] animate-float-medium"></div>
          <div className="absolute top-[40%] -left-[25%] w-[80vw] h-[80vh] bg-[var(--gradient-teal)] rounded-full mix-blend-screen filter blur-[300px] animate-float-slow"></div>
          <div className="absolute top-[60%] right-[5%] w-[100vw] h-[80vh] bg-[var(--gradient-lime)] rounded-full mix-blend-screen filter blur-[350px] animate-float-medium"></div>
        </div>

        <Hero />
        <About />
        <Work />
        <WaysOfWorking />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
