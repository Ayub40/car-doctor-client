import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, serServices] = useState([]);

    // useEffect(() => { }, [])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => serServices(data))
    }, [])



    return (
        < div className="mt-24" >
            <div className="text-center space-y-5">
                <h3 className="text-2xl font-bold text-[#FF3811] ">Service</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {/* <p>Services {services.length}</p> */}
                {
                    services.map(service =>
                        <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                }
            </div>
        </div >
    );
};

export default Services;