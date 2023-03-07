
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ChannelDetais, VideoDetails, NavBar, HorizontalNav, Feed, ChannelAbout } from './Components';
import ShowError from './Components/ShowError';
import FetchFromApi from './utils/FetchFromApi';
const App = () => {
  const [category, setCategory] = useState('all');
  const [categoryVideos, setCategoryVideos] = useState([]);
  const [searchedTerm, setSearchedTerm] = useState('all');
  const [videos, setVideos] = useState([]);
  const [channelPage, setChannelPage] = useState(null);
  const [channelvideos, setChannelVideos] = useState([]);

  const [errorStatus, setErrorStatus] = useState({
    present: false,
    code: 0,
    message: ""
  });

  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${category}`)
      .then((data) => {
        setCategoryVideos(data?.items)
      })
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          setErrorStatus({
            present: true,
            code: 0,
            message: "Please connect to Internet"
          })
        } else {
          setErrorStatus({
            present: true,
            code: error.response.status,
            message: error.response.data.message
          })
        }
      })
    // eslint-disable-next-line
  }, [category]);
  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${searchedTerm}`)
      .then((data) => {
        setVideos(data.items)
      })
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          setErrorStatus({
            present: true,
            code: 0,
            message: "Please connect to Internet"
          })
        } else {
          setErrorStatus({
            present: true,
            code: error.response.status,
            message: error.response.data.message
          })
        }
      })
    // eslint-disable-next-line
  }, [searchedTerm]);
  return (
    <>

      <BrowserRouter>
        <NavBar setSearchedTerm={setSearchedTerm} />
        <Routes>
          <Route path='/' element={<HorizontalNav category={category} setCategory={setCategory} categoryVideos={categoryVideos} />} />
          <Route path='/video/:id' element={<VideoDetails setErrorStatus={setErrorStatus} />} />
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
      {
        errorStatus.present && <ShowError errorStatus={errorStatus} setErrorStatus={setErrorStatus} />
      }
    </>
  )
}
export default App;



// {
//   "message": "Request failed with status code 403",
//   "name": "AxiosError",
//   "stack": "AxiosError: Request failed with status code 403\n    at settle (http://localhost:3000/static/js/bundle.js:49591:12)\n    at XMLHttpRequest.onloadend (http://localhost:3000/static/js/bundle.js:48286:66)",
//   "config": {
//       "transitional": {
//           "silentJSONParsing": true,
//           "forcedJSONParsing": true,
//           "clarifyTimeoutError": false
//       },
//       "adapter": [
//           "xhr",
//           "http"
//       ],
//       "transformRequest": [
//           null
//       ],
//       "transformResponse": [
//           null
//       ],
//       "timeout": 0,
//       "xsrfCookieName": "XSRF-TOKEN",
//       "xsrfHeaderName": "X-XSRF-TOKEN",
//       "maxContentLength": -1,
//       "maxBodyLength": -1,
//       "env": {},
//       "headers": {
//           "Accept": "application/json, text/plain, */*",
//           "X-RapidAPI-Key": "da93a7585dmshd34656708c45dcdp1d4560jsn0f117ae2fbca",
//           "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com"
//       },
//       "params": {
//           "regionCode": "IN",
//           "maxResults": "40"
//       },
//       "method": "get",
//       "url": "https://youtube-v31.p.rapidapi.com/search?part=snippet&q=Cricket"
//   },
//   "code": "ERR_BAD_REQUEST",
//   "status": 403
// }

