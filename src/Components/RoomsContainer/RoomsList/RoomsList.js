import React from "react";
import SingleRoom from "../../singleRoom/SingleRoom";

export default function RoomsList(props) {
    const rooms = props.rooms.map((item, i)=> {
        return (
            <SingleRoom key = {item.id} room = {item}/>
        )
    });
    if(!props.rooms.length) {
        return (
            <div className={'empty-search'}>
                <h3>Unfortunately no rooms matched your search parameters</h3>
            </div>
        )

    }
    return (
        <section className='roomslist'>
            {rooms}
        </section>
    )
}