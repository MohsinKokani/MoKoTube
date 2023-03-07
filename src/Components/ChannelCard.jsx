import { Link } from 'react-router-dom';
import {myImg} from '.';
const ChannelCard = ({ channel }) => (
    <Link to={`/channel/${channel.snippet.channelId}`} style={{textDecoration:'none'}}>
        <div className="channel">
            <img 
            src={channel.snippet.thumbnails.medium.url} 
            alt="Thumbnail" 
            onError={(e)=>{e.target.onError=null;e.target.src=myImg}}
            />

            <div className="title">
                <h3>
                    {channel.snippet.channelTitle}
                </h3>
            </div>
        </div>
    </Link>
)
export default ChannelCard;