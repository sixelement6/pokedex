import React from "react";
import './App.css'

const PokemonThumnail = ({ id, name, img, type }) => {
    return (
        <div className="thumb-container">
            <div className="number">
                <small>#0{id}</small>
            </div>
            <img src={img} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default PokemonThumnail