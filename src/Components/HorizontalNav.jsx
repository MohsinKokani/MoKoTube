
import React, { useEffect, useState } from "react";
import FetchFromApi from "../utils/FetchFromApi";
import { Feed } from './';
let categories = [
    'Shorts',
    'Live',
    'Music',
    'Cricket',
    'News',
    'Comedy',
    'Science',
    'Gaming',
    'Stand up comedy',
    'Travel',
    'Cooking',
    'Meditation',
    'Technology',
    'Weather'
]

const HorizontalNav = ({handleApiError, handleApiCall,setErrorStatus }) => {
    const [category, setCategory] = useState('all');
    const [categoryVideos, setCategoryVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState('');
    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
        ) {
            // User has scrolled to the bottom of the page, fetch the next page of data
            FetchFromApi(`search?part=snippet&q=${category}&pageToken=${nextPageToken}`)
                .then((data) => {
                    if (data?.error) {
                        setErrorStatus({ present: true, code: data.error.code, message: data.error.message });
                        return;
                    }
                    setCategoryVideos((prevVideos) => [...prevVideos, ...data?.items]);
                    setNextPageToken(data?.nextPageToken);
                })
                .catch((error) => {
                    handleApiError(error);
                })
        }
    };

    useEffect(() => {
        handleApiCall(category, setCategoryVideos, setNextPageToken);
        // eslint-disable-next-line
    }, [category]);
    useEffect(() => {
        const handleTrain = (e) => {
            const container = document.querySelector(".train");
            if (e.deltaY > 0)
                container.scrollLeft += 50;
            else
                container.scrollLeft -= 50;
            e.preventDefault();
        }
        //for horizontal scroll 
        const container = document.querySelector(".train");
        container.addEventListener("wheel", handleTrain);
        return () => {
            container.removeEventListener('wheel', handleTrain);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
        // eslint-disable-next-line
    }, [nextPageToken]);
    return (
        <>
            <div className="train">
                {
                    categories.map((element) =>
                        <div
                            key={element}
                            className="coach"
                            onClick={() => { setCategory(element) }}
                            style={{ background: element === category && "#fc1503" }}
                        >
                            {element}
                        </div>
                    )
                }
            </div>
            <Feed videos={categoryVideos} />
        </>
    )
}

export default HorizontalNav;