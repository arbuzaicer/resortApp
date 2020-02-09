import React from 'react';
import Hero from '../Hero/Hero';
import Banner from '../Banner/Banner';
import {Link}  from 'react-router-dom'
import Services from "../Services/Services";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";

const Home = () => {
    return (
        <div>
            <Hero> {/*Универсальный main-view- компонент. Он будет менять фон для разных
            компонентов. Настройки компонент буду проводится в главном app.css файле
            */}
                <Banner
                    title = {'Luxury rooms'}
                    description={'get better rooms from the whole beach'}
                    > {/*Компонента, которая отобразит информацию про компоненту,
                в которой она была использована*/}
                    <Link to='/rooms' className = {'btn-primary'}>
                        Watch rooms
                    </Link>
                </Banner>
            </Hero>
            <Services/>
            <FeaturedRooms/>
        </div>
    )
};

export default Home;