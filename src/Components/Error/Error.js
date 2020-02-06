import React from "react";
import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import {Link} from "react-router-dom";

export default function Error (){
    return(
        <div>
            <Hero>
                <Banner title={'404'} description={`The page is'n find`}>
                    <Link to = '/' className = {'btn-primary'}>
                        Go to main page
                    </Link>
                </Banner>
            </Hero>
        </div>
    )
}
