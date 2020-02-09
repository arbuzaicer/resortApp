import React from "react";
import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import {Link} from "react-router-dom";
import RoomsContainer from "../RoomsContainer/RoomsContainer";

const Rooms = () => {
    return (
        <>
            <Hero hero={"roomsHero"}>
                <Banner title={'Our rooms'}>
                    <Link to='/' className='btn-primary'>
                        Return home
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer/>
        </>

    )
};

export default Rooms;