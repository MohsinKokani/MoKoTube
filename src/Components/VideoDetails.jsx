import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import FetchFromApi from "../utils/FetchFromApi";
import { Feed } from '.';
import { uploadedTime } from "./VideoCard";


const VideoDetails = ({ setErrorStatus }) => {
    const { id } = useParams();
    const [relatedVideos, setRelatedvideos] = useState([]);
    const [videoDetails, setVideoDetails] = useState([]);
    useEffect(() => {
        FetchFromApi(`search?relatedToVideoId=${id}&part=id%2Csnippet&type=video`)
            .then((data) => {
                setRelatedvideos(data.items);
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
        FetchFromApi(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`)
            .then((data) => {
                if (data?.error) {
                    setErrorStatus({ present: true, code: data.error.code, message: data.error.message });
                    return;
                }
                setVideoDetails(data?.items[0]);
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
                        code: error.response?.status,
                        message: error.response?.data.message
                    })
                }
            })
        // eslint-disable-next-line
    }, [id])
    if (videoDetails === undefined || videoDetails.length === 0) return;
    return (
        <>
            <div className="container">
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                </iframe>
            </div>
            <div className="moreDetails" style={{ width: '90%', margin: 'auto', borderBottom: '3px solid gray' }}>
                <h5>{videoDetails.snippet.title}</h5>

                <p style={{ paddingBottom: '1rem' }}>
                    <Link to={`/channel/${videoDetails.snippet.channelId}`} style={{ textDecoration: "none" }}>
                        {videoDetails.snippet.channelTitle}
                    </Link> •&nbsp;
                    {parseInt(videoDetails.statistics.viewCount).toLocaleString()} views •&nbsp;
                    {uploadedTime(videoDetails.snippet.publishedAt)} ago &nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="fa-solid fa-heart"></i>
                    {videoDetails.statistics.likeCount}
                    <i className="fa-solid fa-heart"></i>
                </p>
            </div>
            <Feed videos={relatedVideos} />
        </>
    )
}


export default VideoDetails;