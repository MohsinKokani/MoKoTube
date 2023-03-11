import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Feed } from '.';
const SearchFeed = ({ handleApiCall }) => {
    const { searchedTerm } = useParams();
    const searchFieldInput = document.querySelector('.searchField input');
    if (searchFieldInput !== null) {
        searchFieldInput.value = searchedTerm;
    }

    const [SearcedVideos, setSearchedVideo] = useState([]);
    const [searcedVideoToken, setSearchedVideoToken] = useState('');
    useEffect(() => {
        handleApiCall(searchedTerm, setSearchedVideo, setSearchedVideoToken)
        // eslint-disable-next-line
    }, [searchedTerm]);
    return (
        <>
            <Feed videos={SearcedVideos} />
        </>
    )
}
export default SearchFeed;