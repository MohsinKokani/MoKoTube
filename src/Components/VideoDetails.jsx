import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { Loader } from '.';
import { duration, uploadedTime } from "../utils/Formatter.js";

const VideoDetails = ({ handleApiCall }) => {
    const { id } = useParams();
    const [videoDetails, setVideoDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [showDescription, setShowDescription] = useState(false);
    useEffect(() => {
        setLoading(true)
        handleApiCall(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`
            , setVideoDetails
            , undefined,
            setLoading);
        // eslint-disable-next-line
    }, [id])
    if (videoDetails?.[0] === undefined) return (
        <>
            <div className="container">
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                </iframe>
            </div>
            {
                loading &&
                <div className="bottomLoader">
                    <img src={Loader} alt="Loading..." />
                </div>
            }
        </>
    );
    return (
        <>
            <div className="container">
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                </iframe>
            </div>
            {
                videoDetails?.[0].length === 0 &&
                <h2>Unable to Load Video Details</h2>
            }
            {
                videoDetails?.[0].length !== 0 &&
                <div className="moreDetails" style={{ width: '90%', margin: 'auto', borderBottom: '3px solid gray' }}>
                    <h5>{videoDetails?.[0].snippet.title}</h5>

                    <p>
                        <Link to={`/channel/${videoDetails?.[0].snippet.channelId}`} className="handleLongName">
                            {videoDetails?.[0].snippet.channelTitle}
                        </Link> •&nbsp;
                        {parseInt(videoDetails?.[0].statistics.viewCount).toLocaleString()} views •&nbsp;
                        {uploadedTime(videoDetails?.[0].snippet.publishedAt)} ago &nbsp;&nbsp;&nbsp;&nbsp;
                        <i className="fa-solid fa-heart"></i>
                        {videoDetails?.[0].statistics.likeCount}
                        <i className="fa-solid fa-heart"></i>
                    </p>

                    <p>
                        <span>
                            {
                                videoDetails[0].contentDetails?.duration === 'P0D' &&
                                <>Live</>
                            }
                            {
                                videoDetails[0].contentDetails?.duration !== 'P0D' &&
                                duration(videoDetails[0].contentDetails?.duration)
                            }
                        </span>
                        <button id="description-btn" onClick={() => { setShowDescription(!showDescription) }}>
                            Description <span style={{ transform: showDescription ? 'rotate(180deg)' : '' }}>🔻</span>
                        </button>
                    </p>
                    <pre className="description-box" style={{ display: showDescription ? 'block' : 'none' }}>
                        {videoDetails[0].snippet.description}
                    </pre>
                </div>
            }
        </>
    )
}


export default VideoDetails;