import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Feed, Loader } from '.';
const SearchFeed = ({ handleApiCall, handleScroll }) => {
    const { searchedTerm } = useParams();
    const [searchedVideos, setSearchedVideo] = useState([]);
    const [searcedVideoToken, setSearchedVideoToken] = useState('');
    const [loading, setLoading] = useState(false);

    const searchFieldInput = document.querySelector('.searchField input');
    if (searchFieldInput !== null) {
        searchFieldInput.value = searchedTerm;
    }

    useEffect(() => {
        setLoading(true);
        setSearchedVideo([])
        handleApiCall(`search?part=snippet&q=${searchedTerm}`, setSearchedVideo, setSearchedVideoToken, setLoading);

        // eslint-disable-next-line
    }, [searchedTerm]);

    let reference = {
        lock: 1
    }
    const atScrollEnd = () => {
        //lock variable is a LOCK to prevent race condition. (hapens when user hits bottom twice before it loads)
        if (
            window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 15 &&
            reference.lock
        ) {
            reference.lock = 0;//close the lock
            setLoading(true);
            handleScroll(setSearchedVideo, setSearchedVideoToken, `search?part=snippet&q=${searchedTerm}&pageToken=${searcedVideoToken}`, setLoading, reference);
        }
    }

    useEffect(() => {
        if (searcedVideoToken === undefined) {
            window.removeEventListener('scroll', atScrollEnd);
            return;
        }
        window.addEventListener('scroll', atScrollEnd);
        return () => {
            window.removeEventListener('scroll', atScrollEnd);
        }
        // eslint-disable-next-line
    }, [searcedVideoToken, searchedTerm]);
    return (
        <>
            <Feed videos={searchedVideos} />
            <div className="bottomLoader">
                {
                    (loading) &&
                    <img src={Loader} alt="Loading" style={{ margin: 'auto', width: '10rem' }} />
                }
                {
                    (!loading && searchedVideos.length === 0) &&
                    <h2>No Videos Found</h2>
                }
            </div>
        </>
    )
}
export default SearchFeed;