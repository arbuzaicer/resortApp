import React from "react";
import {Link} from 'react-router-dom'
import defaultImage from '../../images/default-image-room.jpg'

export default function SingleRoom({room}) {
    const {name, slug, images, price} = room;

    return (
        <article className='room'>

            <div className="img-container">
                <img src={images[0] || defaultImage} alt="single room"/>
                <div className="room-price">
                    <h6>{price + ' $'}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className = 'btn-primary room-link'>
                    Features
                </Link>
            </div>
            <p className='room-info'>{name}</p>
        </article>
    )
}

