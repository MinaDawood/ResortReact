import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from '../components/Title';

export default class Services extends Component {
    state={
        services: [
            {
                icon: <FaCocktail />,
                title: 'free coctails',
                info: 'loremipsonvdsk cdskcndsk cdsjcndsk;jcnds dsjcbdsbsdou dsbdpdsns djsbdnj!'
            },
            {
                icon: <FaHiking />,
                title: 'endless hiking',
                info: 'loremipsonvdsk cdskcndsk cdsjcndsk;jcnds dsjcbdsbsdou dsbdpdsns djsbdnj!'
            },
            {
                icon: <FaShuttleVan />,
                title: 'free shutttle',
                info: 'loremipsonvdsk cdskcndsk cdsjcndsk;jcnds dsjcbdsbsdou dsbdpdsns djsbdnj!'
            },
            {
                icon: <FaBeer />,
                title: 'free beer',
                info: 'loremipsonvdsk cdskcndsk cdsjcndsk;jcnds dsjcbdsbsdou dsbdpdsns djsbdnj!'
            }
        ]
    }
    
    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
