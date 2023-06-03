import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { Loader } from ".";
import { uploadedTime } from "../utils/Formatter";


const PlayListDetails = ({ handleApiCall, handleScroll }) => {
    const { id } = useParams();
    const [playlistVideos, setPlayListVideos] = useState([]);
    const [curIdx, setCurIdx] = useState(0);
    const [loading, setLoading] = useState('');
    const [nextPageToken, setNextPageToken] = useState('');

    useEffect(() => {
        handleApiCall(`playlistItems?playlistId=${id}&part=snippet`, setPlayListVideos, setNextPageToken, setLoading);
        // eslint-disable-next-line
    }, [id]);

    let reference = {
        lock: 1
    }
    const atScrollEnd = () => {
        //lock variable is a LOCK to prevent race condition. (hapens when user hits bottom twice before it loads)
        if (
            window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 5 &&
            reference.lock
        ) {
            reference.lock = 0;//close the lock
            setLoading(true);
            handleScroll(setPlayListVideos, setNextPageToken, `playlistItems?playlistId=${id}&part=snippet&pageToken=${nextPageToken}`, setLoading, reference);
        }
    }

    useEffect(() => {
        if (nextPageToken === undefined) {
            window.removeEventListener('scroll', atScrollEnd);
            return;
        }
        window.addEventListener('scroll', atScrollEnd);
        return () => {
            window.removeEventListener('scroll', atScrollEnd);
        }
        // eslint-disable-next-line
    }, [nextPageToken]);

    if (playlistVideos === undefined || playlistVideos.length === 0) return <h1>Loading...</h1>
    return (
        <>
            <div className="container">
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${playlistVideos[curIdx].snippet.resourceId.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                </iframe>
            </div>
            <div className="moreDetails" style={{ width: '90%', margin: 'auto', borderBottom: '3px solid gray' }}>
                <h5>{playlistVideos[curIdx]?.snippet.title}</h5>
                <p style={{ paddingBottom: '1rem' }}>
                    <Link to={`/channel/${playlistVideos[0]?.snippet.channelId}`} style={{ textDecoration: "none" }}>
                        {playlistVideos[curIdx]?.snippet.channelTitle}
                    </Link> •&nbsp;
                    {uploadedTime(playlistVideos[curIdx]?.snippet?.publishedAt)} ago &nbsp;&nbsp;&nbsp;&nbsp;
                </p>
                <div className="playlist-controls">
                    <i
                        onClick={(curIdx === 0) ? () => { } : () => { setCurIdx(curIdx - 1) }}
                        style={{ opacity: (curIdx === 0) ? '0.2' : '1' }}
                        className="fa-solid fa-backward-step">
                    </i>
                    &nbsp; {curIdx + 1} &nbsp;
                    <i
                        onClick=
                        {
                            (curIdx === playlistVideos.length - 1) ?
                                () => { } : () => { setCurIdx(curIdx + 1) }
                        }
                        style={{ opacity: (curIdx === playlistVideos.length - 1) ? '0.2' : '1' }}
                        className="fa-solid fa-forward-step"></i>
                </div>
            </div>
            {
                playlistVideos.map((video, idx) => {
                    let thisVideoId = video.snippet.resourceId.videoId;
                    return (

                        <div
                            className="singlePlaylistVideo"
                            key={thisVideoId}
                            onClick={() => { setCurIdx(idx) }}
                            style={{ border: idx === curIdx && '2px solid royalblue' }}
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
            <div className="bottomLoader">
                {
                    (loading) &&
                    <img src={Loader} alt="Loading" style={{ margin: 'auto', width: '10rem' }} />
                }
                {
                    (!loading && playlistVideos.length === 0) &&
                    <h2>No Videos Found</h2>
                }
            </div>
        </>
    )
}
export default PlayListDetails