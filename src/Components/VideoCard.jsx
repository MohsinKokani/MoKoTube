import { Link } from 'react-router-dom';
import { myImg } from ".";
import React from "react";
import { uploadedTime } from '../utils/Formatter.js';

const VideoCard = ({ video }) => {
    const addToHistory = () => {
        let watched = [];
        let localStorageVideos = localStorage.getItem("watchedVideos");
        if (localStorageVideos === null || localStorageVideos === "null") {
            watched.push(video);
            localStorage.setItem('watchedVideos', JSON.stringify(watched));
            return;
        }
        else {
            watched = JSON.parse(localStorageVideos);
        }
        let isUnique = true;
        watched.forEach((element) => {
            if (element.id.videoId === video.id.videoId) isUnique = false;
        })
        if (!isUnique) return;
        watched.push(video);
        localStorage.setItem('watchedVideos', JSON.stringify(watched));
    }
    return (

        <>
            <Link to={`/video/${video.id.videoId}`}>
                <div className="thumbnail" key={video.id.videoId} onClick={addToHistory}>
                    <img src={video.snippet.thumbnails.medium.url} alt="Thumbnail" />
                </div>
            </Link>
            <div className="details">
                <div className="author">
                    <Link to={`/channel/${video.snippet.channelId}`}>
                        <img src={myImg} alt="auth" />
                    </Link>
                </div>
                <div className="title">
                    <h3>
                        {video.snippet.title}
                    </h3>
                    <Link to={`/channel/${video.snippet.channelId}`} style={{ textDecoration: "none" }}>
                        <b>
                            {video.snippet.channelTitle}
                        </b>
                    </Link>
                    <span> {uploadedTime(video.snippet.publishTime)} ago</span>
                </div>
            </div>
        </>
    )
}
export default VideoCard;