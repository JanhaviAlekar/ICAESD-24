export const Venue = () => {
    return (
        <>
 <div className="flex flex-col items-center mx-auto mb-10">
    <div className="mb-4">
        <p className="font-bold text-3xl text-center text-[#0f52ba] mb-6">Venue</p>
    </div>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.8842484462803!2d77.75418667525456!3d20.957163080674388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a3464a9a39cf%3A0x41ba68e6a59d67ab!2sGovernment%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1713796273367!5m2!1sen!2sin"
        className="lg:w-[850px] lg:h-[500px] w-[250px] h-[300px]"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy={"no-referrer-when-downgrade"}
    ></iframe>
</div>
        </>
    );
}