import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-5xl">Skills</h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-2"
      >
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-cyan-500 p-5"
        >
          <IoLogoJavascript className="text-5xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-cyan-500 p-5"
        >
          <FaReact className="text-5xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-cyan-500 p-5"
        >
          <FaNodeJs className="text-5xl text-green-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-cyan-500 p-5"
        >
          <SiExpress className="text-5xl text-lime-100" />
        </motion.div>
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-cyan-500 p-5"
        >
          <BiLogoMongodb className="text-5xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-cyan-500 p-5"
        >
          <RiTailwindCssFill className="text-5xl text-sky-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-cyan-500 p-5"
        >
          <TiHtml5 className="text-5xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-cyan-500 p-5"
        >
          <FaGithub className="text-5xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-cyan-500 p-5"
        >
          <FaCss3Alt className="text-5xl text-indigo-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;

//
{
  /* <FaReact className="text-5xl text-green-500" />






 */
}
