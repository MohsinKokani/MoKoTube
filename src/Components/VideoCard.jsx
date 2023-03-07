import { Link } from 'react-router-dom';
import { myImg } from ".";
import React from "react";
export const uploadedTime = (date) => {
    let ans = "";
    const thatDate = new Date(date);
    // Convert date to milliseconds
    var date1_ms = thatDate.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = Date.now() - date1_ms;

    // Convert to seconds
    let difference = Math.round(difference_ms / 1000);
    if (difference > 31536000)
        ans = Math.round(difference / 31536000) + " years";

    else if (difference > 2630000)
        ans = Math.round(difference / 2630000) + " months";

    else if (difference > 86400)
        ans = Math.round(difference / 86400) + " days";

    else if (difference > 3600)
        ans = Math.round(difference / 3600) + " hours";

    else if (difference > 60)
        ans = Math.round(difference / 60) + " minutes";

    else
        ans = difference + " seconds";

    return ans;
}
const VideoCard = ({ video }) => (
    <>
        <Link to={`/video/${video.id.videoId}`}>
            <div className="thumbnail" key={video.id.videoId}>
                <img src={video.snippet.thumbnails.medium.url} alt="Thumbnail" />
            </div>
        </Link>
        <div className="details">
            <div className="author">
                <img src={myImg} alt="auth" />
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
export default VideoCard;