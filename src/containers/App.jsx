import React from 'react'

import Header from '../components/Header'
import Searcher from '../components/Searcher'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import Item from '../components/Item'
import Footer from '../components/Footer'

import '../assets/styles/App.scss'

const App = () => (
  <div className="App">
    <Header />
    <Searcher />
    <Categories title="My list">
                              <Carousel>
                                        <Item />
                                        <Item />
                                        <Item />
                                        <Item />
                                        <Item />
                                        <Item />
                              </Carousel>
    </Categories>

    <Categories title="Trends">
                              <Carousel>
                                        <Item />
                                        <Item />
                                        <Item />
                                        <Item />
                                        <Item />
                                        <Item />
                              </Carousel>
    </Categories>

    <Categories title="Original from Platzi Videos">
                              <Carousel>
                                        <Item />
                                        <Item />
                                        <Item />
                                        <Item />
                                        <Item />
                                        <Item />
                              </Carousel>
    </Categories>
    <Footer />
  </div>
);


export default App;