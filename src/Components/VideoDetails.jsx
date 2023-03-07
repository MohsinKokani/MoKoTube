import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import FetchFromApi from "../utils/FetchFromApi";
import { Feed } from '.';
// import FetchFromApi from "../utils/FetchFromApi";


const VideoDetails = () => {
    const { id } = useParams();
    const [relatedVideos, setRelatedvideos] = useState([]);
    useEffect(() => {
        FetchFromApi(`search?relatedToVideoId=${id}&part=id%2Csnippet&type=video`)
            .then((data) => {
                console.log(data)
                console.log(data.items)
                setRelatedvideos(data.items);
            })
    }, [id])
    return (
        <>
            <div className="container">
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                </iframe>
            </div>
            <Feed videos={relatedVideos} />
        </>
    )
}


export default VideoDetails;