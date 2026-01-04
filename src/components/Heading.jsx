import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Heading = ({ title, side }) => {
  return (
    <motion.div
      className={`flex flex-col gap-2 items-center text-center lg:items-${side} text-slate-100 mb-10`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-semibold mb-4">{title}</h1>
      <div className="w-28 bg-violet-700 h-1" />
    </motion.div>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  side: PropTypes.oneOf(["start", "center", "end"]),
};

Heading.defaultProps = {
  side: "center",
};

export default Heading;
