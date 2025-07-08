import deans from "../components/assests/deans.js";

const Deans = () => {
  const committee = deans || [];

  return (
    <section className="mb-16 px-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {committee.map(({ name_of_deans, designation, img }, index) => (
          <div
            key={index}
            className="bg-white border border-blue-900 rounded-xl px-4 py-5 shadow hover:shadow-md transition duration-300"
          >
            <img
              src={img}
              alt={name_of_deans}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-900 object-cover"
              loading="lazy"
            />
            <p className="text-center font-semibold text-blue-950">
              {name_of_deans}
            </p>
            <p className="text-center text-gray-700">{designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Deans;
