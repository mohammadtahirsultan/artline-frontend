
const ClientSection = () => {
    const logos = [
        '/clients/client-1.png',
        '/clients/client-2.png',
        '/clients/client-3.png',
        '/clients/client-4.png',
        '/clients/client-5.png',
        '/clients/client-6.png',
        '/clients/client-7.png',
        '/clients/client-8.png',
    ]

    return (
        <div className="logos overflow-hidden py-[80px] justify-between w-[100%]">
            <div className="logos-slide whitespace-nowrap">
                {logos.map((logo, index) => (
                    <img src={logo} alt={`logo ${index}`} key={index} className="slide-images h-[50px] inline-block" />
                ))}
            </div>
        </div>
    );
};

export default ClientSection;
