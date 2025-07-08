import student from "../components/assests/students.js";

const Students = () => {
  const students = student || [];

  return (
    <section className="mb-16 px-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {students.map(({ name_of_student, designation, img }, index) => (
          <div
            key={index}
            className="bg-white bordername_of_Student border-blue-900 rounded-xl px-4 py-5 shadow hover:shadow-md transition duration-300"
          >
            <img
              src={img}
              alt={name_of_student}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-900 object-cover"
              loading="lazy"
            />
            <p className="text-center font-semibold text-blue-950">
              {name_of_student}
            </p>
            <p className="text-center text-gray-700">{designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Students;
