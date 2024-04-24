import diamond from"./diamond.jpeg"

export default function Header() {
    return (
        <div>
            <img alt="img1" src={diamond} className="w-[30px]"></img>
            <p className="font-bold text-4xl text-center p-4">Government College of Engineering, Amravati</p>
        </div>

    );

}