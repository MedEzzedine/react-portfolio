import { motion } from "framer-motion";
import { styles } from "../../styles";
import { staggerContainer } from "../../utils/motion";

// This Higher Order Component is used to format all sections nicely in the center
// motion.section is used for this purpose
const SectionWrapper = (Component, id) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, animate: 0.26 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={id}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
