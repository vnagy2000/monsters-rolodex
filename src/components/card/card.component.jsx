import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.string.id}?set=set2&size=100x180`} />
        <h2> {props.string.name} </h2>
        <p> {props.string.email} </p>
    </div>
)