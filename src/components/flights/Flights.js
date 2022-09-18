import {useEffect, useState} from "react";

import Flight from "../flight/Flight";

function Flights() {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(value => value.json())
            .then(value => {
                const filter = value.filter(flight => flight.launch_year !== "2020");

                setFlights(filter)
            });
    }, []);

    return (
        <div>
            {
                flights.map((flight, index) => <Flight flight={flight} key={index}/>)
            }
        </div>
    )
};
export default Flights;