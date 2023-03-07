import React from "react";
import {VideoCard,ChannelCard,PlaylistCard} from ".";


const CategoryFeed = ({ videos }) => {
    return (
        <div className="videos">
            {
                videos?.map((video,idx) => (
                    <div className="video" key={idx}>
                        {video.id.videoId && <VideoCard video={video} />}
                        {video.id.channelId && <ChannelCard channel={video} />}
                        {video.id.playlistId && <PlaylistCard playlist={video} />}
                    </div>
                ))
            }
        </div>

    )
}
export default CategoryFeed;