import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='w-full sm:w-[360px]'
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-4 sm:p-5 rounded-2xl w-full h-full flex flex-col justify-between'
      >
        <div>
          <div className='relative w-full h-[190px] xs:h-[210px] sm:h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>

          <div className='mt-4 sm:mt-5 flex-1'>
            <h3 className='text-white font-bold text-[20px] sm:text-[24px]'>
              {name}
            </h3>
            <p className='mt-2 text-secondary text-[13px] sm:text-[14px] leading-[21px] sm:leading-[22px]'>
              {description}
            </p>
          </div>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[13px] sm:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-12 sm:mt-20 flex flex-wrap justify-center gap-6 sm:gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className='mt-12 flex justify-center'
      >
        <a
          href='https://github.com/HarshAIverse?tab=repositories'
          target='_blank'
          rel='noreferrer'
          className='green-pink-gradient p-[1px] rounded-xl shadow-card transition-transform duration-300 hover:scale-105'
        >
          <div className='bg-tertiary hover:bg-black-100 transition-colors px-8 py-3.5 rounded-xl flex items-center gap-3'>
            <img
              src={github}
              alt='github'
              className='w-5 h-5 object-contain'
            />
            <span className='text-white font-bold text-[16px] tracking-wide'>
              More Projects
            </span>
          </div>
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
