import { CONTACT } from "..";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, delay: delay } },
});

const Contacts = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-3xl">Get in Touch</h2>
      <motion.div
        variants={container(1)}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
        className="text-center tracking-tighter"
      >
        <p className="my-3">{CONTACT.email}</p>
        <p className="my-3">{CONTACT.phoneNo}</p>
        <a href="#" className="my-3">
          {CONTACT.address}
        </a>
      </motion.div>
    </div>
  );
};

export default Contacts;
