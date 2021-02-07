import React from 'react'

import Header from '../components/Header'
import Searcher from '../components/Searcher'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import Item from '../components/Item'

import '../assets/styles/App.scss'

const App = () => (
  <div className="App">
    <Header />
    <Searcher />
    <Categories>
              <Carousel>
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
              </Carousel>
    </Categories>
  </div>
);


export default App;