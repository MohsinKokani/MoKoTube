import { Link } from 'react-router-dom';
const ChannelCard = ({ channel }) => (
    <Link to={`/channel/${channel.snippet.channelId}`}>
        <div className="channel">
            <img src={channel.snippet.thumbnails.medium.url} alt="Thumbnail" />

            <div className="title">
                <h3>
                    {channel.snippet.channelTitle}
                </h3>
            </div>
        </div>
    </Link>
)
export default ChannelCard;