
import { Link } from "react-router-dom";
import { myImg } from ".";
const PlaylistCard = ({ playlist }) => (
    <>
        <Link to={`/playlist/${playlist.id.playlistId}`}>
            <div className="thumbnail" key={playlist.id.playlistId}>
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
            </div>
        </div>
    </>
)
export default PlaylistCard;