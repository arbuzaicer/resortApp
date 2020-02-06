import React, {Component} from 'react';
import {RoomContext} from "../../Context/Context";
import Preloader from "../Preloader/Preloader";


class FeaturedRooms extends Component {

    static contextType = RoomContext;

    render() {
        const data = this.context;
        console.log(data)

        let featuredRooms = data.featuredRooms.map(item => {
            const single = <div key={item.id} className={'featured-room'}>
                <img src={item.images[0]} alt=""/>
                <p>{item.price}</p>
                <p>{item.name}</p>
            </div>;

            return single;
        });

        return (
            <div>
                <h2>Featured Rooms</h2>
                {data.loading === true ? <Preloader/> : featuredRooms}
            </div>
        );
    }
}

export default FeaturedRooms;