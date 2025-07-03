import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { AiOutlineMail, AiOutlinePhone, AiOutlineDownload } from "react-icons/ai";

const Contact = () => {
  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='bg-black-100 p-10 rounded-2xl w-full max-w-3xl mx-auto text-white'
    >
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact Information</h3>

      <div className='mt-10 space-y-6 text-lg'>
        <div className='flex items-center gap-4'>
          <AiOutlineMail size={24} className="text-[#915EFF]" />
          <span>anand2522004@gmail.com</span>
        </div>

        <div className='flex items-center gap-4'>
          <AiOutlinePhone size={24} className="text-[#915EFF]" />
          <span>+91 62306 79140</span>
        </div>

        <div className='flex items-center gap-4'>
          <AiOutlineDownload size={24} className="text-[#915EFF]" />
          <a
            href='/Anand_Resume.pdf'  // 👈 Make sure this file is in your `public` folder
            download
            className='text-white underline hover:text-[#915EFF]'
          >
            Download Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Contact, "contact");
