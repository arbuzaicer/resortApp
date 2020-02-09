import React, {Component} from 'react';
import {RoomContext} from "../../Context/Context";
import Preloader from "../Preloader/Preloader";
import SingleRoom from "../singleRoom/SingleRoom";
import Title from "../Title/Title";


class FeaturedRooms extends Component {

    static contextType = RoomContext;

    render() {
        let {loading, featuredRooms:rooms} = this.context;

        rooms = rooms.map(item => {
            return <SingleRoom key = {item.id} room = {item}/>
        });
        return (
            <section className='featured-rooms'>
                <Title title = 'featured rooms'/>
                <div className="featured-items">
                    {loading?<Preloader/>:rooms}
                </div>
            </section>
        );
    }
}

export default FeaturedRooms;