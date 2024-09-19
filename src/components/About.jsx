import { PART1, PART2, PART3, PART4 } from "..";
import aboutMe from "../assets/me2.jpg";
import { motion } from "framer-motion";

const container1 = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, delay: delay } },
});

const container2 = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, delay: delay } },
});

const About = () => {
  return (
    <div className="border-b border-slate-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-cyan-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img
              variants={container1(1.25)}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="rounded-3xl w-[95%]"
              src={aboutMe}
              alt="aboutme"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.ul
            variants={container2(1.5)}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="my-2 max-w-xl py-6 flex flex-col justify-around items-center content-around "
          >
            <li className="p-2">
              <p>{PART1}</p>
            </li>
            <li className="p-2">
              <p>{PART2}</p>
            </li>
            <li className="p-2">
              <p>{PART3}</p>
            </li>
            <li className="p-2">
              <p>{PART4}</p>
            </li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default About;
