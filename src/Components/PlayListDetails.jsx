import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import FetchFromApi from "../utils/FetchFromApi";
import { uploadedTime } from "./VideoCard";


const PlayListDetails = ({ setErrorStatus }) => {
    const { id } = useParams();
    const [playlistVideos, setPlayListVideos] = useState([]);
    const [currentPlaying, setCurrentPlaying] = useState('');
    useEffect(() => {
        FetchFromApi(`playlistItems?playlistId=${id}&part=snippet`)
            .then((data) => {
                setPlayListVideos(data.items);
                setCurrentPlaying(data.items[0].snippet.resourceId.videoId)
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
    }, [id])
    if (playlistVideos === undefined || playlistVideos.length === 0) return <h1>Loading...</h1>
    return (
        <>
            <div className="container">
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${currentPlaying}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                </iframe>
            </div>
            <div className="moreDetails" style={{ width: '90%', margin: 'auto', borderBottom: '3px solid gray' }}>
                <h5>{playlistVideos[0]?.snippet.title}</h5>

                <p style={{ paddingBottom: '1rem' }}>
                    <Link to={`/channel/${playlistVideos[0]?.snippet.channelId}`} style={{ textDecoration: "none" }}>
                        {playlistVideos[0]?.snippet.channelTitle}
                    </Link> •&nbsp;
                    {uploadedTime(playlistVideos[0]?.snippet?.publishedAt)} ago &nbsp;&nbsp;&nbsp;&nbsp;

                </p>
            </div>
            {
                playlistVideos.map((video) => {
                    let thisVideoId=video.snippet.resourceId.videoId;
                    return (

                        <div 
                            className="singlePlaylistVideo" 
                            key={thisVideoId} 
                            onClick={()=>{setCurrentPlaying(thisVideoId)}}
                            style={{border:thisVideoId===currentPlaying && '1px solid white'}}
                        >
                            <img src={video.snippet.thumbnails.medium.url} alt="thumb" />
                            <div className="moreDetails" style={{ width: '72%' }}>
                                <h5>{video.snippet.title}</h5>

                                <p style={{ paddingBottom: '1rem' }}>
                                    {video.snippet.channelTitle}
                                    •&nbsp;
                                    {uploadedTime(video.snippet?.publishedAt)} ago &nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </div>
                        </div>

                    )
                })
            }
        </>
    )
}
export default PlayListDetails