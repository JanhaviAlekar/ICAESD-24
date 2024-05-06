import data from "../components/assests/committee.json";

const Committees = () => {
  const committee = data.committee_members;
  console.log(committee);
  return (
    <div className="my-36 px-4 lg:px-36 ">
    <p className="text-3xl pb-8 font-[600] antalised tracking-wide"><span className="underline underline-offset-8 decoration-4 decoration-[#33358c]">Com</span>mittee</p>
    <div className="flex flex-col items-start">
      {committee.map(({ Responsibility, Name_of_Faculty }, index) => {
        const [name, position] = Name_of_Faculty.split('(').map(item => item.trim());
        
        return (
          <div key={index} className="flex flex-row  p-2 my-2">
            <div className="font-bold mr-2">{Responsibility} :</div>
            <div className="ml-2">{name} {position && `(${position})`}</div>
          </div>
        );
      })}
    </div>
  </div>
  );
};

export default Committees;
