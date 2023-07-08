
import { Link } from "react-router-dom";
import { myImg } from ".";
import { uploadedTime } from "../utils/Formatter";
const PlaylistCard = ({ playlist }) => {
    const addToHistory = () => {
        let watched = [];
        let localStorageVideos = localStorage.getItem("watchedVideos");
        if (localStorageVideos === null || localStorageVideos === "null") {
            watched.push(playlist);
            localStorage.setItem('watchedVideos', JSON.stringify(watched));
            return;
        }
        else {
            watched = JSON.parse(localStorageVideos);
        }
        let isUnique = true;
        watched.forEach((element) => {
            if (element.id.playlistId === playlist.id.playlistId) isUnique = false;
        })
        if (!isUnique) return;
        watched.push(playlist);
        localStorage.setItem('watchedVideos', JSON.stringify(watched));
    }
    return (
        <>
            <Link to={`/playlist/${playlist.id.playlistId}`}>
                <div className="thumbnail" key={playlist.id.playlistId} onClick={addToHistory}>
                    <img src={playlist.snippet.thumbnails.medium.url} alt="playlist" />
                    <div className="overlay-playlist-icon">
                        <i className="fa-solid fa-layer-group"></i>
                    </div>
                </div>
            </Link>
            <div className="details">
                <div className="author">
                    <Link to={`/channel/${playlist.snippet.channelId}`}>
                        <img src={myImg} alt="auth" />
                    </Link>
                </div>
                <div className="title">
                    <h3>
                        Playlist - {playlist.snippet.title}
                    </h3>
                    <Link to={`/channel/${playlist.snippet.channelId}`} style={{ textDecoration: "none" }}>
                        <b>
                            {playlist.snippet.channelTitle}
                        </b>
                    </Link>
                    <span> {uploadedTime(playlist.snippet.publishTime)} ago</span>
                </div>
            </div>
        </>
    )
}
export default PlaylistCard;