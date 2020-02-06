import React, {Component} from 'react';
import data from "../data"

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    };

    componentDidMount() {
        let rooms = this.formatDataRooms(data);
        let featuredRooms = rooms.filter(item => item.featured === true);

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false
        })
    }


    formatDataRooms(items) {

        let rooms = items.map(item=> {            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let single = {...item.fields, images, id};
            return single;
        });

        return rooms;

    }

    render() {
        return (
           <RoomContext.Provider value = {{...this.state}}>
               {this.props.children}
           </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};