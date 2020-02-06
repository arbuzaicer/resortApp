import React, {Component} from 'react';
import Title from '../Title/Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/all';


class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: 'free cocktails',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            },
            {
                icon: <FaHiking/>,
                title: 'Endless Hiking',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            },
            {
                icon: <FaShuttleVan/>,
                title: 'Free shuttle',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            },
            {
                icon: <FaBeer/>,
                title: 'Strongest Beer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            }
        ]
    };

    render() {
        let services = this.state.services.map (item => {
            let single = <div key={item.title} className={'services__single'}>
                <span className="services__icon">
                    {item.icon}
                </span>
                <h6 className="services__title">
                    {item.title}
                </h6>
                <p className="services__descr">
                    {item.description}
                </p>
            </div>;

            return single;
        });

        return (
            <div className={'services-section'}>
                <Title title='Services'/>
                <section className={'services-center'}>
                    {services}
                </section>
            </div>
        );
    }
}

export default Services;