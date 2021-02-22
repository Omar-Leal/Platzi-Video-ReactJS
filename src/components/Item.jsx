import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setFavorite, deleteFavorite } from '../accions'
import PropTypes from 'prop-types'
import '../assets/styles/components/Item.scss'
import PlayIcon from '../assets/static/play-icon.png'
import PlusIcon from '../assets/static/plus-icon.png'
import removeIcon from '../assets/static/remove-icon.png'

const Item = (props) => {

  const { id, cover, title, year, contentRating, duration, isList} = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration
     })
  }

  const handleDeleteFavorite = (item__id) => {
    props.deleteFavorite(item__id)
  }

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={cover}  />
      <div className="carousel-item__details">
          <div>
            <Link to={`/player/${id}`}> 
                <img 
                className="carousel-item__details--img" 
                src={PlayIcon} 
                alt="Play Icon"
                /> 
            </Link> 

              {isList === true ? 
                <img
                onClick={() => handleDeleteFavorite(id)}
                src={removeIcon}
                className="carousel-item__details--img"
                /> : 
                
                <img 
                onClick={handleSetFavorite}
                className="carousel-item__details--img" 
                src={PlusIcon}               
                alt="Plus Icon" /> 


              }

              

          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  )
  


};

Item.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
};


export default connect(null, mapDispatchToProps)(Item);