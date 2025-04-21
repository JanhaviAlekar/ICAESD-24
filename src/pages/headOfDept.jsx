import data from "../components/assests/faculty.json";

const DepartmentHead = () => {
  const committee = data.faculty;

  return (
    <section className="mb-16">
      <div className="flex flex-col gap-4">
        {committee.map(({ name_of_faculty, department }, index) => {
          const [name, position] = name_of_faculty?.split("()").map((item) => item.trim()) || ["", ""];

          return (
            <div
              key={index}
              className="bg-white border border-blue-900 rounded-xl px-4 py-3 shadow-sm"
            >
              <p className="text-md font-semibold text-blue-950">{name}</p>
              <p className="text-gray-700">
                {department}{" "}
                {position && (
                  <span className="text-sm text-gray-500">({position})</span>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DepartmentHead;
