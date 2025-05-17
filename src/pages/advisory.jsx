import { motion } from 'framer-motion';
import data from "../components/assests/committee.json";
import DepartmentHead from "./headOfDept";

const advisory = () => {
  const committee = data.committee_members;

//   const coreCommittee = committee.slice(0, 5);
  const advisoryBoard = committee.slice(5, 13);
  const nationalAdvisoryBoard = committee.slice(13);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const sectionTitle = (text: string) => (
    <p className="text-3xl font-bold tracking-wide leading-normal mb-6">
      <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">{text.slice(0, 4)}</span>
      {text.slice(4)}
    </p>
  );

  const renderCards = (list: typeof committee, offset: number = 0) =>
    list.map(({ Responsibility, Name_of_Faculty }, index) => {
      const [name, position] = Name_of_Faculty.split('()').map((item) => item.trim());
      return (
        <motion.div
          key={index + offset}
          className="bg-white border border-blue-900 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index}
          whileHover={{ scale: 1.02 }}
        >
          <p className="text-md font-semibold text-blue-950">{name}</p>
          <p className="text-gray-700">
            {Responsibility}{" "}
            {position && <span className="text-sm text-gray-500">({position})</span>}
          </p>
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
      </motion.section>

      {/* <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {sectionTitle("Committee")}
        <div className="flex flex-col gap-4">
          {renderCards(coreCommittee, 0)}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {sectionTitle("Head of Departments")}
        <DepartmentHead />
      </motion.section> */}
    </div>
  );
};

export default advisory;
