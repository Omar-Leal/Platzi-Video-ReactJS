import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Searcher from '../components/Searcher'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import Item from '../components/Item'
import Footer from '../components/Footer'
import useInitialState from '../Hooks/useInitialState'

const API = 'http://localhost:3000/initalState'

import '../assets/styles/App.scss'

const App = () => {
 const  videos = useInitialState(API);

   const renderList = (video = []) => {
     return(
        <>
        {video.map((item) =>(
          <Item key={item.id} {...item} />
        ))}
        </>
     )
   }     
  
    return videos.length === 0 ? <h1>Loading...</h1> : (
    <div className="App">
      <Header />
      <Searcher />
        {videos.mylist.length > 0 &&
            <Categories title="My list">
              <Carousel>
                <Item />                    
              </Carousel>
            </Categories>    
        }

      <Categories title="Trends">
        <Carousel>
          {renderList(videos.trends)}

        </Carousel>
      </Categories>

      <Categories title="Originals">
        <Carousel>
          {renderList(videos.originals)}
        </Carousel>
      </Categories>

      
      <Footer />
    </div>
  )


};


export default App;