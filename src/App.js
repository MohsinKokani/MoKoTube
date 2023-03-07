
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ChannelDetais, VideoDetails, NavBar, HorizontalNav, Feed, ChannelAbout } from './Components';
import FetchFromApi from './utils/FetchFromApi';
const App = () => {
  const [category, setCategory] = useState('all');
  const [categoryVideos, setCategoryVideos] = useState([]);
  const [searchedTerm, setSearchedTerm] = useState('all');
  const [videos, setVideos] = useState([]);
  const [channelvideos, setChannelVideos] = useState([]);
  const [channelPage, setChannelPage] = useState(null);
  
  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${category}`)
      .then((data) => {
        setCategoryVideos(data.items)
      })
    // eslint-disable-next-line
  }, [category]);
  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${searchedTerm}`)
      .then((data) => {
        console.log(data.items)
        setVideos(data.items)
      })
    // eslint-disable-next-line
  }, [searchedTerm]);
  return (
    <>

      <BrowserRouter>
        <NavBar searchedTerm={searchedTerm} setSearchedTerm={setSearchedTerm} />
        <Routes>
          <Route path='/' element={<HorizontalNav category={category} setCategory={setCategory} categoryVideos={categoryVideos} />} />
          <Route path='/video/:id' element={<VideoDetails />} />
          <Route path='/search/:searchedTerm' element={<Feed videos={videos} />} />
          <Route path='/channel/:id'
            element={
              <ChannelDetais
                setChannelVideos={setChannelVideos}
                channelPage={channelPage}
                setChannelPage={setChannelPage}
              />
            }
          >
            <Route path='/channel/:id/videos' element={<Feed videos={channelvideos} />} />
            <Route path='/channel/:id/about' element={<ChannelAbout channelPage={channelPage} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;





