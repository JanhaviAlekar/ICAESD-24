import faculty from "../components/assests/faculty.js";

const DepartmentHead = () => {
  const committee = faculty || [];

  return (
    <section className="mb-16 px-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {committee.map(({ name_of_faculty, department, img }, index) => (
          <div
            key={index}
            className="bg-white border border-blue-900 rounded-xl px-4 py-5 shadow hover:shadow-md transition duration-300"
          >
            <img
              src={img}
              alt={name_of_faculty}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-900 object-cover"
              loading="lazy"
            />
            <p className="text-center font-semibold text-blue-950">{name_of_faculty}</p>
            <p className="text-center text-gray-700">{department}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DepartmentHead;
