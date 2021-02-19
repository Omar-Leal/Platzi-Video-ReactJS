import React, { useEffect, useState } from 'react'
import{ connect } from 'react-redux' 
import Searcher from '../components/Searcher'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import Item from '../components/Item'
// import useInitialState from '../Hooks/useInitialState'
import Loader from '../components/Loader'


//const API = 'http://localhost:3000/initalState'

import '../assets/styles/App.scss'

const Home = ({ myList, trends, originals}) => {
 //const  videos = useInitialState(API);

   const renderList = (video) => {
     return (
        <>
        {video.map((item) =>(
          <Item key={item.id} {...item} />
        ))}
        </>
     )
   }   
  
    return /* videos.length === 0 ? <h1><Loader /></h1> : */  (
    <React.Fragment>
      
      <Searcher />
        {myList.length > 0 &&
            <Categories title="My list">
              <Carousel>
                <Item />                    
              </Carousel>
            </Categories>    
        }

      <Categories title="Trends">
        <Carousel>
          {renderList(trends)}

        </Carousel>
      </Categories>

      <Categories title="Originals">
        <Carousel>
          {renderList(originals)}
        </Carousel>
      </Categories>

      
      
    </React.Fragment>
  )


};

//creating a connector 

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  };
};

export default connect(mapStateToProps, null)(Home);