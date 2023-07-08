import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Feed, Loader, ChannelAbout } from '.';
const ChannelDetails = ({ handleApiCall, handleScroll }) => {
    const { id } = useParams();
    const [nextPageToken, setNextPageToken] = useState('');
    const [loading, setloading] = useState(false);
    const [channelPage, setChannelPage] = useState(null);
    const [channelvideos, setChannelVideos] = useState([]);
    const [showSection, setShowSection] = useState('Videos');

    useEffect(() => {
        setloading(true);
        handleApiCall(`channels?part=snippet%2Cstatistics&id=${id}`, setChannelPage, undefined, setloading);

        handleApiCall(`search?channelId=${id}&part=snippet%2Cid&order=date`, setChannelVideos, setNextPageToken, setloading);
        // eslint-disable-next-line
    }, [])

    let reference = {
        lock: 1
    }
    const atScrollEnd = () => {
        if (
            showSection === "Videos" && window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 15 &&
            reference.lock
        ) {
            reference.lock = 0;//close the lock
            setloading(true);
            handleScroll(setChannelVideos, setNextPageToken, `search?channelId=${id}&part=snippet%2Cid&pageToken=${nextPageToken}`, setloading, reference)
        }
    }
    useEffect(() => {
        if (nextPageToken === undefined) {
            window.removeEventListener('scroll', atScrollEnd);
            return;
        }
        window.addEventListener('scroll', atScrollEnd);
        return () => {
            window.removeEventListener('scroll', atScrollEnd);
        }
        // eslint-disable-next-line
    }, [nextPageToken, showSection]);

    return (
        <>
            <div className="channelBanner"
                style={{ backgroundImage: `url(${channelPage?.[0].brandingSettings.image?.bannerExternalUrl})` }}
            >
            </div>
            <div className="channelDetailHeader">
                <div className="channelImage"
                    style={{ backgroundImage: `url(${channelPage?.[0].snippet.thumbnails.medium.url})` }}
                >
                </div>
                <div className="moreDetails">
                    <h5 style={{ overflowWrap: 'unset', overflow: 'auto' }}>
                        {channelPage?.[0].snippet.title}
                    </h5>
                    <p>
                        <strong className='handleLongName'>{channelPage?.[0].snippet.customUrl}</strong>
                        &nbsp;&nbsp;&nbsp;
                        <strong>{parseInt(channelPage?.[0].statistics.subscriberCount).toLocaleString()} subscribers</strong>
                        &nbsp;&nbsp;&nbsp;
                        <strong>{channelPage?.[0].statistics.videoCount} videos</strong>
                    </p>
                    <p>
                        {channelPage?.[0].snippet.description.slice(0, 55)}...&nbsp;&nbsp;
                        <i className="fa-solid fa-angle-right" onClick={() => { setShowSection("About") }}></i>
                    </p>
                </div>
            </div>
            <div className="train">
                <div
                    className="coach"
                    onClick={() => { setShowSection("Videos") }}
                    style={{ background: showSection === "Videos" && "#fc1503" }}
                >
                    Videos
                </div>
                <div
                    className="coach"
                    onClick={() => { setShowSection("About") }}
                    style={{ background: showSection === "About" && "#fc1503" }}
                >
                    About
                </div>
            </div>
            {
                showSection === "Videos" &&
                <Feed videos={channelvideos} />
            }
            {
                showSection === "About" &&
                <ChannelAbout channelPage={channelPage?.[0]} />
            }
            <div className="bottomLoader">
                {
                    showSection === "Videos" && loading &&
                    <img src={Loader} alt="Loading" style={{ margin: 'auto', width: '10rem' }} />
                }
            </div>
        </>
    )
}
export default ChannelDetails;