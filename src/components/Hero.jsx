import { HERO_CONTENT } from "..";
import MyPic from "../assets/me2.jpg";
import { motion } from "framer-motion";

const container1 = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, delay: delay } },
});

const container2 = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container1(0.25)}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="pb-12 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl text-white"
            >
              Samay Rehi
            </motion.h1>
            <motion.span
              variants={container1(0.5)}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="bg-gradient-to-r from-indigo-300 via-blue-500 to-cyan-300 bg-clip-text lg:bg-gradient-to-r lg:from-cyan-300 lg:via-blue-500 lg:to-indigo-300 text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container1(0.75)}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              variants={container2(1)}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="rounded-full"
              src={MyPic}
              alt="mypic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
