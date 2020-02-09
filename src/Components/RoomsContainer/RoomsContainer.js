import React from 'react';
import RoomsFilter from './RoomsFilter/RoomsFilter';
import RoomsList from "./RoomsList/RoomsList";
import {RoomConsumer} from '../../Context/Context'
import Loader from '../Preloader/Preloader'


export default function RoomsContainer() {
    return (
        <RoomConsumer>
            {
                (value) => {
                    const {rooms, sortedRooms, loading} = value;

                    if (loading) {
                        return <Loader/>
                    }

                    return (
                        <div>
                            <RoomsFilter rooms={rooms} />
                            <RoomsList rooms={sortedRooms}/>
                        </div>
                    )
                }
            }
        </RoomConsumer>
    );
}
