import data from "../components/assests/committee.json";
import DepartmentHead from "./headOfDept";

const Committees = () => {
  const committee = data.committee_members;

  // Extract different committee sections
  const coreCommittee = committee.slice(0, 5);
  const advisoryBoard = committee.slice(5, 13); // International Advisory Board (index 5 to 11)
  const nationalAdvisoryBoard = committee.slice(13); // National Advisory Board (index 12 onwards)

  return (
    <div className="my-20 px-4 lg:px-36">
      {/* Section: International Advisory Board */}
      <section className="mb-16">
        <p className="text-3xl font-bold tracking-wide leading-normal mb-6">
          <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Inte</span>rnational Advisory Board
        </p>
        <div className="flex flex-col gap-4">
          {advisoryBoard.map(({ Responsibility, Name_of_Faculty }, index) => {
            const [name, position] = Name_of_Faculty.split('()').map((item) => item.trim());
            return (
              <div key={index} className="bg-white border border-blue-900 rounded-xl px-4 py-3 shadow-sm">
                <p className="text-md font-semibold text-blue-950">{name}</p>
                <p className="text-gray-700">{Responsibility} {position && <span className="text-sm text-gray-500">({position})</span>}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section: National Advisory Board */}
      <section className="mb-16">
        <p className="text-3xl font-bold tracking-wide leading-normal mb-6">
          <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Nati</span>onal Advisory Board
        </p>
        <div className="flex flex-col gap-4">
          {nationalAdvisoryBoard.map(({ Responsibility, Name_of_Faculty }, index) => {
            const [name, position] = Name_of_Faculty.split('()').map((item) => item.trim());
            return (
              <div key={index + 12} className="bg-white border border-blue-900 rounded-xl px-4 py-3 shadow-sm">
                <p className="text-md font-semibold text-blue-950">{name}</p>
                <p className="text-gray-700">{Responsibility} {position && <span className="text-sm text-gray-500">({position})</span>}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section: Core Committee */}
      <section className="mb-16">
        <p className="text-3xl font-bold tracking-wide leading-normal mb-6">
          <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Com</span>mittee
        </p>
        <div className="flex flex-col gap-4">
          {coreCommittee.map(({ Responsibility, Name_of_Faculty }, index) => {
            const [name, position] = Name_of_Faculty.split('()').map((item) => item.trim());
            return (
              <div key={index} className="bg-white border border-blue-900 rounded-xl px-4 py-3 shadow-sm">
                <p className="text-md font-semibold text-blue-950">{name}</p>
                <p className="text-gray-700">{Responsibility} {position && <span className="text-sm text-gray-500">({position})</span>}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section: Department Heads */}
      <section>
        <p className="text-3xl font-bold tracking-wide leading-normal mb-6">
          <span className="underline underline-offset-8 decoration-4 decoration-[#E30022]">Hea</span>d of Departments
        </p>
        <DepartmentHead />
      </section>
    </div>
  );
};

export default Committees;
