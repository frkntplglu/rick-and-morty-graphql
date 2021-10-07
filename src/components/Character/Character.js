import React from 'react'
import "./character.scss"
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';



function Character({id, name, status, species, location, image, episode}) {
    return (
        <>
        <article className="character">
            <figure className="character-photo">
                <img src={image} alt={name} />
            </figure>
            <div className="character-content">
                <h1><Link to={`/character/${id}`}>{name}</Link></h1>
                <div className="status"><span className={status.toLowerCase()}></span> {status} - {species}</div>
                <div className="location">
                    <span>Last known location :</span>
                    {location.name}
                </div>
                <div className="episode">
                    <span>First seen in : </span>
                    {episode[0].name}
                </div>
            </div>
        </article>
        </>
    )
}

export default Character

Character.propTypes = {
    name: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string,
    location: PropTypes.object,
    image: PropTypes.string,
    episode: PropTypes.array
}