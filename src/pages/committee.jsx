import { motion } from "framer-motion";
import committee from "../components/assests/committee.js";
import DepartmentHead from "./headOfDept";
import Deans from "./deans";
import Students from "./students";

const Committees = () => {
  const coreCommittee = committee || [];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const sectionTitle = (text) => (
    <p className="text-3xl font-bold tracking-wide leading-normal mb-6">
      <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">
        {text.slice(0, 4)}
      </span>
      {text.slice(4)}
    </p>
  );

  const renderCards = (list, offset = 0) =>
    list.map(({ img, Name_of_Faculty, Responsibility }, index) => {
      return (
        <motion.div
          key={index + offset}
          className="bg-white border border-blue-900 rounded-xl px-4 py-5 shadow hover:shadow-md transition-all"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index}
          whileHover={{ scale: 1.02 }}
        >
          {img && (
            <img
              src={img}
              alt={"Image is loading..."}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-900 object-cover"
              loading="lazy"
            />
          )}
          <p className="text-center text-md font-semibold text-blue-950">
            {Name_of_Faculty}
          </p>

          {Responsibility && (
            <p className="text-center text-gray-700">{Responsibility} </p>
          )}
        </motion.div>
      );
    });

  return (
    <div className="my-20 px-4 lg:px-36">
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {sectionTitle("Committee")}
        {/* <div className="flex flex-col gap-4"> */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {renderCards(coreCommittee, 0)}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {sectionTitle("Deans")}
        <Deans />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {sectionTitle("Head of Departments")}
        <DepartmentHead />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {sectionTitle("Students Commitee")}
        <Students />
      </motion.section>
    </div>
  );
};

export default Committees;

{
  /* <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {sectionTitle("International Advisory Board")}
        <div className="flex flex-col gap-4">
          {renderCards(advisoryBoard, 5)}
        </div>
      </motion.section>

      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {sectionTitle("National Advisory Board")}
        <div className="flex flex-col gap-4">
          {renderCards(nationalAdvisoryBoard, 13)}
        </div>
      </motion.section> */
}
