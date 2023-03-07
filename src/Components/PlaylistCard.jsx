
import { myImg } from ".";
const PlaylistCard = ({ playlist }) => (
    <>
        <div className="thumbnail" key={playlist.id.playlistId}>
            <img src={playlist.snippet.thumbnails.medium.url} alt="playlist" />
        </div>
        <div className="details">
            <div className="author">
                <img src={myImg} alt="auth" />
            </div>
            <div className="title">
                <h3>
                    Playlist - {playlist.snippet.title}
                </h3>
                <i >
                   {playlist.snippet.channelTitle}
                </i>
            </div>
        </div>
    </>
)
export default PlaylistCard;