import React, {Component} from 'react';
import {RoomContext} from '../../Context/Context';
import {Link} from 'react-router-dom';
import Banner from '../Banner/Banner';
import StyledHero from '../StyledHero/StyledHero'
import defaultImg from '../../images/default_banner.jpg'


class SelectedRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug
        }
    }

    static contextType = RoomContext;

    render() {
        let {getSingleRoom} = this.context;
        const room = getSingleRoom(this.state.slug);

        if (!room) {
            return <div className='error'>
                <h3>No such room could be found</h3>
                <Link to='/rooms' className='btn-primary'>Back to rooms</Link>
            </div>
        }
        const {name, description, capacity, size, price, pets, breakfast, extras, images} = room;


        return (
            <>
                <StyledHero img={images[0] || defaultImg}>
                    <Banner
                        title={`${name.split(' ').map(item => item.charAt(0).toUpperCase() + item.substr(1)).join(' ')} Room`}>
                        <Link to='/rooms'>
                            back to rooms
                        </Link>
                    </Banner>
                </StyledHero>

                <section className='single-room'>
                    <div className='single-room-images'>
                        {images.slice(1).map((item, index) => {
                            return <img key={index} src={item} alt={name}/>
                        })}
                    </div>
                    <div className='single-room-info'>
                        <article className='description'>
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className='info'>
                            <h3>Info</h3>
                            <h6>Price: {price}</h6>
                            <h6>Size: {size} m<sup>2</sup></h6>
                            <h6>Max capacity: {
                                capacity > 1
                                    ? `${capacity} people`
                                    : `${capacity} person`
                            }</h6>
                            <h6>{pets ?
                                'pets'
                                : 'pets not allowed'}
                            </h6>
                            <h6>{breakfast && 'free breakfast including'}</h6>
                        </article>
                        <section className="room-extras">
                            <h6>Entras</h6>
                            <ul className="extras">
                                {extras.map((item, index)=> {
                                    return <li key = {index}>- {item}</li>
                                })}
                            </ul>
                        </section>
                    </div>
                </section>
            </>
        );
    }
}

export default SelectedRoom;