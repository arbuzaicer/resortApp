import React from 'react';
import {useContext} from 'react'
import {RoomContext} from '../../../Context/Context'
import Title from '../../Title/Title'

export default function RoomsFilter(props) {
    const context = useContext(RoomContext);
    const {type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets, handleChange, getUnique} = context;

    let uniqueTypes = getUnique(props.rooms, 'type');
    uniqueTypes = ['all', ...uniqueTypes].map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    });
    let uniqueCapacity = getUnique(props.rooms, 'capacity');
    uniqueCapacity = uniqueCapacity.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    });


    return (
        <section className='filter-container'>
            <Title title='Search rooms'/>
            <form className='filter-form'>
                {/*select type*/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className='form-control'
                        onChange={handleChange}>
                        {uniqueTypes}
                    </select>
                    {/*end select type*/}
                    {/*select capacity*/}
                    <div className="form-group">
                        <label htmlFor="capacity">Guests</label>
                        <select
                            name="capacity"
                            id="capacity"
                            value={capacity}
                            className='form-control'
                            onChange={handleChange}>
                            {uniqueCapacity}
                        </select>
                    </div>
                    {/*end select capacity*/}
                    {/*select price*/}
                    <div className="form-group">
                        <label htmlFor="price">Price {price}$</label>
                        <input type="range"
                               name="price"
                               id="price"
                               min={minPrice}
                               max={maxPrice}
                               className='form-control'
                               onChange={handleChange}
                               value={price}
                              />
                    </div>
                    {/*end select price*/}

                    {/*select rooms size*/}
                    <div className="form-group">
                        <label htmlFor="size">Room size</label>
                        <div className="size-inputs">
                            <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>
                            <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
                        </div>
                    </div>
                    {/*end select size*/}

                    {/*select breakfast*/}
                    <div className="form-group">
                        <label htmlFor="breakfast">Breakfast</label>
                        <input type="checkbox"
                               name="breakfast"
                               id="breakfast"
                               value={breakfast}
                               onChange={handleChange}
                               className="size-input"
                        />
                    </div>
                    {/*end breakfast*/}
                    {/*select pets*/}
                    <div className="form-group">
                        <label htmlFor="pets">Pets</label>
                        <input type="checkbox"
                               name="pets"
                               id="pets"
                               value={pets}
                               onChange={handleChange}
                               className="size-input"
                        />
                    </div>
                    {/*end pets*/}
                </div>

            </form>
        </section>
    )
}