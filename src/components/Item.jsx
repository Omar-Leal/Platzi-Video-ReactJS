import React from 'react'
import { connect } from 'react-redux'
import { setFavorite } from '../accions'
import PropTypes from 'prop-types'
import '../assets/styles/components/Item.scss'
import PlayIcon from '../assets/static/play-icon.png'
import PlusIcon from '../assets/static/plus-icon.png'

const Item = (props) => {

  const {cover, title, year, contentRating, duration} = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      cover, title, year, contentRating, duration
     })
  }

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={cover}  />
      <div className="carousel-item__details">
          <div>
              <img className="carousel-item__details--img" src={PlayIcon} alt="Play Icon"/> 

              <img 
              onClick={handleSetFavorite}
              className="carousel-item__details--img" 
              src={PlusIcon}               
              alt="Plus Icon" /> 

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

};


export default connect(null, mapDispatchToProps)(Item);