import { PROJECTS } from "..";
import { motion } from "framer-motion";

const container1 = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, delay: delay } },
});

const container2 = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, delay: delay } },
});

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.img
                variants={container1(2)}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src={project.image}
                height={200}
                width={200}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-3xl lg:w-3/4">
              <motion.h6
                variants={container2(3)}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="mb-2 font-extrabold text-cyan-300"
              >
                {project.title}
              </motion.h6>
              <motion.p
                variants={container2(3.5)}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="mb-4 "
              >
                {project.description}
              </motion.p>
              {project.technologies.map((tech, index) => (
                <motion.span
                  variants={container2(4)}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  key={index}
                  className="mr-2 rounded bg-neutral-800 px-2 py-1 text-violet-300 text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
