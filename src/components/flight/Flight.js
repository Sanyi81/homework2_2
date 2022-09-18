function Flight({flight}) {
    return (
        <div>
            <h3>{flight.mission_name}</h3>
            <h3>{flight.launch_year}</h3>
            <img src={flight.links.mission_patch_small} alt=""/>
        </div>
    )
};
export default Flight;