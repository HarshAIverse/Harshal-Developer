import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary overflow-hidden'>
        {/* Animated ambient background layer across the entire website */}
        <div className='animated-bg-grid fixed inset-0 pointer-events-none z-[-1]'>
          <div className='glow-orb glow-orb-1' />
          <div className='glow-orb glow-orb-2' />
          <div className='glow-orb glow-orb-3' />
        </div>
        <StarsCanvas />

        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
