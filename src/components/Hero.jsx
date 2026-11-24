import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[85px] xs:top-[100px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-4 sm:gap-5 pointer-events-none`}
      >
        <div className='flex flex-col justify-center items-center mt-3 sm:mt-5'>
          <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#38bdf8]' />
          <div className='w-1 sm:h-80 h-36 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#38bdf8]'>Harshal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-xl`}>
            AI/ML Engineer specializing in <br className='sm:block hidden' />
            Generative AI, LLMs, Computer Vision & Edge AI
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-6 w-full flex justify-center items-center z-10'>
        <a href='#about' aria-label='Scroll to About section'>
          <div className='w-[30px] h-[54px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1.5 sm:p-2'>
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
