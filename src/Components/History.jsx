// import { useEffect } from "react";
import { useState } from "react";
import { Feed } from ".";

const History = () => {
    const [watchedVideos, setWatchedVideos] = useState(JSON.parse(localStorage.getItem('watchedVideos')));
    if (watchedVideos === null || watchedVideos.length === 0) {
        return <h1 style={{ color: "#00da24", marginLeft: '15rem' }}>No videos in History</h1>
    }
    return (
        <>
            <button id="clear-btn" onClick={() => { localStorage.setItem('watchedVideos', null); setWatchedVideos([]) }}>Clear All <i className="fa-solid fa-trash"></i></button>
            <Feed videos={watchedVideos.reverse()} />
        </>
    )
}
export default History;