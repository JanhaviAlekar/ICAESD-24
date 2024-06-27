import img1 from "../components/Ica.jpeg"
import img2 from "../components/fullDoc.jpeg"
const Cfp = () => {
    return (
        <div className="my-24  lg:px-36 flex justify-center">
            <div class="bg-white  w-full lg:max-w-[80%]">
                <img src={img1} alt="details" className="w-full"></img>
                <img src={img2} alt="details"></img>
            </div>
        </div>
    );
}

export default Cfp