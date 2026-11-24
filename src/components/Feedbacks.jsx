import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {
  testimonials,
  leadership,
  education,
  certifications,
} from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.3, 0.75)}
    className='bg-black-200 p-6 sm:p-10 rounded-3xl xs:w-[320px] w-full border border-white/10'
  >
    <p className='text-[#38bdf8] font-black text-[36px] sm:text-[48px] leading-none'>"</p>

    <div className='mt-2'>
      <p className='text-white tracking-wider text-[14px] sm:text-[16px] leading-[23px] sm:leading-[26px]'>
        {testimonial}
      </p>

      <div className='mt-6 sm:mt-7 flex justify-between items-center gap-2'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[15px] sm:text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} • {company}
          </p>
        </div>

        <img
          src={image}
          alt={`achievement-${name}`}
          className='w-10 h-10 rounded-full object-contain shrink-0'
        />
      </div>
    </div>
  </motion.div>
);

const LeadershipCard = ({ index, role, organization, date, point }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className='green-pink-gradient p-[1px] rounded-2xl shadow-card'
  >
    <div className='bg-tertiary p-5 sm:p-6 rounded-2xl h-full flex flex-col justify-between'>
      <div>
        <div className='flex flex-wrap justify-between items-start gap-2'>
          <h3 className='text-white font-bold text-[18px] sm:text-[20px]'>{role}</h3>
          <span className='text-[#38bdf8] text-[12px] sm:text-[13px] font-semibold bg-black-200 px-3 py-1 rounded-full border border-white/10'>
            {date}
          </span>
        </div>
        <p className='text-secondary text-[14px] sm:text-[15px] font-medium italic mt-1'>
          {organization}
        </p>
        <ul className='mt-3 sm:mt-4 list-disc ml-5'>
          <li className='text-white-100 text-[13px] sm:text-[14px] leading-[21px] sm:leading-[22px] tracking-wider'>
            {point}
          </li>
        </ul>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className='flex flex-col gap-12 sm:gap-16'>
      {/* Achievements Section */}
      <div className='mt-6 sm:mt-12 bg-black-100 rounded-[20px]'>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[220px] sm:min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Honors & Recognition</p>
            <h2 className={styles.sectionHeadText}>Achievements.</h2>
          </motion.div>
        </div>
        <div className={`-mt-14 sm:-mt-20 pb-10 sm:pb-14 ${styles.paddingX} flex flex-wrap justify-center gap-6 sm:gap-7`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>

      {/* Leadership and Community Section */}
      <div>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Campus & Ecosystem Impact</p>
          <h2 className={styles.sectionHeadText}>Leadership & Community.</h2>
        </motion.div>

        <div className='mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
          {leadership.map((item, index) => (
            <LeadershipCard key={item.role} index={index} {...item} />
          ))}
        </div>
      </div>

      {/* Education & Certifications Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className='green-pink-gradient p-[1px] rounded-2xl shadow-card'
        >
          <div className='bg-tertiary p-5 sm:p-8 rounded-2xl h-full'>
            <p className={styles.sectionSubText}>Academic Background</p>
            <h3 className='text-white font-black text-[24px] sm:text-[28px] mt-1'>
              Education.
            </h3>
            <div className='mt-5 sm:mt-6 flex flex-col gap-4'>
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className='bg-black-200 p-4 sm:p-5 rounded-xl border border-white/10'
                >
                  <div className='flex flex-wrap justify-between items-start gap-2'>
                    <h4 className='text-white font-bold text-[15px] sm:text-[17px]'>
                      {edu.degree}
                    </h4>
                    <span className='text-[#38bdf8] text-[12px] sm:text-[13px] font-semibold bg-tertiary px-3 py-1 rounded-full border border-white/10'>
                      {edu.date}
                    </span>
                  </div>
                  <p className='text-secondary text-[13px] sm:text-[14px] mt-2'>
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.3, 0.75)}
          className='green-pink-gradient p-[1px] rounded-2xl shadow-card'
        >
          <div className='bg-tertiary p-5 sm:p-8 rounded-2xl h-full'>
            <p className={styles.sectionSubText}>Verified Credentials</p>
            <h3 className='text-white font-black text-[24px] sm:text-[28px] mt-1'>
              Certifications.
            </h3>
            <div className='mt-5 sm:mt-6 flex flex-wrap gap-2.5 sm:gap-3'>
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className='bg-black-200 text-white-100 text-[13px] sm:text-[14px] px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-white/10 flex items-center gap-2.5'
                >
                  <span className='w-2 h-2 rounded-full bg-[#38bdf8] shrink-0' />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "leadership");
