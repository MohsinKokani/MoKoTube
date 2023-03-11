import { useParams, Link, Outlet } from 'react-router-dom'
import { useEffect } from 'react';
import FetchFromApi from '../utils/FetchFromApi';

const ChannelDetails = ({ setChannelVideos, channelPage, setChannelPage, setErrorStatus }) => {
    const { id } = useParams();


    useEffect(() => {
        FetchFromApi(`channels?part=snippet%2Cstatistics&id=${id}`)
            .then((data) => {
                setChannelPage(data?.items?.[0]);
            }).catch((error) => {
                if (error.code === "ERR_NETWORK") {
                  setErrorStatus({
                    present: true,
                    code: 0,
                    message: "Please connect to Internet"
                  })
                } else {
                  setErrorStatus({
                    present: true,
                    code: error.code,
                    message: error.message
                  })
                }
              })
        FetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`)
            .then((data) => {
                setChannelVideos(data?.items);
            }).catch((error) => {
                if (error.code === "ERR_NETWORK") {
                  setErrorStatus({
                    present: true,
                    code: 0,
                    message: "Please connect to Internet"
                  })
                } else {
                  setErrorStatus({
                    present: true,
                    code: error.code,
                    message: error.message
                  })
                }
              })
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <div className="channelBanner"
                style={{ backgroundImage: `url(${channelPage?.brandingSettings.image.bannerExternalUrl})` }}
            >
            </div>
            <div className="channelDetailHeader">
                <div className="channelImage"
                    style={{ backgroundImage: `url(${channelPage?.snippet.thumbnails.medium.url})` }}
                >
                </div>
                <div className="moreDetails">
                    <h5>
                        {channelPage?.snippet.title}
                    </h5>
                    <p>
                        {channelPage?.snippet.customUrl}&nbsp;&nbsp;&nbsp;
                        {parseInt(channelPage?.statistics.subscriberCount).toLocaleString()} subscribers&nbsp;&nbsp;&nbsp;
                        {channelPage?.statistics.videoCount} videos
                    </p>
                    <p>
                        {channelPage?.snippet.description.slice(0, 55)}...&nbsp;&nbsp;
                        <Link to={`/channel/${id}/about`} style={{ textDecoration: 'none',color:'gray' }}>
                            <i className="fa-solid fa-angle-right"></i>
                        </Link>
                    </p>
                </div>
            </div>
            <div className="train">
                <Link to={`/channel/${id}/videos`} style={{ textDecoration: 'none' }}>
                    <div className="coach">
                        Videos
                    </div>
                </Link>
                <Link to={`/channel/${id}/about`} style={{ textDecoration: 'none' }}>
                    <div className="coach">
                        About
                    </div>
                </Link>
            </div>
            <Outlet />
        </>
    )
}
export default ChannelDetails;