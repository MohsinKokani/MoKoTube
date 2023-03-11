
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ChannelDetais, VideoDetails, NavBar, HorizontalNav, Feed, ChannelAbout, History, ShowError, PlayListDetails, SearchFeed } from './Components';
import FetchFromApi from './utils/FetchFromApi';

const App = () => {
  const [channelPage, setChannelPage] = useState(null);
  const [channelvideos, setChannelVideos] = useState([]);

  const [errorStatus, setErrorStatus] = useState({
    present: false,
    code: 0,
    message: ""
  });
  const handleApiError = (error) => {
    if (error?.code === "ERR_NETWORK") {
      setErrorStatus({
        present: true,
        code: 0,
        message: "Please connect to Internet"
      })
    } else {
      setErrorStatus({
        present: true,
        code: error?.response.status,
        message: error?.response.data.message
      })
    }
  }
  const handleApiCall = (term, setter, TokenSetter) => {
    FetchFromApi(`search?part=snippet&q=${term}`)
      .then((data) => {
        if (data?.error) {
          setErrorStatus({ present: true, code: data.error.code, message: data.error.message });
          return;
        }
        setter(data?.items);
        TokenSetter(data?.nextPageToken);
      })
      .catch((error) => {
        handleApiError(error);
      })
  }

  

  return (
    <>

      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HorizontalNav handleApiError={handleApiError} handleApiCall={handleApiCall} setErrorStatus={setErrorStatus} />} />
          <Route path='/video/:id' element={<VideoDetails setErrorStatus={setErrorStatus} />} />
          <Route path='/playlist/:id' element={<PlayListDetails setErrorStatus={setErrorStatus} />} />
          <Route path='/search/:searchedTerm' element={<SearchFeed handleApiCall={handleApiCall} />} />
          <Route path='/history' element={<History />} />
          <Route path='/channel/:id'
            element={
              <ChannelDetais
                setErrorStatus={setErrorStatus}
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
      {
        errorStatus.present && <ShowError errorStatus={errorStatus} setErrorStatus={setErrorStatus} />
      }
    </>
  )
}
export default App;