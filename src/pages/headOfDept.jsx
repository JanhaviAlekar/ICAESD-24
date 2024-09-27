import data from "../components/assests/faculty.json";

const DepartmentHead = () => {
    const committee = data.faculty;
    return (
        <div className="flex flex-col items-start">
            {
                committee.map(({ name_of_faculty, department }, index) => {
                    return (
                        <div key={index} className="flex flex-row p-2 my-2">
                            <div className="font-bold mr-2">{department} :</div>
                            <div className="ml-2">{name_of_faculty}</div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default DepartmentHead;
