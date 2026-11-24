import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, skillCategories } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Technologies & Domains
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technical Skills.
        </h2>
      </motion.div>

      <div className='mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
        {skillCategories.map((group, idx) => (
          <motion.div
            key={group.category}
            variants={fadeIn("up", "spring", idx * 0.15, 0.75)}
            className='bg-tertiary p-5 sm:p-6 rounded-2xl border border-white/10 shadow-card'
          >
            <h3 className='text-[#38bdf8] font-bold text-[16px] sm:text-[18px] mb-3 sm:mb-4'>
              {group.category}
            </h3>
            <div className='flex flex-wrap gap-2'>
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className='bg-black-200 text-secondary text-[12px] sm:text-[13px] px-3 py-1 rounded-full border border-white/10 hover:border-[#38bdf8] hover:text-white transition-colors'
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className='mt-10 sm:mt-14 flex flex-row flex-wrap justify-center gap-5 sm:gap-10'>
        {technologies.map((technology) => (
          <div className='w-16 h-16 xs:w-20 xs:h-20 sm:w-28 sm:h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
