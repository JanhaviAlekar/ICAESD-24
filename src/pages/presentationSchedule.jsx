import file from "../components/schedule.pdf"
const PresentationSchedule = () => {
    return (
        <iframe title="schedule" src={file} width="100%" height="1080px"></iframe>
    );
}

export default PresentationSchedule;