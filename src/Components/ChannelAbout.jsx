
const ChannelAbout = ({ channelPage }) => {
    return (
        <>
            {console.log(channelPage)}
            <div className="channelAbout">
                <div className="channelDescription">
                    <h4>Description</h4>
                    {channelPage.snippet.description}
                </div>
                <div className="statistics">
                    <h6>
                        Stats
                    </h6>
                    <p>
                        Joined {new Date(channelPage.snippet.publishedAt).toDateString()}
                    </p>
                    <p>
                        Views {parseInt(channelPage.statistics.viewCount).toLocaleString()}
                    </p>

                </div>
            </div>
        </>
    )
}

export default ChannelAbout;