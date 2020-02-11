import React, {Component} from 'react';
import data from "../data"

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,

        /*Setting default values for filtering*/
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };

    componentDidMount() {
        let rooms = this.formatDataRooms(data);
        let featuredRooms = rooms.filter(item => item.featured === true);

        /*Set max size, price for filtering*/
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            maxPrice,
            maxSize
        })
    }

    formatDataRooms(items) {
        let rooms = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let single = {...item.fields, images, id};
            return single;
        });

        return rooms;

    }

    getSingleRoom = (slug) => {
        let temp = [...this.state.rooms];
        const currentRoom = temp.find(item => item.slug === slug);
        return currentRoom;
    };

    handleChange = event => {
        const target = event.target;
        const name = event.target.name;
        const value = target.type === 'checkbox'
            ? target.checked
            : event.target.value;
        this.setState(
            {
                [name]: value
            },
            this.filterRooms)
    };

    getUnique(arr, prop) {
        return Array.from(new Set(arr.map(item => item[prop])))
    };

    filterRooms = () => {
        let {
            rooms, type, capacity, price, minSize, maxSize, breakfast, pets
        } = this.state;
        let tempRooms = [...rooms];
        capacity = parseInt(capacity);
        price = parseInt(price);
        minSize = parseInt(minSize);
        maxSize = parseInt(maxSize);
        breakfast = Boolean(breakfast);

        /*Starting create filters sections*/

        /*Filter by type*/
        if (type !== 'all') {
            tempRooms = tempRooms.filter(item => item.type === type)
        }

        /*Filter by capacity*/
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(item => item.capacity >= capacity)
        }

        /*Filter by price*/
        tempRooms = tempRooms.filter(item => item.price <= price);

        /*Filter by size*/
        tempRooms = tempRooms.filter(item => item.size >= minSize && item.size <= maxSize);

        /*Filter by breakfast*/
        if(breakfast) {
            tempRooms = tempRooms.filter(item => item.breakfast === true);
        } else {
            tempRooms = tempRooms;
        }
        if(pets) {
            tempRooms = tempRooms.filter(item => item.pets === true);
        }

        /*Change state*/
        this.setState({
            sortedRooms: tempRooms
        });

    };

    render() {
        return (
            <RoomContext.Provider value={{
                ...this.state,
                getSingleRoom: this.getSingleRoom, handleChange: this.handleChange, getUnique: this.getUnique
            }}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};