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
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full border border-white/10'
  >
    <p className='text-[#38bdf8] font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[16px] leading-[26px]'>
        {testimonial}
      </p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} • {company}
          </p>
        </div>

        <img
          src={image}
          alt={`achievement-${name}`}
          className='w-10 h-10 rounded-full object-contain'
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
    <div className='bg-tertiary p-6 rounded-2xl h-full flex flex-col justify-between'>
      <div>
        <div className='flex flex-wrap justify-between items-start gap-2'>
          <h3 className='text-white font-bold text-[20px]'>{role}</h3>
          <span className='text-[#38bdf8] text-[13px] font-semibold bg-black-200 px-3 py-1 rounded-full border border-white/10'>
            {date}
          </span>
        </div>
        <p className='text-secondary text-[15px] font-medium italic mt-1'>
          {organization}
        </p>
        <ul className='mt-4 list-disc ml-5'>
          <li className='text-white-100 text-[14px] leading-[22px] tracking-wider'>
            {point}
          </li>
        </ul>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className='flex flex-col gap-16'>
      {/* Achievements Section */}
      <div className='mt-12 bg-black-100 rounded-[20px]'>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Honors & Recognition</p>
            <h2 className={styles.sectionHeadText}>Achievements.</h2>
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
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

        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
          {leadership.map((item, index) => (
            <LeadershipCard key={item.role} index={index} {...item} />
          ))}
        </div>
      </div>

      {/* Education & Certifications Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className='green-pink-gradient p-[1px] rounded-2xl shadow-card'
        >
          <div className='bg-tertiary p-8 rounded-2xl h-full'>
            <p className={styles.sectionSubText}>Academic Background</p>
            <h3 className='text-white font-black text-[28px] mt-1'>
              Education.
            </h3>
            <div className='mt-6 flex flex-col gap-4'>
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className='bg-black-200 p-5 rounded-xl border border-white/10'
                >
                  <div className='flex flex-wrap justify-between items-start gap-2'>
                    <h4 className='text-white font-bold text-[17px]'>
                      {edu.degree}
                    </h4>
                    <span className='text-[#38bdf8] text-[13px] font-semibold bg-tertiary px-3 py-1 rounded-full border border-white/10'>
                      {edu.date}
                    </span>
                  </div>
                  <p className='text-secondary text-[14px] mt-2'>
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
          <div className='bg-tertiary p-8 rounded-2xl h-full'>
            <p className={styles.sectionSubText}>Verified Credentials</p>
            <h3 className='text-white font-black text-[28px] mt-1'>
              Certifications.
            </h3>
            <div className='mt-6 flex flex-wrap gap-3'>
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className='bg-black-200 text-white-100 text-[14px] px-4 py-3 rounded-xl border border-white/10 flex items-center gap-2.5'
                >
                  <span className='w-2 h-2 rounded-full bg-[#38bdf8]' />
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
